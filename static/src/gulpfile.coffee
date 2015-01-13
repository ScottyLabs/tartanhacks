# @file gulpfile.coffee
# @brief Compiles the static website.
# @author Oscar Bezi, oscar@bezi.io
# @since 7 January 2015
#===============================================================================

gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
gutil = require 'gulp-util'

# at this point, only compiles the coffeescript.

gulp.task 'coffee', () ->
    gulp.src 'coffee/*.coffee'
        .pipe coffee bare:true
        .pipe concat 'app.js'
        .pipe gulp.dest '../www/assets/js/'
        .on 'error', gutil.log

gulp.task 'watch', ['coffee'], () ->
    gulp.watch 'coffee/*.coffee', ['coffee']
        .on 'error', gutil.log

#@TODO: add copying over other assets (like images)

gulp.task 'default', ['watch']
