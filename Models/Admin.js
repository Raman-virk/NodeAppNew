
const mongoose = require('mongoose');
//let userModel = require('../Models/User');
const Schema = mongoose.Schema;

const AdminSchema= new Schema({
    UserName:{
        type: String,
        required: true,
    },
    Password:{
        type: String,
        required: true,
    },
});

const Admin= mongoose.model('Admin',AdminSchema);
module.exports = Admin;