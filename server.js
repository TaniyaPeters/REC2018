var http = require('http');
var fs = require('fs');
var mongo = require('mongodb');

console.log("node.js running");

http.createServer(function (req, res) {
    fs.readFile('views/FoodBack.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
