(ns dk.cst.pedestal.sp.routes
  (:require [io.pedestal.http.body-params :refer [body-params]]
            [dk.cst.pedestal.sp.interceptors :as sp.ic]
            [dk.cst.pedestal.sp.auth :as sp.auth]))

;; TODO: add function for creating a minimal routes set
(defn all
  "Create SAML routes in table syntax based on a `conf` map."
  [{:keys [paths] :as conf}]
  (let [{:keys [saml-meta
                saml-login
                saml-logout
                saml-session
                saml-request
                saml-response
                saml-assertions]} paths
        body-params    (body-params)
        all            (sp.auth/permit conf :all)
        authenticated  (sp.auth/permit conf :authenticated)
        auth-requested (sp.auth/permit conf #(get-in % [:session :saml :request]))]
    ;; Standard endpoints required for an sp-initiated SAML login flow
    #{[saml-meta :get (sp.ic/metadata conf) :route-name ::saml-meta]
      [saml-login :get (conj all (sp.ic/request conf)) :route-name ::saml-req]
      [saml-login :post (conj all body-params (sp.ic/response conf)) :route-name ::saml-resp]

      ;; Logout endpoint, similar to - but not part of - the standard endpoints
      [saml-logout :post (conj all body-params `sp.ic/logout)]

      ;; User-centric metadata endpoints, not related to the SAML login flow
      [saml-session :get (conj all `sp.ic/echo-session)]
      [saml-request :get (conj auth-requested `sp.ic/echo-request)]
      [saml-response :get (conj authenticated `sp.ic/echo-response)]
      [saml-assertions :get (conj authenticated `sp.ic/echo-assertions)]}))
