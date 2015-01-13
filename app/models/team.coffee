# @file team.coffee
# @brief Defines the Team database model.
# @author Oscar Bezi, oscar@bezi.io
# @since 7 January 2015
#===============================================================================

mongoose = require 'mongoose'
Schema = mongoose.Schema

TeamSchema = new Schema
    leaderId: String
    members: [String]
    teamName: String
    hackName: String
    hackUrl: String
    teamAvatar: String
    hackDescription: String
    hackKeywords: [String]

module.exports = mongoose.model 'Team', TeamSchema
