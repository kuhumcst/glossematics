(ns dk.cst.pedestal.sp.auth
  "Create inline authorisation logic using SAML assertions. The `if-permit` and
  `only-permit` macros can be used from both Clojure and ClojureScript.

  For route-level authorisation + ahead-of-time checks from within interceptors,
  use the `permit-request?` function from `dk.cst.pedestal.sp.interceptors`."
  (:require [clojure.data :as data])
  #?(:cljs (:require-macros [dk.cst.pedestal.sp.auth])))

(defn submap?
  "Is `m` a submap of `parent`?"
  [m parent]
  (nil? (first (data/diff m parent))))

(defn- assertions->auth-test
  "Return a function taking a request that compares an `assertions` map to the
  stored SAML assertions for the user making the request."
  [assertions]
  #(submap? assertions %))

(defn restriction->auth-test
  "Return a function to test an assertions map based on a given `restriction`.
  The restriction can be :authenticated, :all, :none, a submap, or a function."
  [restriction]
  (cond
    (keyword? restriction) (case restriction
                             :authenticated some?
                             :all (constantly true)
                             :none (constantly false))
    (map? restriction) (assertions->auth-test restriction)
    (fn? restriction) restriction))

(defmacro if-permit
  "Checks that `assertions` satisfies `restriction`. When true, returns the
  first clause of `body`; else returns the second clause."
  [[assertions restriction] & body]
  `(if ((restriction->auth-test ~restriction) ~assertions)
     ~@body))

(defmacro only-permit
  "Checks that `assertions` satisfies `restriction`. If true, returns `body`;
  else throws an exception."
  [[assertions restriction] & body]
  `(if ((restriction->auth-test ~restriction) ~assertions)
     (do ~@body)
     (throw (ex-info "Unsatisfied restriction" {::restriction ~restriction}))))
