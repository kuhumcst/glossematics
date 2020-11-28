(ns dk.cst.pedestal.sp.spec
  (:require [clojure.spec.alpha :as s]))

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
(s/def ::config
  (s/keys :req-un [::app-name ::sp-url ::idp-url ::credential]))
