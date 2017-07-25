var events = require("events");

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
  console.log("Connected successfully");
  
  // Fire the data_received event 
  eventEmitter.emit("data_recieved");  
}

//bind the connection event with handler
eventEmitter.on("connection",connectHandler);

//nameless function
eventEmitter.on("data_recieved", function() {
  console.log("data recieved succesfully");
});

//fire the connection event
eventEmitter.emit("connection");

console.log("Program Ended.");