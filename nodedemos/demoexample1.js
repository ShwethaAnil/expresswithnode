var http= require('http');
http.createServer(function(req,res){
res.write('Welcome to node web module');
res.end();
}).listen(8023);