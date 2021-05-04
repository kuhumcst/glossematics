#!/bin/bash

clj -M -m dk.cst.glossematics.service "/etc/glossematics/conf.edn"

# Print error in case of failure
cat /tmp/clojure-*.edn
