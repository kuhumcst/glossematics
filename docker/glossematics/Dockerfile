FROM ubuntu:focal

RUN apt-get clean && \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get install --no-install-recommends -y \
    git \
    npm \
    openjdk-11-jdk \
    curl \
    rlwrap \
    locales

RUN npm install -g \
    shadow-cljs \
    react \
    react-dom \
    create-react-class

# The recommended way of installing Clojure CLI tools
# https://clojure.org/guides/getting_started#_installation_on_linux
RUN curl -O https://download.clojure.org/install/linux-install-1.10.3.822.sh
RUN chmod +x linux-install-1.10.3.822.sh
RUN ./linux-install-1.10.3.822.sh

# Fix emojis not showing up on HTML pages
# https://medium.com/quiq-blog/handling-emoticons-or-other-unicode-characters-beware-of-docker-images-f0f11673dac4
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Glossematics source code files
COPY ./src /etc/glossematics/src
COPY ./resources /etc/glossematics/resources
COPY ./deps.edn /etc/glossematics/deps.edn
COPY ./shadow-cljs.edn /etc/glossematics/shadow-cljs.edn

# TODO: remove in the future - currently in use
COPY ./dev /etc/glossematics/dev

WORKDIR /etc/glossematics

# Create a release build of the ClojureScript app
RUN shadow-cljs release app

# Create a Java classpath, i.e. fetch required Clojure library dependencies
RUN clojure -Spath

COPY ./docker/glossematics/start.sh /etc/glossematics/start.sh
RUN chmod +x /etc/glossematics/start.sh
ENTRYPOINT ["./start.sh"]
