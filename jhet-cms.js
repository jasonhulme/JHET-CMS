//Required node files:
var fs = require('fs');
var http = require('http');
var sys = require('sys');
var path = require("path");
var querystring = require('querystring');

//Required node modules files:
var mongo = require('./core/node_modules/mongoskin/');

//Required core files:
var pluginParser = require('./core/server/plugin-parser.js');

//Server creation
http.createServer(function (req, res) {
    sys.puts('Request for ' + req.url);
    
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    
    var test = pluginParser.list(req);
    
    res.end(test);
    
}).listen(process.env.C9_PORT, "0.0.0.0");

console.log('Server running at http://0.0.0.0:process.env.C9_PORT/');