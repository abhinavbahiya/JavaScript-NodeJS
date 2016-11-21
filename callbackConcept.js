var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.end('Look at CMD terminal');

}).listen(8081);

<!-- This is Blocking Code -->

//data = fs.readFileSync('input.txt');
//console.log(data.toString());

<!-- -->

<!-- This is Non Blocking Code -->

fs.readFile('input.txt', function(err, data){
  if (err) return console.log(err);
  console.log(data.toString());
});

<!-- -->

console.log('Server is running');
