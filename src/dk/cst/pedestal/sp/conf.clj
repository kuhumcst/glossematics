(ns dk.cst.pedestal.sp.conf
  "Validate and load configurations for Pedestal SP."
  (:require [clojure.spec.alpha :as s]
            [clojure.edn :as edn]
            [saml20-clj.core :as saml]
            [saml20-clj.coerce :as saml-coerce]
            [saml20-clj.state :as saml-state]
            [ring-ttl-session.core :as ttl]
            [dk.cst.pedestal.sp.static :refer [never]])
  (:import [com.sun.jndi.toolkit.url Uri]))

;; Fix StateManager print bug: https://github.com/metabase/saml20-clj/issues/27
(prefer-method print-method pretty.core.PrettyPrintable saml-state/StateManager)
(prefer-method print-method pretty.core.PrettyPrintable clojure.lang.IDeref)

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

(s/def ::summary
  string?)

(s/def ::name
  keyword?)

(s/def ::label
  string?)

(s/def ::checked
  boolean?)

(s/def ::checkbox
  (s/keys :req-un [::name ::label]
          :opt-un [::checked]))

(s/def ::checkboxes
  (s/coll-of ::checkbox))

(s/def ::consent
  (s/keys :opt-un [::summary ::checkboxes]))

;; TODO: add opt-un keys
;; TODO: split into minimal and complete versions
(s/def ::config
  (s/keys :req-un [::sp-url ::idp-url ::idp-cert ::credential]
          :opt-un [::consent]))

(def ^:private default-paths
  {:saml-meta       "/saml/meta"
   :saml-login      "/saml/login"
   :saml-logout     "/saml/logout"
   :saml-consent    "/saml/consent"
   :saml-session    "/saml/session"
   :saml-request    "/saml/session/request"
   :saml-response   "/saml/session/response"
   :saml-assertions "/saml/session/assertions"})

(defn read-file!
  "Load an `edn-file` with the given `profile`. The contents of this file may
  then be passed to the init function."
  [edn-file]
  (let [conf (edn/read-string (slurp edn-file))]
    (if (s/valid? ::config conf)
      (assoc conf :idp-cert (slurp (:idp-cert conf)))
      (throw (ex-info "invalid config" (s/explain-data ::config conf))))))

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
           consent
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
                               :expires   never
                               :path      "/"
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
