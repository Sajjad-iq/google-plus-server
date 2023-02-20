const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        min: 3,
        max: 10
    },
    FamilyName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true,
        min: 6,
    },
    ProfilePicture: {
        type: String,
        default: ""
    },
    CoverPicture: {
        type: String,
        default: ""
    },
    Description: {
        type: String,
        default: ""
    },
    Followers: {
        type: Array,
        default: []
    }, Followings: {
        type: Array,
        default: []
    },
    IsAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Account", AccountSchema)