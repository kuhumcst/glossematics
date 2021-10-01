#!/bin/bash

clojure -A:backend -M -m dk.cst.glossematics.backend.service "/etc/glossematics/conf.edn"

# Print error in case of failure
cat /tmp/clojure-*.edn
