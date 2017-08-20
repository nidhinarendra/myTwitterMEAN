var mongoose = require('mongoose');


//creating schema
var userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required:true
  },
  following:[{
    type: String
  }],
  followers:[{
    type: String
  }]
});

var User = module.exports = mongoose.model('User', userSchema);
