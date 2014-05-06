AngularJS + Browserify Project Template
=======================================

This is a small example/seed project for using AngularJS with Browserify. It demonstrates how to structure code by using CommonJS modules together with AngularJS dependency injection mechanisms.

It also comes with a basic `gulpfile` that includes:

* running JSHint to lint JavaScript sources,
* running unit tests via mocha,
* processing sources with Browserify (a non-minfied Browserify bundle is created),
* ngmin & uglify (a ngmin-processed and minified Browserify bundle can be created),
* end-to-end tests with protractor,
* a static asset server (gulp-connect) and
* live reload support.
