var browserify = require('browserify');
var clean = require('gulp-clean');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var ngmin = require('gulp-ngmin');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

gulp.task('clean', function() {
  return gulp.src(['./app/ngmin', './app/dist'], { read: false })
  .pipe(clean())
  ;
});

gulp.task('lint', function() {
  return gulp.src([
    'gulpfile.js',
    'app/js/**/*.js',
    '!app/js/third-party/**',
  ])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('default'))
  ;
});

gulp.task('browserify', function() {
  return browserify('./app/js/app.js')
  .bundle({ debug: true })
  .pipe(source('app.js'))
  .pipe(gulp.dest('./app/dist/'));
});

gulp.task('ngmin', function() {
  return gulp.src([
    'app/js/**/*.js',
    '!app/js/third-party/**',
  ])
  .pipe(ngmin())
  .pipe(gulp.dest('./app/ngmin'))
  ;
});

gulp.task('browserify-min', ['ngmin'], function() {
  return browserify('./app/ngmin/app.js')
  .bundle()
  .pipe(source('app.min.js'))
  .pipe(streamify(uglify({ mangle: false })))
  .pipe(gulp.dest('./app/dist/'));
});

gulp.task('watch', function() {
  gulp.watch([
    'app/js/**/*.js',
    '!app/js/third-party/**',
  ], ['fast']);
});

gulp.task('fast', ['clean'], function() {
  gulp.start('lint', 'browserify');
});

gulp.task('default', ['clean'], function() {
  gulp.start('lint', 'browserify', 'browserify-min');
});
