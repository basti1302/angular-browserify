AngularJS + Browserify Project Template
=======================================

[![Build Status](https://travis-ci.org/basti1302/angular-browserify.png?branch=master)](https://travis-ci.org/basti1302/angular-browserify)

This is a small example/seed project for using AngularJS with Browserify. It demonstrates how to structure code by using CommonJS modules together with AngularJS' dependency injection mechanism.

It also comes with a basic `gulpfile` that includes:

* running JSHint to lint JavaScript sources,
* running unit tests via mocha,
* processing sources with Browserify (to create a non-minfied Browserify bundle),
* ngmin & uglify (to create an ngmin-processed and minified Browserify bundle),
* end-to-end tests with protractor,
* a static asset server (gulp-connect) and
* live reload support.

Angular and Browserify
----------------------

TODO: Describe integration of Angular and CommonJS/Browserify

Build
-----

TODO: Explain useful gulp tasks.
