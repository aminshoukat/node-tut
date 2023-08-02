// let countries = require('./countries');
// let fs = require('fs');
// let path = require('path');
// let pathDir = path.join(__dirname, 'files');
// let http = require('http');



// fs.writeFileSync('new.txt', 'Hello World');

// http.createServer( (req,resp) => {
//     resp.writeHead(200, {'Content-Type':'application/json'});
//     resp.write(JSON.stringify(countries));
//     resp.end();

// }).listen(4500);


// for (let i = 1; i < 6; i++) {
//     fs.writeFileSync(`${pathDir}/file_${i}.txt`, `I love Pakistan ${i}`);
// }

// fs.readdir(pathDir, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// });


let a = 1;
let b = 2;

let waitingData = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(2);
    }, 2000);

})

waitingData.then((data) => {

    a = data;
    console.log(a + b);
})

