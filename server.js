var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var tweetController = require('./controllers/tweetController');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds125623.mlab.com:25623/twitterdb');

mongoose.connection.on('connected', function(){
  console.log('Connected to the database')
});

mongoose.connection.on('error', function(err){
  if(err){
    console.log('Error in DB -- ', +err)
  }
});

var app = express();

app.set('view engine' , 'ejs');

app.use(express.static('./public'));
app.use(cors());
app.use(bodyParser.json());
//fire controllers
tweetController(app);

app.listen(3000, function(){
  console.log('This is the node version of twitter and you are listening to port 3000');
});
