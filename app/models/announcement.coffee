# @file announcement.coffee
# @brief Defines the Announcement database model.
# @author Oscar Bezi, oscar@bezi.io
# @since 7 January 2015
#===============================================================================

mongoose = require 'mongoose'
Schema = mongoose.Schema

AnnouncementSchema = new Schema
        adminID: String
        content: String
        timestamp: Date

module.exports = mongoose.model 'Announcement', AnnouncementSchema
