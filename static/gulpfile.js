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

var plumber = require('gulp-plumber');

var browserifyErr = (err) => {
  util.log(util.colors.red(`Browserify Error: ${err.message}`));
};

var mkjs = function (fname) {
  var customOpts = {
    entries: [`./src/js/${ fname }`],
    debug: true,
  };

  var opts = assign({}, watchify.args, customOpts);
  var b = watchify(browserify(opts));
  b.transform('reactify', {es6: true});

  var bundle = () => {
    return b.bundle()
    .on('error', browserifyErr)
    .pipe(source(fname))
    .pipe(buffer())
    // .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/js/'));
  };

  b.on('update', bundle);
  b.on('time', (time) => {
    util.log(util.colors.green('Browserify'), fname, util.colors.blue(`in ${time} ms.`));
  });

  return bundle;
};

var jsFiles = ['admin.js', 'index.js'];
jsFiles.forEach((fname) => {
  gulp.task(fname, ['lint'], mkjs(fname));
});

gulp.task('lint', function () {
  // return gulp.src('src/**/*.js')
  // .pipe(jshint())
  // .pipe(jshint.reporter('default'));
});

gulp.task('js', jsFiles);

gulp.task('watch', ['build'], function () {
  gulp.watch(['src/**/*.js'], ['js']);
  gulp.watch(['src/**/*.html'], ['html']);
  gulp.watch(['src/**/*.css'], ['css']);
});

gulp.task('css', function () {
  return gulp.src('src/**/*.css')
  .pipe(gulp.dest('./build/'));
});

gulp.task('html', function () {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('./build/'));
});

gulp.task('build', ['js', 'css', 'html']);
gulp.task('default', ['watch']);
