const http = require('http');
const fs = require('fs');
const mongo = require('mongodb');

console.log("node.js running");

// Create MongoDB DataBase
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/mydb";

// Create DataBase
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// Create HTML
http.createServer(function (req, res) {
    fs.readFile('views/FoodBack.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
