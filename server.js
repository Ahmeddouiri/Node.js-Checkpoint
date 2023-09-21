const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('HELLO WORLD')

  var fs = require("fs");

var writeStream = fs.createWriteStream("welcome.txt");
writeStream.write("Hello Node");

writeStream.end();
})

// var fs1 = require("fs");

// function readData(err, data) {
// 	  console.log(data);
// }

// fs1.readFile('welcome.txt', 'utf8', readData);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})