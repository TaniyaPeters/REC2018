// app.js
const express = require('express');
const bodyParser = require('body-parser');

// Initialise MongoDB connection
const mongoose = require('mongoose');
let dev_db_url = "mongodb://admin:admin1@ds161856.mlab.com:61856/foodback";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Initialise express app
const app = express();

// Define listening port
let port = 8080;

// Launch app
app.listen(port, () => {
    console.log('Server is up and running');
});
