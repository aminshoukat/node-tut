let countries = require('./countries');
// let fs = require('fs');
// fs.writeFileSync('new.txt', 'Hello World');

let http = require('http');


http.createServer( (req,resp) => {
    resp.writeHead(200, {'Content-Type':'application/json'});
    resp.write(JSON.stringify(countries));
    resp.end();

}).listen(4500);