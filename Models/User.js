const mongoose = require('mongoose');
//let userModel = require('../Models/User');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    FullName:{
        type: String,
        required: true,
    },
    MemberID:{
        type: String,
        required: true,
    },
    UserName:{
        type: String,
        required: true,
    },
    Password:{
        type: String,
        required: true,
    },
});

const User= mongoose.model('User',UserSchema);
module.exports = User;