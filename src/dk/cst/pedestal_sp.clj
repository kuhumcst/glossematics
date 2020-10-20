(ns dk.cst.pedestal-sp
  (:require [io.pedestal.http.body-params :refer [body-params]]
            [saml20-clj.core :as saml]
            [saml20-clj.coerce :as saml-coerce]
            [dk.cst.pedestal-sp.interceptors :as ic]
            [ring-ttl-session.core :as ttl]))

(def default-paths
  {:saml      "/saml"
   :saml-meta "/saml/meta"})

;; TODO: also validate
(defn expand-conf
  "Expand a `base-conf` with default and derived parameters. This allows for a
  minimal amount of configuration and provides internal consistency."
  [{:keys [app-name
           sp-url
           idp-url
           idp-cert
           relay-state                                      ; only fallback
           credential
           state-manager
           validation
           paths
           session
           no-auth]
    :as   base-conf}]
  (let [{:keys [saml saml-meta] :as paths*} (merge default-paths paths)
        {:keys [cookie-attrs]} session
        max-age*       (or (:max-age cookie-attrs) (* 60 60 8))
        acs-url        (str sp-url saml)
        state-manager* (or state-manager (saml/in-memory-state-manager 60))
        validation*    (merge {:acs-url       acs-url
                               :state-manager state-manager}
                              validation)
        cookie-attrs*  (merge {:http-only true
                               #_#_:secure true             ;TODO: re-enable to enforce https
                               :max-age   max-age*}
                              cookie-attrs)
        session*       (merge {:cookie-name  "pedestal-sp"
                               :store        (ttl/ttl-memory-store max-age*)
                               :cookie-attrs cookie-attrs*}
                              (dissoc session :cookie-attrs))]
    (assoc base-conf

      ;; Derived
      :sp-name app-name                                     ; TODO: same or not?
      :sp-cert (saml/->X509Certificate credential)
      :sp-private-key (saml-coerce/->PrivateKey credential)
      :acs-url acs-url
      :issuer (str sp-url saml-meta)

      ;; Defaults
      :state-manager state-manager*
      :validation validation*
      :paths paths*
      :session session*)))

;; TODO: fetch conf from key in service map too
;; User can specify :dk.cst.pedestal-sp instead of conf map to let interceptors
;; know that they can fetch the conf map at that key in the service-map
(defn saml-routes
  "Create SAML routes in table syntax based on a `conf` map."
  [{:keys [paths] :as conf}]
  (let [{:keys [saml saml-meta]} paths]
    #{[saml-meta :get (ic/saml-meta conf) :route-name ::saml-meta]
      [saml :get (ic/saml-req conf) :route-name ::saml-req]
      [saml :post [(body-params)
                   (ic/session conf)
                   (ic/saml-resp conf)] :route-name ::saml-res]}))
