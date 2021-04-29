Louis Hjelmslev
===============
Infrastrukturalisme is a joint project between the University of Copenhagen and Aarhus University. The project has the goal of publishing a web app to allow researchers from around the world to explore the life of the Danish linguist [Louis Hjelmslev](https://en.wikipedia.org/wiki/Louis_Hjelmslev) by making material available from previously unpublished primary sources, e.g. letters sent and received by the linguist.

The web app includes a facsimile viewer implemented as a [reagent](https://github.com/reagent-project/reagent) component using [rescope](https://github.com/kuhumcst/rescope). Displays facsimiles and transcriptions in parallel. Supports transcriptions written in a subset of the [TEI standard](https://tei-c.org/).

Server setup
------------
The backend is a Pedestal web service that uses SAML for authentication/authorisation by way of **Pedestal SP**. Jetty is used to serve the raw content, while nginx acts as a reverse proxy/gateway in production (using HTTPS). The production system is built and run using Docker.

In order for SAML encryption to work, a Java keystore needs to be created. I generate a new one from scratch in both production and on the development machine:

```shell
keytool -keystore /etc/glossematics/keystore.jks -keyalg RSA -genkey -alias glossematics`.
```

I also install and run the certbot tool from Let's Encrypt precisely _once_ to get an initial set of SSL certificates for HTTPS (located in the default location). These are picked up by the docker-compose setup as part of the [nginx-reverse-proxy](https://github.com/kuhumcst/glossematics/blob/master/docker/nginx-reverse-proxy/conf.d/reverse-proxy.conf) service. All future renewal is handled automatically by this Docker service running nginx and certbot.

In addition to the keystore and the SSL certificates, the IdP's certificate needs to be present on disk too. In our case, we need the [WAYF certificate](https://www.wayf.dk/da/metadata) for the production server and a self-supplied one for development.

### Running the backend in production
The supplied `docker-compose.yml` file is used to build and run the system in production.

Some environment variables must be set to establish volumes in the Docker container:

```dotenv
GLOSSEMATICS_CONF=${HOME}/.glossematics/conf.edn
GLOSSEMATICS_IDP_CERTIFICATE=${HOME}/.glossematics/idp-certificate.pem
GLOSSEMATICS_SAML_KEYSTORE=${HOME}/.glossematics/saml-keystore.jks
```

Assuming the files all exist in those locations, these lines can be put inside a `.env` file.

The `docker-compose` command is then used to build and start the project:

```shell
# build, start, write output to shell
docker-compose up --build

# the same, but run in detached mode
docker-compose up -d --build
```

### Running the backend locally
The Docker setup is only meant to run in production as it relies on an HTTPS setup using authenticated certificates. For local development, the backend server should be started in the REPL and accessed via [port 8080](http://localhost:8080) (regular HTTP). This is the same port that is proxied in the Docker setup. 

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

Workflow
--------
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
