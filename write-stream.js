var fs = require('fs');

var data =  "tajinder is writing data in an output file";

var writestream = fs.createWriteStream("output.txt");

writestream.write(data);

// Handle stream events --> finish, and error
writestream.on('finish', function() {
    console.log("Write completed.");
});

writestream.on('error', function(err){
   console.log(err.stack);
});

writestream.end();

console.log("Program Ended");