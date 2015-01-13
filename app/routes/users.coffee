# @file users.coffee
# @brief Implements the user end points at /me and /users
# @author Oscar Bezi, oscar@bezi.io
# @since 8 January 2015
#===============================================================================

# @function copyBtoA
# @brief Returns a function that copies fields from B to A.  Helpful for
# validating
copyBtoA = (a, b) ->
    return (field) -> if b[field]? then a[field] = b[field]

# @function stripUser
# @brief Removes data that users should not be able to see about themselves
stripUser = (user) ->
    publicUser = {}
    copy = copyBtoA publicUser, user

    copy 'andrewID'
    copy 'firstName'
    copy 'lastName'
    copy 'email'
    copy 'resumeLink'
    copy 'github'
    copy 'avatarLink'
    copy 'url'
    copy 'pastHackathons'
    copy 'linkedIn'
    copy 'age'
    copy 'gender'
    copy 'major'
    copy 'school'
    copy 'year'
    copy 'accepted'
    return publicUser

# @function stripUserPublic
stripUserPublic = (user) ->
    publicUser = {}
    copy = copyBtoA publicUser, user

    copy 'firstName'
    copy 'lastName'
    copy 'github'
    copy 'email'
    copy 'avatarLink'
    return publicUser

# @function makeUser
# @brief given a database user model and a request body, copies over the safe
# fields a person can change about themselves (validation is done by the model
# validators defined in ../models
cleanRequest = (user, body) ->
    publicUser = {}
    copy = copyBtoA publicUser, user

    copy 'andrewID'
    copy 'firstName'
    copy 'lastName'
    copy 'email'
    copy 'resumeLink'
    copy 'github'
    copy 'avatarLink'
    copy 'url'
    copy 'pastHackathons'
    copy 'linkedIn'
    copy 'age'
    copy 'gender'
    copy 'major'
    copy 'school'
    copy 'year'
    return publicUser

module.exports = (app, models, auth) ->

    # GET /me
    app.route '/me'
        .get auth.requireLoggedIn, (req, res) ->
            models.User.findOne
                    userID: req.session.userID
                , (err, user) ->
                    if err?
                        models.err res, err
                    else
                        if user?
                            res.status 200
                            res.send JSON.stringify stripUser user
                        else
                            res.status 404
                            res.send 'User not found.'

    # PUT /me
    app.route '/me'
        .post auth.requireLoggedIn, (req, res) ->
            models.User.findOne
                    userID: req.session.userID
                , (err, user) ->
                    if err?
                        models.err res, err
                    else
                        if user?
                            copyUser user, req.body
                            user.save (err) ->
                                if err?
                                    models.err res, err
                                else
                                    res.status 200
                                    res.send 'User updated.'
                        else
                            res.status 404
                            res.send 'User not found.'
    # GET /users
    app.route '/users'
        .get auth.requireAdmin, (req, res) ->
            models.User.find (err, users) ->
                if err?
                    models.err res, err
                else
                    res.status 200
                    res.end JSON.stringify users

    # GET /users/:id
    app.route '/users/:id'
        .get (req, res) ->
            models.User.findOne
                    userID: req.params.id
                , (err, user) ->
                    if err?
                        models.err res, err
                    else
                        if user?
                            res.status 200
                            # admins get the full user
                            auth.isAdmin req, res, () ->
                                    res.end JSON.stringify user
                                , () ->
                                    res.end JSON.stringify stripUserPublic user
                        else
                            res.status 404
                            res.end 'User not found.'

    # PUT /users/:id
    app.route '/users/:id'
        .put auth.requireAdmin, (req, res) ->
            models.User.findOne
                    userID: req.params.id
                , (err, user) ->
                    if err?
                        models.err res, err
                    else
                        if user?
                            copy = copyBtoA user, req.body
                            copy 'isAdmin'
                            copy 'isMentor'
                            copy 'isCMU'
                            copy 'isCheckedIn'
                            copy 'accepted'
                            copy 'applicationTimestamp'
                            copy 'andrewID'
                            copy 'firstName'
                            copy 'lastName'
                            copy 'email'
                            copy 'resumeLink'
                            copy 'github'
                            copy 'avatarLink'
                            copy 'url'
                            copy 'pastHackathons'
                            copy 'linkedIn'
                            copy 'age'
                            copy 'gender'
                            copy 'major'
                            copy 'school'
                            copy 'year'
                            user.save (err) ->
                                if err?
                                    models.err res, err
                                else
                                    res.status = 200
                                    res.end 'User updated.'
                        else
                            res.status 404
                            res.end 'User not found.'

    # DELETE /users/:id
    app.route '/users/:id'
        .delete auth.requireAdmin, (req, res) ->
            models.User.remove
                    userID: req.params.id
                , (err, user) ->
                    if err?
                        models.err res, err
                    else
                        res.status 200
                        res.send 'User deleted.'
