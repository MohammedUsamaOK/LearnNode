var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Current Date is :"+ dt.myDateTime());
    res.end('Hii From OK');
}).listen(8080);