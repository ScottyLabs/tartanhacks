# @file gulpfile.coffee
# @brief Builds the TartanHacks website
# @author Oscar Bezi, oscar@bezi.io
# @since 23 November 2014
#==============================================================================

gulp = require 'gulp'
gutil = require 'gulp-util'
merge = require 'merge-stream'
clean = require 'del'
scss = require 'gulp-sass'
filesize = require 'gulp-filesize'
deploy = require 'gulp-gh-pages'
jade = require 'gulp-jade'
coffee = require 'gulp-coffee'


dev = true
srcDir = './src/'
buildDir = './build/'

# Clean: cleans compiled files
gulp.task 'clean', () ->
    html = gulp.src buildDir + '*.html', read: false
        .pipe clean()

    css  = gulp.src buildDir + 'assets/css/*.css', read: false
        .pipe clean()

    js = gulp.src buildDir + 'assets/js/*.js', read: false
        .pipe clean()

    return merge html, css, js

# HTML: builds HTML from Jade
gulp.task 'html', () ->
    jade_opts =
        pretty: dev
        compileDebug: dev
    gulp.src srcDir + 'jade/*.jade'
        .pipe jade jade_opts
        .pipe gulp.dest buildDir
        .pipe filesize()
        .on 'error', gutil.log

# css: builds css from scss
gulp.task 'css', () ->
    gulp.src srcDir + 'scss/main.scss'
        .pipe scss()
        .pipe gulp.dest buildDir + 'assets/css/'
        .pipe filesize()
        .on 'error', gutil.log

# js: compiles coffeescript
gulp.task 'js', () ->
    gulp.src srcDir + 'coffee/*.coffee'
        .pipe coffee()
        .pipe gulp.dest buildDir + 'assets/js/'
        .pipe filesize()
        .on 'error', gutil.log

# Deploy: copies build files to gh-pages branch and pushes it up.
gulp.task 'deploy', () ->
    return

# Watch: Set up autocompiling
gulp.task 'watch', () ->
    gulp.watch srcDir + 'jade/*.jade', ['html']
    gulp.watch srcDir + 'scss/*.scss', ['css']
    gulp.watch srcDir + 'coffee/*.coffee', ['js']

gulp.task 'default', ['css', 'html', 'js', 'watch']
