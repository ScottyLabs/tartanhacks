# @file express.coffee
# @brief Initialises and configures express
# @author Oscar Bezi, oscar@bezi.io
# @since 7 January 2015
#===============================================================================
web = {}
express = require 'express'

morgan = require 'morgan'
bodyParser = require 'body-parser'
session = require 'express-session'

# @TODO: set up and use multer for file upload
# @TODO: use something besides MemoryStore for session storage (Mongostore would
# be ideal)

# initialisation function
web.init = (config, callback) ->
    delete web.init
    web.express = express()
    web.express.set 'trust proxy', 1
    web.express.use session
            secret: config.auth.secret
            resave: true
            saveUninitialized: false
            cookie:
                secure: false

    web.express.use morgan 'dev'
    web.express.use bodyParser.urlencoded
            extended: true

    callback()

module.exports = web
