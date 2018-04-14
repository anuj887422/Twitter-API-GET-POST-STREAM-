
console.log("Hello");

var fs = require('fs');
var twit = require('twit');
var config = require('./config');
var T = new twit(config);
var exec = require('child_process').exec;

TweetIt();
function TweetIt() {
  var cmd = 'processing-java --sketch=%cd%\TwitterApi\sketch  --run';
  exec(cmd, processing);

  function processing() {
    var filename = 'sketch/output.png';
    var params = {
      encoding: 'base64'
    }
    var b64 = fs.readFileSync(filename, params);
    T.post('media/upload', { media_data: b64 }, uploaded);

    function uploaded(err, data, response) {
      var id = data.media_id_string;
      var tweet = {
        status: 'Hello Twitter',
        media_ids: [id]
      }
      T.post('statuses/update', tweet, tweeted);
    }
    function tweeted(err, data, response) {
      console.log(data);
    }
  }
}