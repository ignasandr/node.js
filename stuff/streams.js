var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  myWriteStream.write(chunk);
});


// var server = http.createServer(function(req, res){
//   console.log('request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hey sexy ,)');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('yo yo yo, listening on 3000');