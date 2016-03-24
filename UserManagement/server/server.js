/**
 * Created by arlingan on 3/23/2016.
 */

// Initialize node modules
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var db = require('./db');

var port = 4000;
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(methodOverride('X-HTTP-Method-Override'));
server.use(express.static(path.resolve(__dirname + '/../client')));
require('./routes/userApi')(server); // configure our routes

server.listen(port);
console.log("Server started on port" + port);