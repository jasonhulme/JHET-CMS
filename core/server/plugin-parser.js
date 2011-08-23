var sys = require("sys");
var fs = require("fs");
var path = require("path");
var url = require("url");

exports.list = function (request, pluginFolder) {
    var list;
    path.exists(pluginFolder, function(exists) {
        if(!exists) {
            sys.puts("HTTP: " + pluginFolder + " Does Not Exist. 404 returned to " + request.connection.remoteAddress);
            sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
            return;
        }
        fs.readFile(pluginFolder, "binary", function(err, file) {
            if(err) {
                if(err.errno === 21){
                    fs.readdir(pluginFolder, function(err1, files){
                        if(err1){ 
                            sys.puts("HTTP: " + pluginFolder + " Could Not Be Read. 500 returned to " + request.connection.remoteAddress);
                            sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
                            return;
                        } else {
                            files.forEach(readModule);
                            
                            sys.puts("HTTP: Directory listing for " + pluginFolder + " sent to " + request.connection.remoteAddress);
                            sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
                            return;
                        }
                    });
                    return;
                }
                sys.puts("HTTP: " + pluginFolder + " Could Not Be Read. 500 returned to " + request.connection.remoteAddress);
                sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
                return;
            }
            sys.puts("HTTP: " + pluginFolder + " Read and Sent to " + request.connection.remoteAddress);
            sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
        });
    });
    
    return 'test';
};

function readModule(item, index, array){
    sys.puts(item);
}