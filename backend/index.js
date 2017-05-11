var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  // res.sendFile(__dirname + '/index.html');
  console.log('app get');
});

io.on('connection', function(socket){
  console.log('[TS_LOG] Server Start');
  // TODO: Socket send message
  socket.broadcast.emit('server message', 'Im server');
  // console.log('connection');
  // io.emit('connection message', 'Server : connection seccess');
  // socket.on('chat message', function(msg){
  //   console.log('message: ' + JSON.stringify(msg));
  //   io.emit('chat message', msg);
  // });
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