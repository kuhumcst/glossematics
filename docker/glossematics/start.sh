#!/bin/bash

clj -A:backend -M -m dk.cst.glossematics.service "/etc/glossematics/conf.edn"

# Print error in case of failure
cat /tmp/clojure-*.edn
