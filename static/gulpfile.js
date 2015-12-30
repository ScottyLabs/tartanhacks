/* @file gulpfile.js
 * @brief Builds front-end static files.
 *
 * @author Oscar Bezi (oscar@bezi.io)
 */
'use strict';

//==============================================================================
// Includes
//==============================================================================
var gulp = require('gulp');
var util = require('gulp-util');

var watchify = require('watchify');
var browserify = require('browserify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var assign = require('lodash.assign');

var uglify = require('gulp-uglify');

//==============================================================================
// Config
//==============================================================================
var srcDir = './src/'
var destDir = './build/'
// var bundleFiles = ['admin.js', 'index.js'];
var bundleFiles = ['index.js'];

/* @brief Makes a JS build task for the given bundle files.
 *
 * We need a separate browserify bundling task for each destination bundle, so
 * we pass it in to this function which then attaches the correct task to gulp
 * under its name (for example, makeJSTask('index.js') would create a task
 * 'index.js' that creates a destination bundle 'js/index.js' and starts
 * watching for changes.
 *
 * @param {string} fname The filename of the entrypoint into the bundle,
 * relative to `${srcDir}`/js/.
 */
var makeJSTask = function (fname) {
  var handleErr = (err) => {
    util.log(util.colors.red(`Browserify Error: ${err.message}`));
  };

  var customOpts = {
    entries: [`${srcDir}/js/${ fname }`],
    // set to true for sourcemapping
    debug: false,
  };

  var opts = assign({}, watchify.args, customOpts);
  var b = watchify(browserify(opts));
  b.transform('reactify', {'es6': true});

  var bundle = () => {
    return b.bundle()
    .on('error', handleErr)
    .pipe(source(fname))
    .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest(`${destDir}/js/`));
  };

  b.on('update', bundle);
  b.on('time', (time) => {
    util.log(util.colors.green('Browserify'),
             fname,
             util.colors.blue(`in ${time} ms.`));
  });

  gulp.task(fname, bundle);
};

//==============================================================================
// Build tasks
//==============================================================================

// Initialize tasks for each bundle.
bundleFiles.map(makeJSTask);
gulp.task('js', bundleFiles);

gulp.task('css', function () {
  return gulp.src(`${srcDir}/**/*.css`)
  .pipe(gulp.dest(destDir));
});

gulp.task('html', function () {
  return gulp.src(`${srcDir}/**/*.html`)
  .pipe(gulp.dest(destDir));
});

//==============================================================================
// Watching
//==============================================================================
gulp.task('watch', ['build'], function () {
  gulp.watch([`${srcDir}/**/*.js`], ['js']);
  gulp.watch([`${srcDir}/**/*.html`], ['html']);
  gulp.watch([`${srcDir}/**/*.css`], ['css']);
});

gulp.task('build', ['js', 'css', 'html']);
gulp.task('default', ['watch']);
