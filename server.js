const http = require('http');

// to create a basic server

http.createServer((req,res)=>{
    res.write("hi");
    res.end();

}).listen(3000);

