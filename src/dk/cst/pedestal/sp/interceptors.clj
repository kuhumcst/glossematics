(ns dk.cst.pedestal.sp.interceptors
  "Standard interceptors for the SAML login flow + some helper interceptors."
  (:require [clojure.pprint :refer [pprint]]
            [clojure.walk :as walk]
            [time-literals.data-readers]                    ; tagged literals
            [time-literals.read-write :as tl]
            [saml20-clj.core :as saml]
            [saml20-clj.coerce :as coerce]
            [saml20-clj.encode-decode :as saml-decode]
            [io.pedestal.interceptor :as ic]))

;; Make sure that echo-assertions prints timestamps in a nice way
(tl/print-time-literals-clj!)

(defn echo-response
  "Handler echoing full SAML response (including assertions) in session store."
  [req]
  {:status  200
   :headers {"Content-Type" "text/xml"}
   :body    (get-in req [:session :saml :response])})

(defn echo-request
  "Handler echoing full SAML request in session store."
  [req]
  (if-let [saml-request (get-in req [:session :saml :request])]
    {:status  200
     :headers {"Content-Type" "text/xml"}
     :body    saml-request}
    {:status  404
     :headers {}}))

(defn echo-assertions
  "Handler echoing SAML response assertions in session store."
  [req]
  {:status  200
   :headers {"Content-Type"        "application/edn"
             "Content-Disposition" "filename=\"assertions.edn\""}
   :body    (-> (get-in req [:session :saml :assertions])
                (pprint)
                (with-out-str))})

(defn echo-session
  "Handler echoing all current SAML-related information in session store."
  [req]
  (if-let [saml-session (get-in req [:session :saml])]
    {:status  200
     :headers {"Content-Type"        "application/edn"
               "Content-Disposition" "filename=\"session.edn\""}
     :body    (with-out-str (pprint saml-session))}
    {:status  404
     :headers {}}))

(defn metadata
  "SAML Metadata handler from an expanded `conf`. Returns the metadata as XML."
  [{:keys [app-name
           acs-url
           sp-cert]
    :as   conf}]
  (fn [_]
    {:status  200
     :headers {"Content-Type" "text/xml"}
     :body    (saml/metadata conf)}))

(defn request
  "SAML request handler from an expanded `conf`. Redirects login to IdP.
  Custom RelayState taking the form of a URL can be provided as a query-param."
  [{:keys [app-name
           acs-url
           idp-url
           issuer
           credential
           state-manager
           relay-state]
    :as   conf}]
  (fn [{:keys [query-params] :as req}]
    (let [saml-request (saml/request (dissoc conf :relay-state))
          relay-state* (or (:RelayState query-params)
                           relay-state
                           "/")]
      (assoc (saml/idp-redirect-response saml-request idp-url relay-state*)
        :session {:saml {:request     (coerce/->xml-string saml-request)
                         :relay-state relay-state*}}))))

(defn massage-assertions
  "Makes the saml20-clj `assertions` (a direct XML conversion) more palatable.
  The returned map can more easily be queried e.g. for authorisation purposes."
  [assertions]
  (->> (first assertions)
       (walk/postwalk (fn [x]
                        (cond
                          (seq? x) (set x)
                          :else x)))))

;; TODO: add error handler
;; TODO: validate response some more?
(defn response
  "SAML response handler from an expanded `conf`. Accepts response from IdP.
  Will treat RelayState as a location, redirecting there after authentication."
  [{:keys [idp-cert
           sp-private-key
           validation]
    :as   conf}]
  (fn [{:keys [form-params session] :as req}]
    (let [{:keys [SAMLResponse RelayState]} form-params
          response   (-> SAMLResponse
                         saml-decode/base64->str
                         (saml/validate idp-cert sp-private-key validation))
          xml        (saml/->xml-string response)
          assertions (-> (saml/assertions response)
                         (massage-assertions))]
      {:status  303
       :session (update session :saml merge {:assertions assertions
                                             :response   xml})
       :headers {"Location" RelayState}})))

(defn logout
  "Delete current SAML-related session info related to the user, i.e. log out.

  This is an API endpoint by default, so it returns 204. That will not by itself
  refresh the browser page, but a 303 redirect can be triggered by providing
  a RelayState query parameter similar to how the SAML login response endpoint
  works."
  [{:keys [form-params] :as req}]
  (let [{:keys [RelayState]} form-params
        session (not-empty (update req :session dissoc :saml))]
    (if RelayState
      {:status  303
       :headers {"Location" RelayState}
       :session session}
      {:status  204
       :headers {}
       :session session})))

;; TODO: probably remove - left here for now
(comment
  (def echo-context
    (ic/interceptor
      {:name  ::echo-context
       :enter (fn [ctx]
                (assoc ctx
                  :response {:status  200
                             :body    (with-out-str (pprint ctx))
                             :headers {"Content-Type" "text/plain"}}))}))

  (def debug-routes
    #{["/ctx" :get [`echo-context]]}))
