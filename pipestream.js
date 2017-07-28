var fs = require("fs");

fs.createReadStream('input.txt').pipe(fs.createWriteStream('output.txt'));

console.log("Program Ended");