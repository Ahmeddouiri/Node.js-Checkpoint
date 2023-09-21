
var fs1 = require("fs");

function readData(err, data) {
	  console.log(data);
}

fs1.readFile('welcome.txt', 'utf8', readData);