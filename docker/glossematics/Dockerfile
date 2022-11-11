FROM ubuntu:jammy-20221101

RUN apt-get clean && \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get install --no-install-recommends -y \
    git \
    npm \
    openjdk-17-jdk \
    curl \
    rlwrap \
    locales

# Fix emojis not showing up on HTML pages
# https://medium.com/quiq-blog/handling-emoticons-or-other-unicode-characters-beware-of-docker-images-f0f11673dac4
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# The recommended way of installing Clojure CLI tools
# https://clojure.org/guides/getting_started#_installation_on_linux
RUN curl -O https://download.clojure.org/install/linux-install-1.11.1.1139.sh
RUN chmod +x linux-install-1.11.1.1139.sh
RUN ./linux-install-1.11.1.1139.sh

WORKDIR /etc/glossematics

# Install JS dependencies
RUN npm init -y
RUN npm install -g shadow-cljs
RUN npm install \
    shadow-cljs \
    react \
    react-dom \
    create-react-class

# Fetch backend dependencies
COPY ./deps.edn /etc/glossematics/deps.edn
RUN clojure -A:backend -Spath

# Fetch frontend dependencies
COPY ./shadow-cljs.edn /etc/glossematics/shadow-cljs.edn
RUN shadow-cljs --aliases :frontend classpath

# Create a release build of the frontend app
COPY ./src /etc/glossematics/src
COPY ./resources /etc/glossematics/resources
RUN shadow-cljs --aliases :frontend release app

# Build an uberjar for the backend
RUN clojure -T:build org.corfield.build/uber :lib dk.cst/glossematics :main dk.cst.glossematics.backend :uber-file \"glossematics.jar\"

# Run the backend web service
COPY ./docker/glossematics/start.sh /etc/glossematics/start.sh
RUN chmod +x /etc/glossematics/start.sh
ENTRYPOINT ["./start.sh"]
