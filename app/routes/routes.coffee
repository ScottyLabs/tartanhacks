# @file routes.coffee
# @brief Initalises the routes of the app.
# @author Oscar Bezi, oscar@bezi.io
# @since 8 January 2015
#===============================================================================
routes = {}
routes.init = (app, models, auth, config, callback) ->
    delete routes.init

    # /login and /logout
    routes.auth = require('./auth')(app, models, auth)

    # /me and /users
    routes.users = require('./users')(app, models, auth)

    app.route '/test'
        .get (req, res) ->
            res.end JSON.stringify req.sessionID

    callback()

module.exports = routes
