Pedestal-sp
===========
Enhance your [Pedestal](https://github.com/pedestal/pedestal) web service with [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) 2.0 routes to turn to it a valid [Service Provider](https://en.wikipedia.org/wiki/Service_provider_(SAML)).

* [Why use this?](#why-use-this)
* [Setup](#setup)
* [SAML flow](#saml-flow)

> _This project was made using [quephird/saml-test](https://github.com/quephird/saml-test) as a reference while applying the much more recent, actively developed fork of the [saml20-clj](https://github.com/metabase/saml20-clj) library by Metabase._

Why use this?
-------------
In academia - as well as in the corporate  world - SAML is a very popular way to implement [Single Sign-On](https://en.wikipedia.org/wiki/Single_sign-on) (SSO) for web services.

To log in to a web service, the so-called Service Provider (SP) must delegate login to one or more Identity Providers (IdP). A common way to do this is by setting up [Shibboleth-sp](https://wiki.shibboleth.net/confluence/display/SP3/Home) as a separate web service and then integrating that with your own web service through a fairly involved setup using a Java web server as the middle-man.

Personally, I prefer to run my own code and just have that start a web server while being in control of the overall login flow. You should consider `Pedestal-sp` if you need users to log in through a SAML IdP and think integrating with Shibboleth-sp sounds too complex.

Setup
-----
`Pedestal-sp` is divided into the following namespaces:

* `dk.cst.pedestal-sp`: SAML routes to add to your Pedestal web service + config map creation.
* `dk.cst.pedestal-sp.interceptors`: helpful Pedestal interceptors for SAML-authentication.
* `dk.cst.pedestal-sp.example`: an example web service using the SAML routes and interceptors.


Like Pedestal itself, `Pedestal-sp` is configured using a config map containing just a few required keys, mostly related to encryption. Before consumption, the base config expanded using `dk.cst.pedestal-sp/expand-conf` and passed on to the `dk.cst.pedestal-sp/saml-routes` function - as well as any of the interceptors in `dk.cst.pedestal-sp.interceptors` that you may choose to use.

### Mock IdP
While developing your SAML SP, your probably want a mock IdP to develop up against. I followed the instructions at [quephird/saml-test](
https://github.com/quephird/saml-test#getting-things-running), specifically the parts related to getting the Node-based IdP running and creating a certificate for it. Once you have generated a certificate you can set the following keys in the config map:

```clojure
;; Example values
:idp-url  "http://localhost:7000"
:idp-cert (slurp "/path/to/idp-public-cert.pem")
```

Once you're ready to put your web service into production, it should simply be a matter of swapping the mock IdP for the real one<sup>[†](#idp-caveat)</sup>.

### Keystore
Java - and by extension Clojure - applications use a [Java KeyStore](https://en.wikipedia.org/wiki/Java_KeyStore) as the main way to store and access encryption keys. It is simply a file you create using the `keytool` CLI, with some associated Java methods providing access to the certificates within.

The KeyStore provides the credentials needed to properly sign your SAML requests. You give your web service access to the keystore by providing three required keys in the `:credential` submap of your config:

```clojure
;; Example values
:credential {:alias    "mylocalsp"
             :filename "/path/to/keystore.jks"
             :password (System/getenv "KEYSTORE_PASS")}
```

> _Note: make sure to add `-keyalg RSA` to the keytool command that use to create your keystore. This is expected by the underlying saml20-clj library._ 

### Your service
Now all that remains is defining the name of your web service and the URL. While developing you will want to use a local URL, but obviously for a production system you will want to use the proper URL:

```clojure
;; Example values
:app-name "Test SAML app" ; EntityId in meta, ProviderName in request
:sp-url   "http://localhost:8080"
```

Altogether, these 5 keys (`:idp-url`, `:idp-cert`, `:credential`, `:app-name`, `:sp-url`) make up the required parts of the base config. The remaining keys are all optional.

> _<a name="idp-caveat"><sup>†</sup></a> Depending on what IdP you're integrating with, additional steps might need to be taken. That is beyond the scope of this little setup guide._

SAML flow
---------
It is helpful to understand the flow of SAML and how it is represented in `Pedestal-sp`.
Typically, the login flow will start in one of two ways:

* The user clicks a button or hyperlink labeled "log in" or something similar.
* The user attempts to access an off-limits resource and is either nudged towards or directly redirected to a SAML login flow.

### 302 GET `/saml`
When the SAML login flow starts, the user will first visit our SP with a an HTTP GET request to `/saml`, likely along with `?RelayState=/path/to/resource` as a query string. The RelayState will be passed around the entire SAML flow and - if present - will be used to redirect the user back to where they came from at the end of a successful login. This first SAML endpoint redirects the user to the IdP specified in the config map.

### 200 GET `<URL of IdP>`
We specify _who_ the IdP is in our config map, but we have no control over it otherwise. The IdP is where the actual login takes place. Once logged in, the IdP is supposed to redirect back to our `/saml` endpoint, this time using an HTTP POST request.

### 303 POST `/saml`
Our SP now receives signed data from the IdP which we decrypt and verify. This data contains assertions about the logged in user. Based on this information we either deny access or redirect the user to the initial resource they were trying to access, which the IdP hopefully passed on in the `RelayState` query parameter. This is the end of the SAML login flow.

From here on, we use a session cookie in the browser (named `pedestal-sp` by default) to verify the user's identity. The chain of authentication interceptors can be used to gate restricted resources at different endpoints.

> _Note: there is also a separate endpoint available at `/saml/meta` whose sole job is to expose the metadata of our SP to the world._
