var http = require('http');
var fs = require('fs');

var events = require('events');

http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.end('See the CMD Terminal');

}).listen(8081)

var eventEmitter = new events.EventEmitter();
eventEmitter.on('connection',function(){
  console.log("Connection Successful");
  eventEmitter.emit('dataRecieved');
});

var dataRecievedCallbackFunction = function(){
  console.log('data recieved successfully');
}
eventEmitter.on('dataRecieved', dataRecievedCallbackFunction);

eventEmitter.emit('connection');

console.log('In the end of Program');
