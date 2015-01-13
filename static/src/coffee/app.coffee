# particlesJS init
particlesJS 'splash-bg',
        particles:
            color: '#fff',
            shape: 'triangle',
            opacity: 1,
            size: 2,
            size_random: false,
            nb: $(window).width() / 5,
            line_linked:
                enable_auto: true,
                distance: 100,
                color: '#fff',
                opacity: 0.9,
                widapp: 1,
                condensed_mode:
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
            anim:
                enable: true,
                speed: 1
        interactivity:
            enable: false
        # Retina Display Support
        retina_detect: true

window.app = {}

#===============================================================================
# Authentication
#===============================================================================
app.auth =
    clientId: '70162173884-dpo77017763anqa35rp7tus54681qkgb.apps.googleusercontent.com'
    scopes: 'profile'
    initialised: false


app.auth.init = () ->
    delete window.handleClientLoad
    gapi.client.setApiKey app.auth.apiKey
    gapi.auth.authorize
            client_id: app.auth.clientId
            scope: app.auth.scopes
            immediate: true
            cookie_policy: 'single_host_origin'
            accesstype: 'offline'
            redirecturi: 'postmessage'
        , app.auth.authHandler

# Necessary for Google API
window.handleClientLoad = app.auth.init

app.auth.clickHandler = () ->
    gapi.auth.authorize
            client_id: app.auth.clientId
            scope: app.auth.scopes
            immediate: false
            cookie_policy: 'single_host_origin'
            accesstype: 'offline'
            redirecturi: 'postmessage'
        , app.auth.authHandler

app.auth.authHandler = (res) ->
    if res? and not res.error
        console.log 'Logged in!'
        console.log res['access_token']
    else
        console.log 'Not logged in'
        $("#googleSignIn").on 'click', app.auth.clickHandler



#===============================================================================
# Rendering
#===============================================================================

Handlebars.registerHelper 'toLowerCase', (val) ->
    if val? then new Handlebars.SafeString val.toLowerCase() else ''

app.templates =
    announcements: Handlebars.compile $("#announcements-template").html()

app.init = () ->
    $("#announcements").html app.templates.announcements
            announcements: []
    app.update.all()

app.update =
    announcements: (data) ->
        data = data
            .sort (a, b) -> a.timestamp - b.timestamp
            .map (elem) ->
                elem.timestamp = moment(elem.timestamp, 'x').fromNow()
                return elem
            .slice -5

        $("#announcements").html app.templates.announcements
                announcements: data


    all: () ->
        $.ajax
                dataType: 'json'
                url: '/api/data'
                type: 'GET'
            .success (data) ->
                app.update.announcements data.announcements
                console.log "Update."

            .fail (err) ->
                console.log "Error: #{ err }.  Please refresh the page."

        # setTimeout app.update.all, 1000 # update every second

$ window
    .on 'ready', app.init()
