# @file models.coffee
# @brief Initialisation code for the database models.
# @since 7 January 2015
# @author Oscar Bezi, oscar@bezi.io
#===============================================================================

mongoose = require 'mongoose'

# will only be initalised once the callback function is called
models = {}

models.init = (config, callback) ->
    mongoose.connect config.db.url, (err) ->
        if err?
            console.log config
            return console.log "Unable to connect to database at #{ config.db.url }"
        console.log "Successfully connected to database at #{ config.db.url }."
        # mongoose.connection.db.dropDatabase()

        # @TODO: write model validators
        # @TODO: write model getters and setters
        models.User = require './user'
        models.Team = require './team'
        models.Announcement = require './announcement'
        models.Event = require './event'

        # @function err
        # @brief Brief wrapper for database error handlers
        models.err = (res, err) ->
            res.status 500
            console.log "Database error: #{ err }"
            res.end "Database error: #{ err }"

        delete models.init

        callback()

module.exports = models
