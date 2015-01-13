# @file config.coffee
# @brief Configures the web app.
# @author Oscar Bezi, oscar@bezi.io
# @since 7 January 2015
#===============================================================================
config = {}

# General config
default_port = 80

# Database config
default_dbUrl = 'mongodb://db_1:27017/app'

hackKeywords = require './keywords'

# Auth config
defaultAdmin = '101517927867952229955' # Oscar Bezi, oscar.bezi@gmail.com
defaultSecretKey = 'DJGlagzIsABamf'
defaultGoogleClientID = '70162173884-17kl5i9qdhkj5qbrj3ds4bpg573dg5h0.apps.googleusercontent.com'
defaultGoogleClientSecret = '5Juff8uerG5YGxnhWvoalwFd'

# build the config object
config.port = process.env.PORT
config.port ?= default_port

config.db = {}
config.db.url = process.env.DB_URL
config.db.url ?= default_dbUrl
config.db.hackKeywords = hackKeywords

config.auth = {}
config.auth.defaultAdmin = defaultAdmin
config.auth.secret = process.env.SECRET_KEY
config.auth.secret ?= defaultSecretKey

config.auth.google = {}
config.auth.google.clientID = process.env.GOOGLE_CLIENT_ID
config.auth.google.clientID ?= defaultGoogleClientID
config.auth.google.clientSecret = process.env.GOOGLE_CLIENT_SECRET
config.auth.google.clientSecret ?= defaultGoogleClientSecret

module.exports = config
