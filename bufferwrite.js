var fs = require('fs');
var buffer = new Buffer([10,20,30,40,50]);
var data = '';
for(i = 0; i < buffer.length; i++) {
  data += buffer[i] + ',';
}
data.trim(',');
fs.createWriteStream('output.csv').write(data);

console.log('Program Ended');