var os = require('os');
var page = require('../plugins/page/').page;
var site = require('../plugins/site/').site;

http.createServer(function(request, response) {
    var hostURL = request.headers.host.split(":")[0];
    

    site.siteId(hostURL, function(siteId) {
        if (site === null) {
            response.end('404, site not found.');
        }
        else {           
            page.get(siteId, pageTitle, function(result) {
                if (result === null) {
                    response.end('404, page not found.');
                }
                else {
                    response.end(result);
                }
            });
        }
    });
});



var db = mongo.db(dbconn.connectString.toString() + '/cms').collection('server').insert([{
    IP: hostIP,
    port: hostPort,
    serverType: 'page'
}], function(err, replies) {
    setInterval(function() {
        var cputot = os.cpus()[0].times.user + os.cpus()[0].times.nice + os.cpus()[0].times.sys + os.cpus()[0].times.idle;
        var cpupc = 100 - ((os.cpus()[0].times.idle / cputot) * 100);
        cpupc = Math.round(cpupc * 1000) / 1000;
        var mempc = 100 - ((os.freemem() / os.totalmem()) * 100);
        mempc = Math.round(mempc * 1000) / 1000;

        var db = dbconn.connect("cms", "server");
        db.update({
            _id: replies[0]._id
        }, {
            $set: {
                lastPing: new Date().getTime(),
                CPU: cpupc,
                Mem: mempc,
                load1min: os.loadavg()[0],
                load5min: os.loadavg()[1],
                load15min: os.loadavg()[2]
            }
        }, function() {});
    }, 3000);
});