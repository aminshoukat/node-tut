// let countries = require('./countries');
// let fs = require('fs');
// fs.writeFileSync('new.txt', 'Hello World');

let http = require('http');


http.createServer( (req,resp) => {

    resp.write('Hello World from Node JS');
    resp.end();

}).listen(4500)