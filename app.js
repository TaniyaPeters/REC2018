// app.js
const express = require('express');
const bodyParser = require('body-parser');
var path = __dirname + "/views/"

// Initialise express app
const app = express();

// Define listening port
let port = 8080;

// Launch app
app.listen(port, () => {
  console.log('Server is up and running');
});

app.get('/', function(req,res){
  res.sendFile(path + 'FoodBack.html');
});

app.get('/maps', function(req,res){
  res.sendFile(path + 'Maps.html');
});

app.get('/info', function(req,res){
  res.sendFile(path + 'Information.html');
});
