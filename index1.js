
  var fs = require("fs");

var writeStream = fs.createWriteStream("welcome.txt");
writeStream.write("Hello Node");

writeStream.end();
