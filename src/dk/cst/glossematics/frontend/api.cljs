(ns dk.cst.glossematics.frontend.api
  "Common API access operations."
  (:require [lambdaisland.fetch :as fetch]
            [dk.cst.glossematics.frontend.state :as state]
            [kitchen-async.promise :as p]))

;; Some state to keep track of modals to avoid concurrent instances.
(def ^:dynamic *modal-dialog*)

(defn refresh-dialog-msg
  [status]
  (str "Cannot fetch necessary data from the server. "
       (case status
         403 "The resource is restricted — you may have been logged out!\n\n"
         404 "The resource does not exist — the page may need to refresh!\n\n"
         nil)
       "Do you want to refresh the page?\n\n"))

(defn refresh-dialog
  "Display a modal dialog asking the user to reload the page in a `msg`."
  [status]
  (when-not *modal-dialog*
    (set! *modal-dialog* true)
    (if (js/confirm (refresh-dialog-msg status))
      (js/location.reload)
      (set! *modal-dialog* false))))

(defn sanitize-url
  [url]
  (if state/development?
    (str "http://0.0.0.0:8080" url)
    url))

(defn transit-get
  "Do a GET request for expected transit data at `url`, returning the body.
  If a request is bad (e.g. 403), display a dialog asking the user to refresh."
  [url]
  (p/let [{:keys [status body]} (fetch/get (sanitize-url url))]
    (if (not= status 200)
      (refresh-dialog status)
      body)))
