#!/bin/bash

clj -m dk.cst.hjelmslev.service "/etc/glossematics/conf.edn"

# Print error in case of failure
cat /tmp/clojure-*.edn
