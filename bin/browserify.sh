#!/usr/bin/env bash

# Script to browserify without Gulp - usually Gulp is used to browserify and
# build everything.

browserify_cmd=node_modules/browserify/bin/cmd.js

bin_path=`dirname $0`
pushd $bin_path/.. > /dev/null
mkdir app/dist 2> /dev/null

$browserify_cmd \
  --entry app/js/app.js \
  --outfile app/dist/app.js \
  --debug \
  --verbose

$browserify_cmd \
  test/unit/controller/*.js \
  test/unit/service/*.js \
  --outfile test/browserified/browserified_tests.js \
  --debug \
  --verbose

popd > /dev/null
