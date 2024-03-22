const mongoose = require('mongoose');
const User=require('./studentModel');

const UserDetailsSchema = new mongoose.Schema({
  email:{
    type:String,
    ref:"User",
  }
});

const addDetails = mongoose.model('additionalDetails', additionalDetailSchema);
module.exports = addDetails;