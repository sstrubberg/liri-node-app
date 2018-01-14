require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs');
var spotify = require('node-spotify-api');
var twitter = require('twitter');
var request = require('request');



var spotifyKeys = new Spotify(keys.spotify);
var twitterKeys = new Twitter(keys.twitter);
console.log(spotifyKeys);
console.log(twitterKeys);