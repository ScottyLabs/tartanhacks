# @file auth.coffee
# @brief Gives a couple of utility functions to validate requests and handle the
# google OAuth strategy
# @author Oscar Bezi, oscar@bezi.io
# @since 7 January 2015
#===============================================================================
models = null
config = null
lib = {}

google = require 'googleapis'
plus = google.plus 'v1'

# @function makeOrUpdateUser
# @brief given the oauth data of a person, either creates the database entry for
# the person or updates new data from Google
makeOrUpdateUser = (req, res, person, next) ->
    models.User.findOne
            userID: person.id
        , (err, user) ->
            if err?
                models.err res, err
            else
                if user?
                    req.session.userID = user.userID
                    req.session.isLoggedIn = true
                    next()
                else
                    isAdmin = person.id is config.defaultAdmin
                    user = new models.User
                            userID: person.id,
                            firstName: person.name.givenName
                            lastName: person.name.familyName
                            isAdmin: isAdmin

                    user.save (err) ->
                        if err?
                            models.err res, err
                        else
                            req.session.userID = person.id
                            req.session.isLoggedIn = true
                            next()

# @function isLoggedIn
# @brief Middleware that checks if a user if logged in.
isLoggedIn = (req, res, trueCallback, falseCallback) ->
    if req.session.isLoggedIn
        trueCallback()
    else
        falseCallback()

isAdmin = (req, res, trueCallback, falseCallback) ->
    isLoggedIn req, res, (userID) ->
            # database query
            models.User.findOne
                    userID: req.session.userID
                , (err, user) ->
                    if err?
                        models.err res, err
                    else
                        if user?
                            if user.isAdmin
                                trueCallback()
                            else
                                falseCallback()
                        else
                            res.status 404
                            res.send 'User not found.'
        , falseCallback

# @function requireLoggedIn
# @brief Middleware that requires that user be logged in.
requireLoggedIn = (req, res, next) ->
    isLoggedIn req, res, next , () ->
            res.status 403
            res.end 'Forbidden: Not logged in.'

# @function requireAdmin
# @brief Middleware that checks if the logged in user is an admin.
requireAdmin = (req, res, next) ->
    isAdmin req, res, next, () ->
            res.status 403
            res.end 'Forbidden: Not an administrator.'

# @function requireMentor
# @brief Middleware to check that the logged in user is either a mentor or an
# admin
requireMentor = (req, res, next) ->
    requireLoggedIn req, res, () ->
        # @TODO get the variables from the database.  This will fail
        if req.session.isAdmin or req.session.isMentor
            next()
        else
            res.status 403
            res.end 'Forbidden: Not a mentor.'

# @function login
# @brief Middleware to handle a login request.
login = (req, res, next) ->
    if not req.body.singleUseToken?
        res.status 400
        res.end 'Error: Malformed request. Need a singleUseToken parameter.'
    else
        oauth2 = new google.auth.OAuth2 config.google.clientID,
            config.google.clientSecret, 'postmessage'

        oauth2.getToken req.body.singleUseToken, (err, tokens) ->
            if err?
                res.status 403
                res.end "Forbidden: #{ err }."
            else
                req.session.tokens = tokens
                oauth2.setCredentials tokens
                plus.people.get
                        userId: 'me',
                        auth: oauth2
                    , (err, person) ->
                        if err?
                            res.status 403
                            res.end "Forbidden: #{ err }."
                        else
                            makeOrUpdateUser req, res, person, next

# @function logout
# @brief Middleware to handle a logout request.
logout = (req, res, next) ->
    if req.session?
        req.session.destroy next
    else
        res.status 403
        res.end 'Forbidden: not logged in.'

# @function lib
# @brief Initialisation function that then overwrites the lib object to make the
# functions available once the initialisation is called
lib.init = (dbModels, globalConfig, callback) ->
    models = dbModels
    config =  globalConfig.auth

    delete lib.init
    lib.isLoggedIn = isLoggedIn
    lib.isAdmin = isAdmin
    lib.requireLoggedIn = requireLoggedIn
    lib.requireAdmin = requireAdmin
    lib.requireMentor = requireMentor
    lib.login = login
    lib.logout = logout

    callback()

module.exports = lib
