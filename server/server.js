var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./../database/mongoose.js');
const {Player} = require('./../database/models/player.js');
const fillPlayers = require('./../database/initialize_database/fill_players.js').Player;

fillPlayers.addPlayers();
var app = express();
var port = process.env.PORT || 3000;
 app.listen(port,() => {
  console.log(`Server started up on port: ${port}`);
});
