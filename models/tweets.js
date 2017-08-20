var mongoose = require('mongoose');


//creating schema
var tweetSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  tweetContent: {
    type: String,
    required: true
  },
   date: {
     type: Date,
     default: Date.now
   }
 });

var Tweet = module.exports = mongoose.model('Tweet', tweetSchema);
