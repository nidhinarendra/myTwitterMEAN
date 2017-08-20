
var Tweet = require('../models/tweets');
var User = require('../models/users');
var tweetsCollection = [];
var userCollection = [];


module.exports = function(app){
app.get('/', function(req, res, next){
  Tweet.find(function(err, tweets){
        res.render('home', {
          tweetsNum: tweets.length
        });
      });
  });

/*  app.get('/', function(req, res, next){
    twitterdb.collection("tweetsCollection", function(err, tweets){
      Tweet.find(function(err, tweets){
        if(err){
          throw err;
        }
        else{
          for(var i=0; i<result.length; i++){
            tweetsCollection[i] = result[i];
          }
        }
      })
    });

    twitterdb.collection("userCollection", function(err, users){
      User.find(function(err, users){
        if(err){
          throw err;
        }
        else{
          for (var i = 0; i< result.length; i++){
            userCollection[i] = result[i];
          }
        }
      })
    })

res.render('home', {
  tweetsCollection: tweetsCollection,
  userCollection: userCollection
});
});
*/

app.get('/myTweets', function(req, res, next){
  Tweet.find(function(err, tweets){
    if(err){
      throw err;
    }
    else{
    var tweetCount = tweets.length;
    console.log(tweetCount);
    for(var i = 0; i < tweetCount-1; i++){
tweetsCollection.push(tweets[i].tweetContent);
    //  res.json(tweets);
   }
   res.json(tweetsCollection);
 }
  })});

  app.get('/following', function(req, res, next){
    User.find(function(err, users){
      res.json(users);
    })});

    app.get('/followers', function(req, res, next){
      User.find(function(err, users){
        res.json(users);
      })});

      app.post('/users', function(req, res, next){
        let newUser = new User({
          id: req.body.id,
          email: req.body.email,
          password: req.body.password,
          following: req.body.following,
          followers: req.body.followers
        });

        newUser.save(function(err, user){
          if(err){
            res.json({msg:'Failed to save'});
          }
          else{
            res.json({msg:'Successfully saved'});
          }
        });
      });


      app.post('/tweets', function(req, res, next){
        let addedTweet = new Tweet({
          id: req.body.id,
          tweetContent: req.body.tweetContent
        });

        addedTweet.save(function(err, tweet){
          if(err){
            res.json({msg:'Failed to save'});
          }
          else{
            res.json({msg:'Successfully saved'});
          }
        });
      });



      app.delete('/tweets/:id', function(req, res, next){
        Tweet.remove({_id: req.params.id}, function(err, result){
          if(err){
            res.json(err);
          }
          else{
            res.json(result);
          }
        })
      });
    }
