# @file auth.coffee
# @brief Implements the app's /login and /logout handlers
# @author Oscar Bezi, oscar@bezi.io
# @since 8 January 2015
#===============================================================================
module.exports = (app, models, auth) ->

    # POST /login
    app.route '/login'
        .post auth.login, (req, res) ->
            res.status 200
            res.end 'Successfully logged in.'

    # GET /logout
    app.route '/logout'
        .get auth.logout, (req, res) ->
            res.status 200
            res.end 'Successfully logged out.'
