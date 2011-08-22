var sys = require("sys");
var fs = require("fs");
var path = require("path");
var url = require("url");

exports.list = function (request) {
    
    var list;
    //var uri = url.parse(request.url).pathname;
    //var filename = path.join("/", uri);
    var filename = "./plugins";
    path.exists(filename, function(exists) {
        if(!exists) {
            sys.puts("HTTP: " + filename + " Does Not Exist. 404 returned to " + request.connection.remoteAddress);
            sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
            return;
        }
         fs.readFile(filename, "binary", function(err, file) {
            if(err) {
                if(err.errno === 21){
                    fs.readdir(filename, function(err1, files){
                        if(err1){ 
                            sys.puts("HTTP: " + filename + " Could Not Be Read. 500 returned to " + request.connection.remoteAddress);
                            sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
                            return;
                        } else {
                            
                            function readModule(item, index, array){
                                sys.puts(item);  
                            }
                            
                            files.forEach(readModule);
                            
                            sys.puts("HTTP: Directory listing for " + filename + " sent to " + request.connection.remoteAddress);
                            sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
                            return;
                        }
                    });
                    return;
                }
                sys.puts("HTTP: " + filename + " Could Not Be Read. 500 returned to " + request.connection.remoteAddress);
                sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
                return;
            }
            sys.puts("HTTP: " + filename + " Read and Sent to " + request.connection.remoteAddress);
            sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
        });
    });
    
    return 'test';
};