#!/usr/bin/env bash

# Script to start selenium server for protractor tests.

bin_path=`dirname $0`
pushd $bin_path/.. > /dev/null

node_modules/protractor/bin/webdriver-manager start

popd > /dev/null
