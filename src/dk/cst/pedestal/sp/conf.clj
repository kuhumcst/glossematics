(ns dk.cst.pedestal.sp.conf
  (:require [clojure.spec.alpha :as s]
            [aero.core :as aero]
            [saml20-clj.core :as saml]
            [saml20-clj.coerce :as saml-coerce]
            [ring-ttl-session.core :as ttl]))

;; TODO: add fdef for expand-conf?

(s/def ::app-name
  string?)

(s/def ::sp-url
  string?)

(s/def ::idp-url
  string?)

(s/def ::idp-cert
  string?)

(s/def ::alias
  string?)

(s/def ::filename
  string?)

(s/def ::password
  string?)

(s/def ::credential
  (s/keys :req-un [::alias ::filename ::password]))

;; TODO: add opt-un keys
;; TODO: split into minimal and complete versions
(s/def ::config
  (s/keys :req-un [::sp-url ::idp-url ::idp-cert ::credential]))

(def ^:private default-paths
  {:saml-meta       "/saml/meta"
   :saml-login      "/saml/login"
   :saml-logout     "/saml/logout"
   :saml-session    "/saml/session"
   :saml-request    "/saml/session/request"
   :saml-response   "/saml/session/response"
   :saml-assertions "/saml/session/assertions"})

(defn read-file!
  "Load an Aero `edn-file` with the given `profile`. The contents of this
  file may then be passed to sp.conf/init."
  [edn-file & [opts]]
  (let [conf (aero/read-config edn-file opts)]
    (if (s/valid? ::config conf)
      (assoc conf :idp-cert (slurp (:idp-cert conf)))
      ;; TODO: print explain-data instead, once the state-manager print issue is fixed: https://github.com/metabase/saml20-clj/issues/27
      (throw (ex-info "invalid config" (dissoc conf :state-manager) #_(s/explain-data ::config conf))))))

(defn init
  "Derive full configuration from `base-conf`; ensures internal consistency."
  [{:keys [app-name                                         ; EntityId in meta, ProviderName in request
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
  {:pre  [(s/valid? ::config base-conf)]
   :post [(s/valid? ::config %)]}
  (let [{:keys [saml-login] :as paths*} (merge default-paths paths)
        {:keys [cookie-attrs]} session
        max-age*       (or (:max-age cookie-attrs) (* 60 60 8))
        acs-url        (str sp-url saml-login)
        app-name*      (or app-name sp-url)
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
      :app-name app-name*
      :sp-name app-name*                                    ; TODO: same or not?
      :sp-cert (saml/->X509Certificate credential)
      :sp-private-key (saml-coerce/->PrivateKey credential)
      :acs-url acs-url
      :issuer app-name*

      ;; Defaults
      :state-manager state-manager*
      :validation validation*
      :paths paths*
      :session session*)))
