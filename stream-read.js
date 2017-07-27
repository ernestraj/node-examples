var fs = require('fs');
var data = '';
//creae a Readstram
var readStream = fs.createReadStream('input.txt');

//set the encoding to be UTF8
readStream.on('data', function(chunk) {
  data += chunk;
  console.log(chunk);
});

readStream.on('end', function() {
  console.log(data);
});

readStream.on('error', function(err) {
  console.log(err.stack);
});

console.log('end of the program');