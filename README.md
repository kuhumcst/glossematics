Glossematics
============
[Infrastrukturalisme](https://cst.ku.dk/projekter/infrastrukturalisme/) is a joint project between the University of Copenhagen and Aarhus University. The project has the goal of publishing a web app on [glossematics.dk](https://glossematics.dk) to allow researchers from around the world to explore the life of the Danish linguist [Louis Hjelmslev](https://en.wikipedia.org/wiki/Louis_Hjelmslev) by making material available from previously unpublished primary sources, e.g. letters sent and received by the linguist.

Architecture
------------
The source code has been split into separate backend and frontend directories located within `/src/dk/cst/glossematics`. The backend and frontend are written in Clojure and ClojureScript, respectively.

* `dk.cst.glossematics.backend` is the core namespace of the backend service.
* `dk.cst.glossematics.frontend` is the core namespace of the frontend app.

These two namespaces contain the routing tables and are therefore natural entry points for anyone wanting to explore the source code.

For now, the source code of **Pedestal SP** is also included in this repository (at `/src/dk/cst/pedestal/sp`), but it will eventually be spun off into its own git repository.

### Frontend
The frontend is a so-called [single-page app (SPA)](https://en.wikipedia.org/wiki/Single-page_application) written in ClojureScript, built with [reitit](https://github.com/metosin/reitit) and [reagent](https://github.com/reagent-project/reagent). This app includes a facsimile viewer implemented using [stucco](https://github.com/kuhumcst/stucco) and [rescope](https://github.com/kuhumcst/rescope). The viewer displays facsimiles and transcriptions in parallel. It supports transcriptions written in a subset of the [TEI standard](https://tei-c.org/).

When someone visits the Glossematics website they will _always_ be served the exact same HTML page. This page embeds a blob of JavaScript code which has been compiled from ClojureScript. It is this JavaScript code that creates the actual content on the page, occasionally fetching data from the backend in the background.

### Backend
The backend is a [Pedestal](https://github.com/pedestal/pedestal) web service written in Clojure that uses SAML for authentication/authorisation by way of **Pedestal SP**. [Jetty](https://www.eclipse.org/jetty/) is used to serve the raw content, while [nginx](https://www.nginx.com/) acts as a reverse proxy/gateway in production with SSL certificates regularly updated by [Let's Encrypt's](https://letsencrypt.org/) certbot. The production multi-container system is built and run using [Docker](https://www.docker.com/).

The primary responsibility of the backend is

1. serving the HTML page containing the frontend SPA and
2. responding to API calls made from the SPA.

Server setup
------------
In order for SAML encryption to work, a Java keystore needs to be created. This is the idiomatic way to handle certificates of any kind in Java... and therefore in Clojure. I generate a new keystore file from scratch in both production and on the development machine:

```shell
keytool -keystore /etc/glossematics/keystore.jks -keyalg RSA -genkey -alias glossematics`.
```

I also install the certbot tool from Let's Encrypt and run it precisely _once_ to get an initial set of SSL certificates for HTTPS (located in the default location). These are picked up by the docker-compose setup as part of the [nginx-reverse-proxy](https://github.com/kuhumcst/glossematics/blob/master/docker/nginx-reverse-proxy/conf.d/reverse-proxy.conf) service. All future renewal is handled automatically by this Docker container running the nginx instance and certbot at a regular interval.

In addition to the keystore and the SSL certificates, the IdP's certificate needs to be present on disk too. In our case, we need the [WAYF certificate](https://www.wayf.dk/da/metadata) for the production server (and a self-supplied one for development). This public certificate doesn't need to be put inside a keystore. For local development, I run a "fake" IdP on localhost:7000 that I set up based on [the guide found here](https://github.com/quephird/saml-test).

### Running the system in production
The supplied `docker-compose.yml` file is used to build and run the system in production. It sets up two containers: one that contains the backend Clojure web service and one running nginx+certbot that facilitates public HTTPS access to the content. The ClojureScript frontend is also compiled as part of the build and subsequently served by the backend.

Some environment variables must be set to establish volumes in the Docker container:

```dotenv
GLOSSEMATICS_CONF=${HOME}/.glossematics/conf.edn
GLOSSEMATICS_IDP_CERTIFICATE=${HOME}/.glossematics/idp-certificate.pem
GLOSSEMATICS_SAML_KEYSTORE=${HOME}/.glossematics/saml-keystore.jks
GLOSSEMATICS_FILES_DIR=${HOME}/.glossematics/files
```

These volumes allow the container to access this content in the local filesystem. Assuming the files all exist in those locations, these lines should ideally be put inside a `.env` file located in the `docker/` directory to allow them to be picked up by the `docker-compose.yml` file.

The `docker-compose` command is used to build and start the project from inside the `docker/` directory:

```shell
# build, start, write output to shell
docker-compose up --build

# the same, but run in detached mode
docker-compose up -d --build
```

#### The systemd unit file
While `docker-compose` is the actual _process_ used to start the service, automatic startup on boot is facilitated by [systemd](https://en.wikipedia.org/wiki/Systemd).

The `docker/` directory includes the systemd unit file `glossematics.service` used to register the service. This file should be copied to `/etc/systemd/system/glossematics.service` and the relevant services enabled:

```
systemctl enable docker
systemctl enable glossematics
```
When this is done (assuming the paths in the file are correct), the Glossematics service will start automatically on boot and be managed according to the `docker-compose.yml` specification.

### Running the backend locally
The Docker setup is only meant to run in production as it relies on an HTTPS setup using authenticated certificates. For local development, the backend server should be started in the REPL and accessed via [port 8080](http://localhost:8080) (regular HTTP). This is the same port that is proxied in the Docker setup.

There is no good reason to guard the content behind HTTPS on the local development machine (this will lead to all sorts of trouble), but it might be a good idea to test just the Clojure web service locally running through Docker. In that case, you can just comment out the nginx-reverse-proxy part of the [docker-compose.yml file](https://github.com/kuhumcst/glossematics/blob/master/docker/docker-compose.yml) and run the setup locally.

Development prerequisites
-------------------------
The development workflow of the project itself is built around the [Clojure CLI](https://clojure.org/reference/deps_and_cli) for managing dependencies and [shadow-cljs](https://github.com/thheller/shadow-cljs) for compiling ClojureScript code and providing a live-reloading development environment.

In this project, the dependency management feature of shadow-cljs is not used directly. Rather, I leverage the built-in support in shadow-cljs for the Clojure CLI/deps.edn to download dependencies and build a classpath.

I personally use IntelliJ with the Cursive plugin which [integrates quite well with the Clojure CLI](https://cursive-ide.com/userguide/deps.html).

### macOS setup
(assuming [homebrew](https://brew.sh/) has already been installed)


I'm not sure which JDK version you need, but anything 8+ is probably fine! I personally just use the latest from AdoptOpenJDK (currently JDK 13):

```
brew cask install adoptopenjdk
```

The following will get you the Clojure CLI and shadow-cljs, along with NodeJS:

```
brew install clojure/tools/clojure
brew install node
npm install -g shadow-cljs
```

JavaScript dependencies [must be installed separately](https://shadow-cljs.github.io/docs/UsersGuide.html#_missing_js_dependency)!

Workflow
--------
### Frontend
Development of the component is done using the live-reloading capabilities of shadow-cljs:

```
shadow-cljs watch app
```

This will start a basic web server at `localhost:9000` serving the `:app` build as specified in the `shadow-cljs.edn` file.

It's possible to execute unit tests while developing by also specifying the `:test` build:

```
shadow-cljs watch app test
```

This will make test output available at `localhost:9100`. It's quite convenient to keep a separate browser tab open just for this. The favicon will be coloured green or red depending on the state of the assertions.

Personally, I use the Clojure CLI integration in Cursive to calculate a classpath and download dependencies. Something like this command is being executed behind the scenes:

```
clj -A:app:test -Spath
```

I have also set up some aliases in my personal [~/.clojure/deps.edn](https://github.com/simongray/dotfiles/blob/master/dot/clojure/deps.edn) file to perform certain common tasks such as listing/updating outdated packages:

```
clj -A:outdated
clj -A:update
```

### Backend
The namespace `dk.cst.glossematics.backend` defines the backend web service. This Pedestal web service can be started, stopped, restarted, and updated entirely through the Clojure REPL using the utility functions located inside that namespace. There is no need to install and setup a separate web server since Pedestal dynamically sets up a Jetty instance for this purpose.

The frontend being served is whichever frontend was last compiled which will usually be the development version that is created by running `shadow-cljs watch app`. The release version can be used instead by running:

```
shadow-cljs release app
```

... and making sure that `dk.cst.glossematics.backend.index` is reloaded in the REPL.

Development notes
-----------------
### Timeline widget
The timeline used in the frontend is a fork of the obsolete [SIMILE Timeline](https://www.simile-widgets.org/timeline/docs/). The underlying JavaScript source code has been taken directly from the SIMILE project and reduced significantly in size. This JS source is then wrapped in ClojureScript in [timeline.cljs](/src/dk/cst/glossematics/frontend/timeline_widget.cljs).

However, the JavaScript source is still quite huge and written in a fairly incoherent style. For this reason, the visual style of the timeline must be handled by editing primarily

* [ethers.css](/resources/public/timeline/css/ethers.css)
* [themes.js](/resources/public/timeline/js/themes.js)
* [ether-painters.js](/resources/public/timeline/js/ether-painters.js)

but also various other JS/CSS files depending on what needs to be changed.
