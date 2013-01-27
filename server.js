require("http").createServer(function(req,res) {
	if(req.url=="/") req.url="/index.html";
	require("fs").readFile(__dirname+req.url,function(err,data) {
		var type = "text";
		var ext = req.url.substring(req.url.indexOf('.')+1,req.url.length);
		if(ext=="jpg"||ext=="png") type="image";
		else if(ext=="json") type="application";
		res.writeHead(200,{"Content-Type":type+"/"+ext,"Access-Control-Allow-Origin":"*"});
		res.end(data);
	});
}).listen(8888);
