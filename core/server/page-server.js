var page = require('../../plugins/page/').page;
var site = require('../../plugins/site/').site;
var http = require('http');

//var hostIP=process.argv[2];
var hostIP = '0.0.0.0';
//var hostPort=process.argv[3];
var hostPort = process.env.C9_PORT;

http.createServer(function(request, response) {
    var hostURL = request.headers.host.split(":")[0];


    site.siteId(hostURL, function(siteId) {
        if (site == null) {
            response.end('404, site not found.');
        }
        else {
            var pageRequest = request.url.slice(1, request.url.length);
            console.log(pageRequest);
            pageRequest = pageRequest.replace('_', ' ');
            page.get(siteId, pageRequest, function(result) {
                if (result == null) {
                    response.end('404, page not found.');
                }
                else {
                    response.end(result);
                }
            });
        }
    });
}).listen(hostPort, hostIP);