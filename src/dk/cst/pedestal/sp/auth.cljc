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

(defn request->assertions
  [request]
  (get-in request [:session :saml :assertions]))

(defn condition->auth-test
  "Return a function to test an assertions map based on a given `condition`:

    :authenticated - requires authentication to access.
              :all - can be accessed by anyone, no restrictions apply.
             :none - no access by anyone under any circumstances.
               map - allow access when the assertions contain this submap.
                fn - takes assertions as input and returns true if accessible."
  [condition]
  (cond
    (keyword? condition) (case condition
                           :authenticated some?
                           :all (constantly true)
                           :none (constantly false))
    (map? condition) #(submap? condition %)
    (fn? condition) condition))

(defn auth-override
  "Create an auth test override from the `assertions` map.

  During development, the assertions map may contain a :condition key defining
  an alternative test used to override the conditions of a production system."
  [assertions]
  (condition->auth-test (:condition assertions)))

(defmacro if-permit
  "Checks that `assertions` satisfies `condition`. When true, returns the
  first clause of `body`; else returns the second clause."
  [[assertions condition] & body]
  `(if ((or (auth-override ~assertions)
            (condition->auth-test ~condition)) ~assertions)
     ~@body))

(defmacro only-permit
  "Checks that `assertions` satisfies `condition`. If true, returns `body`;
  else throws an exception."
  [[assertions condition] & body]
  `(if ((or (auth-override ~assertions)
            (condition->auth-test ~condition)) ~assertions)
     (do ~@body)
     (throw (ex-info "Unsatisfied condition" {::condition ~condition}))))
