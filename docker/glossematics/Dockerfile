FROM ubuntu:focal

RUN apt-get clean && \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get install --no-install-recommends -y \
    openjdk-11-jdk \
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
RUN curl -O https://download.clojure.org/install/linux-install-1.10.1.754.sh
RUN chmod +x linux-install-1.10.1.754.sh
RUN ./linux-install-1.10.1.754.sh

# Glossematics source code files
COPY ./src /etc/glossematics/src
COPY ./resources /etc/glossematics/resources
COPY ./deps.edn /etc/glossematics/deps.edn
COPY ./shadow-cljs.edn /etc/glossematics/shadow-cljs.edn

# Create a Java classpath, i.e. fetch required Clojure library dependencies
WORKDIR /etc/glossematics
RUN clojure -Spath

COPY ./docker/glossematics/start.sh /etc/glossematics/start.sh
RUN chmod +x /etc/glossematics/start.sh
ENTRYPOINT ["./start.sh"]
