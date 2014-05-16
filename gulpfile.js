'use strict';

var browserify = require('browserify')
  , clean = require('gulp-clean')
  , connect = require('gulp-connect')
  , eslint = require('gulp-eslint')
  , gulp = require('gulp')
  , mocha = require('gulp-mocha')
  , ngmin = require('gulp-ngmin')
  , protractor = require('gulp-protractor').protractor
  , source = require('vinyl-source-stream')
  , streamify = require('gulp-streamify')
  , uglify = require('gulp-uglify');

/*
 * Useful tasks:
 * - gulp fast: browserifies, no minification, does not start server.
 * - gupl watch: starts server, browserify & live reload on changes,
 *               no minification.
 * - gulp: browserifies and minifies, does not start server.
 *
 * At development time, you should usually just have run 'gulp watch' in the
 * background.
 */

var liveReload = true;

gulp.task('clean', function() {
  return gulp.src(['./app/ngmin', './app/dist'], { read: false })
  .pipe(clean());
});

gulp.task('lint', function() {
  return gulp.src([
    'gulpfile.js',
    'app/js/**/*.js',
    'test/**/*.js',
    '!app/js/third-party/**',
  ])
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('unit', function () {
  return gulp.src([
    'test/unit/**/*.js'
  ])
  .pipe(mocha({ reporter: 'dot' }));
});

gulp.task('browserify', ['lint', 'unit'], function() {
  return browserify('./app/js/app.js')
  .bundle({ debug: true })
  .pipe(source('app.js'))
  .pipe(gulp.dest('./app/dist/'))
  .pipe(connect.reload());
});

gulp.task('ngmin', ['lint', 'unit'], function() {
  return gulp.src([
    'app/js/**/*.js',
    '!app/js/third-party/**',
  ])
  .pipe(ngmin())
  .pipe(gulp.dest('./app/ngmin'));
});

gulp.task('browserify-min', ['ngmin'], function() {
  return browserify('./app/ngmin/app.js')
  .bundle()
  .pipe(source('app.min.js'))
  .pipe(streamify(uglify({ mangle: false })))
  .pipe(gulp.dest('./app/dist/'));
});

gulp.task('server', ['browserify'], function() {
  connect.server({
    root: 'app',
    livereload: liveReload,
  });
});

gulp.task('e2e', ['server'], function() {
  return gulp.src(['./test/e2e/**/*.js'])
  .pipe(protractor({
    configFile: 'protractor.conf.js',
    args: ['--baseUrl', 'http://127.0.0.1:8080'],
  }))
  .on('error', function(e) { throw e; })
  .on('end', function() {
    connect.serverClose();
  });
});

gulp.task('watch', function() {
  gulp.start('server');
  gulp.watch([
    'app/js/**/*.js',
    '!app/js/third-party/**',
    'test/**/*.js',
  ], ['fast']);
});

gulp.task('fast', ['clean'], function() {
  gulp.start('browserify');
});

gulp.task('default', ['clean'], function() {
  liveReload = false;
  gulp.start('browserify', 'browserify-min', 'e2e');
});
