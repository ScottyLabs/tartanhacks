# @file server.coffee
# @brief TartanHacks app Node.js server.
# @since 7 January 2015
# @author Oscar Bezi, oscar@bezi.io
#===============================================================================
console.log "Initialising TartanHacks backend instance. . ."

# config
config = require './config'

# database models
models = require './models/models'

# express and associated configs
web = require './express'

# small auth library
auth = require './auth'

# routes
routes = require './routes/routes'

complete = () ->
    console.log "TartanHacks backend instance is up and running on port #{ config.port }!"

# Initialise everything.  Callbacks ensure that nothing happens unless
# everything works
models.init config, () ->
    console.log "[1/4] Models successfully initialised."
    web.init config, () ->
        console.log "[2/4] Express successfully initialised."
        app = web.express
        auth.init models, config, () ->
            console.log "[3/4] Authentication module successfully initalised."
            routes.init app, models, auth, config, () ->
                console.log "[4/4] Router logic successfully initialised."
                app.listen config.port
                complete()
