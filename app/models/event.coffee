# @file event.coffee
# @brief Defines the Event database model.
# @author Oscar Bezi, oscar@bezi.io
# @since 7 January 2015
#===============================================================================

mongoose = require 'mongoose'
Schema = mongoose.Schema

EventSchema = new Schema
        timestamp: Date
        title: String
        location: String
        description: String

module.exports = mongoose.model 'Event', EventSchema
