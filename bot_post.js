
console.log("Hello");

var twit = require('twit');
var config = require('./config');
var T = new twit(config);

var stream = T.stream('user');
stream.on('follow', followed);


function followed(event) {
  var name = event.source.name;
  var ScreenName = event.source.screen_name;
  TweetIt('@' + ScreenName + ' thank you for following me');

  // @ wil add it to replies
  // .@ will add it to timeline/ name page
}

// setInterval(TweetIt, 1000);

function TweetIt(text) {
  var tweet = {
    status: text
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    console.log(data);
  }
}