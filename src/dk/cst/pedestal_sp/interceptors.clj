(ns dk.cst.pedestal-sp.interceptors
  (:require [saml20-clj.core :as saml]
            [saml20-clj.encode-decode :as saml-decode]
            [hiccup.core :as hiccup]
            [io.pedestal.log :as log]
            [io.pedestal.interceptor :as ic]
            [io.pedestal.http.ring-middlewares :as middlewares]))

;; https://github.com/ring-clojure/ring/wiki/Sessions
;; https://github.com/pedestal/pedestal/blob/master/samples/ring-middleware/src/ring_middleware/service.clj
;; https://www.baeldung.com/clojure-ring#4-working-with-cookies
(defn session
  [{:keys [session] :as conf}]
  (middlewares/session session))

(defn no-auth-resp
  "Create a response handler to use when user is not authenticated. By default,
  the user is provided with a hyperlink to the SAML endpoint defined in `conf`."
  [{:keys [paths] :as conf}]
  (fn [{:keys [uri] :as req}]
    {:status  403
     :headers {"Content-Type" "text/html"}
     :body    (hiccup/html
                [:html
                 [:body
                  [:h1 "Login required"]
                  [:p "You must "
                   [:a {:href (str (:saml paths) "?RelayState=" uri)} "log in"]
                   " before you can access this resource."]]])}))

;; TODO: optionally redirect to login page with RelayState set to current URL
;; TODO: convert into error-throwing interceptor instead?
;; In the error-throwing interceptor, catch error and decide what to do with it.
;; Can either throw the error, redirect to somewhere else, or return 403 resp.
;; Which one you wanna do depends on what you want the behaviour to be.
;; In my case, I probably wanna redirect for some, throw 403 for others (api).
;; TODO: further check assertions?
(defn session-guard
  [{:keys [no-auth] :as conf}]
  (let [no-auth (or no-auth (no-auth-resp conf))]
    (ic/interceptor
      {:name  ::session-guard
       :enter (fn [{:keys [request] :as ctx}]
                (if-let [assertions (get-in request [:session :assertions])]
                  ctx
                  (do
                    (log/warn :msg (str "Unauthorised: " request))
                    (assoc ctx :response (no-auth request)))))})))

(defn authorized
  "Tiny interceptor chain to make sure user is authorized to access a resource.
  Should be used at the beginning of an interceptor chain."
  [conf]
  [(session conf) (session-guard conf)])

(defn saml-meta
  "SAML Metadata handler from an expanded `conf`. Returns the metadata as XML."
  [{:keys [app-name
           acs-url
           sp-cert]
    :as   conf}]
  (fn [_]
    {:status  200
     :headers {"Content-Type" "text/xml"}
     :body    (saml/metadata conf)}))

(defn saml-req
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
    (-> (saml/request (dissoc conf :relay-state))
        (saml/idp-redirect-response idp-url (or (:RelayState query-params)
                                                relay-state
                                                "/")))))

;; TODO: add error handler
;; TODO: validate response some more?
(defn saml-resp
  "SAML response handler from an expanded `conf`. Accepts response from IdP.
  Will treat RelayState as a location, redirecting there after authentication."
  [{:keys [idp-cert
           sp-private-key
           validation]
    :as   conf}]
  (fn [{:keys [form-params session] :as req}]
    (let [{:keys [SAMLResponse RelayState]} form-params
          assertions (-> SAMLResponse
                         saml-decode/base64->str
                         saml/->Response
                         (saml/validate idp-cert sp-private-key validation)
                         saml/assertions)]
      {:status  303
       ;; TODO: could there ever be more than one assertion map?
       :session (assoc session :assertions (first assertions))
       :headers {"Location" RelayState}})))
