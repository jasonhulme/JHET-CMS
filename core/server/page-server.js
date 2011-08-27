var os = require('os');




var db = mongo.db(dbconn.connectString.toString() + '/cms').collection('server').insert([{IP: hostIP, port:hostPort, serverType:'page'}],function(err,replies)
{
    setInterval(function()
	{
		var cputot=os.cpus()[0].times.user+os.cpus()[0].times.nice+os.cpus()[0].times.sys+os.cpus()[0].times.idle;
		var cpupc = 100-((os.cpus()[0].times.idle/cputot)*100);
		cpupc=Math.round(cpupc*1000)/1000;
		
		var mempc = 100-((os.freemem()/os.totalmem())*100)
		mempc = Math.round(mempc*1000)/1000;				
		
		var db = dbconn.connect("cms","server");
		db.update({_id:replies[0]._id}, {$set:{lastPing:new Date().getTime(),CPU:cpupc,Mem:mempc,load1min:os.loadavg()[0],load5min:os.loadavg()[1],load15min:os.loadavg()[2]}}, function() 
		{
		});
	},3000);	
});