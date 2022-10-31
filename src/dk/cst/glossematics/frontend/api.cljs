(ns dk.cst.glossematics.frontend.api
  "Common API access operations."
  (:require [lambdaisland.fetch :as fetch]
            [kitchen-async.promise :as p]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.shared :as fshared]))

(defn- refresh-dialog-msg
  [status]
  (str "Cannot fetch necessary data from the server. "
       (case status
         403 "The resource is restricted — you may have been logged out!\n\n"
         404 "The resource does not exist — the page may need to refresh!\n\n"
         500 "The server responded with an error!\n\n"
         nil)
       "Do you want to log in again and try to refresh the page?\n\n"))

(defn refresh-dialog
  "Display a dialog based on the HTTP `status` asking to refresh the page."
  [status]
  (when-not state/*block-modal-dialogs*
    (set! state/*block-modal-dialogs* true)
    (if (js/confirm (refresh-dialog-msg status))
      (-> (sp.auth/saml-path state/paths :saml-login js/location.href)
          (js/location.replace))
      (js/history.back))))

(defn fetch
  "Do a GET request for the resource at `url`, returning the response body.
  Bad response codes result in a dialog asking the user to log in again.

  Usually, bad responses (e.g. 403) are caused by frontend-server mismatch
  which can be resolved by loading the latest version of the frontend app."
  [url & [opts]]
  (let [url'          (fshared/backend-url url)
        current-fetch [url' opts]]
    (when-not (get @state/fetches current-fetch)
      (swap! state/fetches conj current-fetch)
      (p/let [{:keys [status body] :as m} (fetch/get url' opts)]
        (swap! state/fetches disj current-fetch)
        (if-not (<= 200 status 299)
          (refresh-dialog status)
          body)))))

(defn login
  []
  (->> (sp.auth/saml-path state/paths :saml-login js/location.href)
       (set! js/location.href)))

(defn logout
  []
  (.then (-> (sp.auth/saml-path state/paths :saml-logout)
             (fshared/backend-url)
             (fetch/post))
         #(reset! state/authenticated? false)))

(defn update-comments!
  "Get current list of comments for `entity-id` and update frontend state."
  [entity-id]
  (let [endpoint (fshared/backend-url (str "/entity/" entity-id "/comments"))]
    (.then (fetch/get endpoint)
           (fn [{:keys [status body]}]
             (if (= 200 status)
               (let [[_ comments] body]
                 (swap! state/comments assoc entity-id comments))
               (swap! state/comments dissoc entity-id))))))

(defn add-comment!
  "Optimistically add comment `body` for `entity-id` at `target` for `user`.

  The frontend is updated immediately with partial data. If the backend request
  fails, the frontend change is also reverted."
  [user entity-id body target]
  (let [endpoint (fshared/backend-url (str "/entity/" entity-id "/comments"))
        comment  {:comment/target target
                  :comment/body   (not-empty body)
                  :comment/author user}
        cached   (get @state/comments entity-id)]
    (swap! state/comments update entity-id conj comment)    ; optimistic change
    (.then (fetch/post endpoint {:body comment})
           (fn [{:keys [status body]}]
             (if (= 200 status)
               (let [[_ comments] body]
                 (swap! state/comments assoc entity-id comments)) ; confirm
               (swap! state/comments assoc entity-id cached)))))) ; revert

(defn add-bookmark!
  "Optimistically add bookmark for `user` at `path` (a type of `page`).

  The frontend is updated immediately with partial data. If the backend request
  fails, the frontend change is also reverted."
  [user path page]
  (let [endpoint (fshared/backend-url (str "/user/" user "/bookmarks"))
        title    (fshared/location->page-title @state/location)
        bookmark {:bookmark/path       path
                  :bookmark/page       page
                  :bookmark/title      title
                  :bookmark/visibility :public}]
    (swap! state/bookmarks assoc path bookmark)             ; optimistic change
    (.then (fetch/post endpoint {:body bookmark})
           (fn [{:keys [status body]}]
             (if (get #{200 201} status)
               (let [[_ bookmark] body]
                 (swap! state/bookmarks assoc path bookmark)) ; confirm
               (swap! state/bookmarks dissoc path))))))     ; revert

(defn del-bookmark!
  "Optimistically delete bookmark with specified `id` for `user` at `path`.

  The frontend is updated immediately. If the backend request fails, the
  frontend change is also reverted... unless we receive a 404 status, in which
  case the bookmark must be assumed to not exist at all."
  [user path id]
  (let [bookmark (get @state/bookmarks path)
        url      (fshared/backend-url (str "/user/" user "/bookmarks/" id))]
    (swap! state/bookmarks dissoc path)                     ; optimistic change
    (.then (fetch/delete url)
           (fn [{:keys [status]}]
             (if (get #{204 404} status)
               (swap! state/bookmarks dissoc path)          ; confirm
               (swap! state/bookmarks assoc path bookmark)))))) ; revert
