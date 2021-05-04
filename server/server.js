const http = require('http');
const express = require('express');
const socketio = require('socket.io');



const app = express();
const server = http.createServer(app);
const io = socketio(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});




io.on('connection', socket => {
  console.log("use joined")
  const id = socket.handshake.query.id
  socket.join(id)

  socket.on('send-message', ({ recipients, text }) => {
      console.log("send message")
      console.log(recipients,text)
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
      console.log("recive message")
    })
  })
})

server.listen( 5000, () => 
    console.log(`Server has started.`));

