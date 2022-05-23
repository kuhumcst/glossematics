(ns dk.cst.glossematics.frontend.api
  "Common API access operations."
  (:require [lambdaisland.fetch :as fetch]
            [kitchen-async.promise :as p]
            [dk.cst.glossematics.frontend.state :as state]))

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
      (js/location.replace (str (:saml-login state/paths)
                                "?RelayState=" js/location.href)))))

(defn normalize-url
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
  (p/let [{:keys [status body]} (fetch/get (normalize-url url) opts)]
    (if (not= status 200)
      (refresh-dialog status)
      body)))
