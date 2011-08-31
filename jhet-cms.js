//Required node files:
var fs = require('fs');
var http = require('http');
var sys = require('sys');
var querystring = require('querystring');


//Require configuration file:
var config = require('./core/config.js');

//Required core files:
var pp = require('./core/server/plugin-parser.js');

//Server creation
http.createServer(function (req, res) {
    sys.puts('Request for ' + req.url);
    
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    
    var plugin = pp.pluginParser.get(req, config.location.pluginFolder);
    
    res.end();
    
}).listen(process.env.C9_PORT, "0.0.0.0");

console.log('Server running at http://0.0.0.0:/' + process.env.C9_PORT + '/');