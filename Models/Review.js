const mongoose = require('mongoose');
//let userModel = require('../Models/User');
const Schema = mongoose.Schema;

const ReviewSchema= new Schema({
    Logo:{
        type: String,
        required: true,
    },
    Location:{
        type: String,
        required: true,
    },
    Light:{
        type: String,
        required: true,
    },
    Reason:{
        type: String,
        required: true,
    },
    Username:{
        type: String,
        required: true,
    },
});

const Review= mongoose.model('Review',ReviewSchema);
module.exports = Review;