FROM ubuntu:focal

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get install --no-install-recommends -y \
    openjdk-11-jdk \
    curl \
    rlwrap

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
RUN clojure -Spath

COPY ./start.sh /etc/glossematics/start.sh
RUN chmod +x /etc/glossematics/start.sh
WORKDIR /etc/glossematics
ENTRYPOINT ["./start.sh"]
