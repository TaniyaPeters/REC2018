// app.js
const express = require('express');
const bodyParser = require('body-parser');
var path = __dirname + "/views/"

// Initialise MongoDB connection
const mongoose = require('mongoose');
let dev_db_url = "mongodb://admin:admin1@ds161856.mlab.com:61856/foodback";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
mongoose.set('useFindAndModify', false);

// Imports routes for offers and supporters
const offer = require('./routes/offer.route');
const supporter = require('./routes/supporter.route');

// Initialise express app
const app = express();

// Use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// TEST CASES
app.use('/offers', offer);
app.use('/supporters', supporter);

// Define listening port
let port = 8080;

// Launch app
app.listen(port, () => {
  console.log('Server is up and running');
});

app.get('/', function(req,res){
  res.sendFile(path + 'Index.html');
});

app.get('/maps', function(req,res){
  res.sendFile(path + 'Maps.html');
});

app.get('/info', function(req,res){
  res.sendFile(path + 'Information.html');
});

app.get('/mission', function(req,res){
  res.sendFile(path + 'MissionStatement.html');
});

app.get('/login', function(req,res){
  res.sendFile(path + 'Login.html');
});

app.get('/create', function(req, res){
  res.sendFile(path + 'CreateAccount.html');
});

app.use(express.static(path));
