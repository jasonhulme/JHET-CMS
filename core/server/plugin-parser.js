var sys = require("sys"),
    fs = require("fs"),
    path = require("path"),
    db = require('../../core/db.js').db;

exports.pluginParser = {
    get: function(request, pluginFolder) {
        var list;
        path.exists(pluginFolder, function(exists) {
            if (!exists) {
                sys.puts("HTTP: " + pluginFolder + " Does Not Exist. 404 returned to " + request.connection.remoteAddress);
                sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
                return;
            }
            fs.readFile(pluginFolder, "binary", function(err, file) {
                if (err) {
                    if (err.errno === 21) {
                        fs.readdir(pluginFolder, function(err1, files) {
                            if (err1) {
                                sys.puts("HTTP: " + pluginFolder + " Could Not Be Read. 500 returned to " + request.connection.remoteAddress);
                                sys.puts("HTTP: Disconnected: " + request.connection.remoteAddress);
                                return;
                            }
                            else {
                                readPlugin(files, pluginFolder);
                                return;
                            }
                        });
                        return;
                    }
                    return;
                }
            });
        });
    }
};

function readPlugin(folders, path) {
    var plugins = [];
    folders.forEach(function(item, index) {
        if (item == "site") {
            var fileContents = fs.readFileSync(path + '/' + item + '/settings.json', 'utf-8');
            plugins.push(fileContents);
        }
    });
    addPluginToDB(plugins);
}

function addPluginToDB(plugins) {
    sys.puts(plugins);
    var count=0;
    plugins.forEach(function(item, index) {
        db.insert('jhetcms', 'plugin', item, function(item) {
            sys.puts(item);
            if(item!==null) {
                count++;
                if(count==plugins.length) {
                    sys.puts('added with succes!');
                }
            } else {
               sys.puts('error, plugin not added');
            }
        });
    });
}