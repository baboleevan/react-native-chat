var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  // res.sendFile(__dirname + '/index.html');
  console.log('app get');
});

io.on('connection', function(socket){
  console.log('connection');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    res.send('asdfasdffasd');
  });
});

// io.on('connection', function(socket){
//   console.log('connection');
//   socket.on('ferret', function(name, fn){
//     fn('woot');
//   });
// });

http.listen(3000, function(){
  console.log('listening on *:3000');
});