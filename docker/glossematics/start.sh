#!/bin/bash

java -jar glossematics.jar "/etc/glossematics/conf.edn"

# Print error in case of failure
cat /tmp/clojure-*.edn
