require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs');
var nodeSpotifyAPI = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');

var client = new Twitter(keys.twitter);
var params = {screen_name: 'strubigblue'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    } 
  }
});



// var spotify = new Spotify(keys.spotify);