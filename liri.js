require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs');
var inquirer = require('inquirer');
var nodeSpotifyAPI = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');

inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["my-tweets", "spotify-this-song"],
            name: "options"
        }
    ])
    .then(function(response) {
        if(response.options === "my-tweets"){
            myTweets();
        }
        if(response.options === "spotify-this-song"){
            spotifyThisSong();
        }
    });


var client = new Twitter(keys.twitter);

function myTweets() {
    var params = {screen_name: 'strubigblue'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        console.log("Here are " + tweets.truncated + "'s most recent tweets: ");
        for (i = 0; i < tweets.length; i++) {
            console.log("- " + tweets[i].text);
        };
        };
    });
};




var spotify = new nodeSpotifyAPI(keys.spotify);

function spotifyThisSong() {
    inquirer.prompt([
        {
        name: "song",
        message: "What song would you like to search for?"
        }
    ])
}