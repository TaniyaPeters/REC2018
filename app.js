// app.js
const express = require('express');
const bodyParser = require('body-parser');

// Initialise express app
const app = express();

// Define listening port
let port = 8080;

// Launch app
app.listen(port, () => {
    console.log('Server is up and running');
});
