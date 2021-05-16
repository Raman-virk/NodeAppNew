const mongoose = require('mongoose');
//let userModel = require('../Models/User');
const Schema = mongoose.Schema;

const DetailSchema= new Schema({
    Name:{
        type: String,
        required: true,
    },
    Value:{
        type: String,
        required: true,
    },
});

const Detail= mongoose.model('Detail',DetailSchema);
module.exports = Detail;