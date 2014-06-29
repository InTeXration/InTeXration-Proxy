var http = require('http'),
    httpProxy = require('http-proxy');

var hosts = {
    "intexration.com": {
        server: httpProxy.createProxyServer(), 
        options: {target: 'http://localhost:3030'}
    },
    "intexration.jonasdevlieghere.com": {
        server: httpProxy.createProxyServer(), 
        options: {target: 'http://localhost:3030'}
    }
};

var server = http.createServer(function(req ,res){
    host = hosts[req.headers.host];
    if(host){
        host.server.web(req, res, host.options);
    }else{
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("InTeXration Proxy Server: Error (Unknown Host)");
    }
});

server.listen(80);
process.on('uncaughtException', function(err) {
    console.error(err);
});
