#!/usr/bin/env bash

# Script to browserify without Gulp - usually Gulp is used to browserify and
# build everything.

browserify_cmd=node_modules/browserify/bin/cmd.js

bin_path=`dirname $0`
pushd $bin_path/.. > /dev/null
mkdir app/dist

$browserify_cmd \
  --entry app/js/app.js \
  --outfile app/dist/app.js \
  --debug \
  --verbose \
  &

popd > /dev/null
