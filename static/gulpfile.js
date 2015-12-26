/* @file gulpfile.js
 * @brief Builds front-end JS logic for deploy.
 *
 * @author Oscar Bezi (oscar@bezi.io)
 */
'use strict';

var gulp = require('gulp');
var util = require('gulp-util');

var watchify = require('watchify');
var browserify = require('browserify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

var uglify = require('gulp-uglify');

var assign = require('lodash.assign');

var jshint = require('gulp-jshint');

var browserifyErr = (err) => {
  util.log(util.colors.red(`Browserify Error: ${err.message}`));
};

var mkjs = function (fname) {
  var js = {};

  js.customOpts = {
    entries: [`./src/js/${ fname }`],
    debug: true,
  };

  js.opts = assign({}, watchify.args, js.customOpts);
  js.browserify = watchify(browserify(js.opts));
  js.browserify.transform('babelify', {presets: ['es2015', 'react']});

  var bundle = () => {
    return js.browserify.bundle()
    .pipe(source(fname))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dest/js/'));
  };

  js.browserify.on('update', bundle);
  js.browserify.on('error', browserifyErr);
  js.browserify.on('time', (time) => {
    util.log(util.colors.green('Browserify'), fname, util.colors.blue(`in ${time} ms.`));
  });

  return bundle;
};

gulp.task('admin-js', ['lint'], mkjs('admin.js'));
gulp.task('index-js', ['lint'], mkjs('index.js'));

gulp.task('lint', function () {
  // return gulp.src('src/**/*.js')
  // .pipe(jshint())
  // .pipe(jshint.reporter('default'));
});

gulp.task('js', ['admin-js', 'index-js']);

gulp.task('watch', ['build'], function () {
  gulp.watch(['src/**/*.js'], ['js']);
  gulp.watch(['src/**/*.html'], ['html']);
  gulp.watch(['src/**/*.css'], ['css']);
});

gulp.task('css', function () {
  return gulp.src('src/**/*.css')
  .pipe(gulp.dest('./dest/'));
});

gulp.task('html', function () {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('./dest/'));
});

gulp.task('build', ['js', 'css', 'html']);
gulp.task('default', ['watch']);
