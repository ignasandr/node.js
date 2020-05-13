var fs = require('fs');

// NON-BLOCKING

fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data, function(err, result) {
     if(err) console.log('error', err);
})});

//CREATE FILES AND DIRECTORIES
// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeMe.txt', data, function(err, results){
//       if (err) console.log('error', err);
//     });
//   });
// });

//THE WRONG METHOD
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

//DELETE FILES

// fs.unlink('writeMe.txt', function(err, result) {
//    if(err) console.log('error', err);
//  });

//DELETE FILES AND DIRECTORIES
// fs.unlink('./stuff/writeMe.txt', function(err, result) {
//     if(err) console.log('error', err);
//     fs.rmdir('stuff', function(err, result){
//       if(err) console.log('error', err);
//     });
// });

// BLOCKING

// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);
