var net = require('net');

var sourceport = process.env.C9_PORT;
var destport = 8080;

net.createServer(function(s)
{
    var buff = "";
    var connected = false;
    var cli = net.createConnection(destport,"0.0.0.0");
    s.on('data', function(d) {
        if (connected)
        {
           cli.write(d);
        } else {
           buff += d.toString();
        }
    });
    cli.on('connect', function() {
        connected = true;
        cli.write(buff);
    });
    cli.pipe(s);
}).listen(sourceport,"127.0.0.1");