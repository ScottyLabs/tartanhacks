# @file user.coffee
# @brief Defines the User database model.
# @author Oscar Bezi, oscar@bezi.io
# @since 7 January 2015
#===============================================================================

mongoose = require 'mongoose'
Schema = mongoose.Schema

UserSchema = new Schema
    userID: String
    isAdmin: Boolean
    isMentor: Boolean
    isCMU: Boolean
    isCheckedIn: Boolean
    accepted: Boolean
    applicationTimestamp: Date
    andrewID: String
    firstName: String
    lastName: String
    email: String
    resumeLink: String
    github: String
    avatarLink: String
    url: String
    pastHackathons: [String]
    linkedIn: String
    age: Number
    gender: String
    major: String
    school: String
    year: String

module.exports = mongoose.model 'User', UserSchema
