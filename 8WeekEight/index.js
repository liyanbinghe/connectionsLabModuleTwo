const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//app.get('/', (req, res) => {
  //  res.sendFile(__dirname + '/index.html');
//});

app.use(express.static('public'))


io.on('connection', (socket) => {
  console.log('a user connected!!');

  socket.on('chat message', (message) => {
    console.log('message:' + message);
    socket.broadcast.emit('message');
  
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});