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
         nil)
       "Do you want to log in again and refresh the page?\n\n"))

(defn refresh-dialog
  "Display a dialog based on the HTTP `status` asking to refresh the page."
  [status]
  (when-not state/*block-modal-dialogs*
    (set! state/*block-modal-dialogs* true)
    (when (js/confirm (refresh-dialog-msg status))
      (-> (sp.auth/saml-path state/paths :saml-login js/location.href)
          (js/location.replace)))))

(defn api-url
  [url]
  (if state/development?
    (str "http://localhost:8080" url)
    url))

(defn fetch
  "Do a GET request for the resource at `url`, returning the response body.
  Bad response codes result in a dialog asking the user to log in again.

  Usually, bad responses (e.g. 403) are caused by frontend-server mismatch
  which can be resolved by loading the latest version of the frontend app."
  [url & [opts]]
  (let [current-fetch [url opts]]
    (when-not (get @state/fetches current-fetch)
      (swap! state/fetches conj current-fetch)
      (p/let [{:keys [status body] :as m} (fetch/get (api-url url) opts)]
        (if-not (<= 200 status 299)
          (refresh-dialog status)
          (do
            (swap! state/fetches disj current-fetch)
            body))))))

(defn login
  []
  (->> (sp.auth/saml-path state/paths :saml-login js/location.href)
       (set! js/location.href)))

(defn logout
  []
  (.then (fetch/post (api-url (sp.auth/saml-path state/paths :saml-logout)))
         #(reset! state/authenticated? false)))

(defn add-bookmark
  [user path page]
  (let [title (fshared/location->page-title @state/location)]
    (.then (fetch/post (api-url (str "/user/" user "/bookmarks"))
                       {:body {:path       path
                               :page       page
                               :title      title
                               :visibility :public}})
           (fn [{:keys [status body]}]
             (when (get #{200 201} status)
               (let [[k v] body]
                 (swap! state/bookmarks assoc k v)))))))

(defn del-bookmark
  [user path id]
  (.then (fetch/delete (api-url (str "/user/" user "/bookmarks/" id)))
         (fn [{:keys [status]}]
           (when (= status 204)
             (swap! state/bookmarks dissoc path)))))
