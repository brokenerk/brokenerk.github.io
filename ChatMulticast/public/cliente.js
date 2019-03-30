$(function () {
  var socket = io();

  //emit -----> on
  //Con emit enviamos, con on recibimos
  socket.emit('chat message', 'user connected');

  $('form').submit(function(e){
    e.preventDefault(); // prevents page reloading
    var msj = $('#m').val();
    //Envia mensajes a otros clientes
    socket.emit('chat message', msj);
    $('#messages').append($('<li>').text(msj));
    $('#m').val('');
    return false;
  });

  //Recibe del servidor los mensajes de otros clientes
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
  
});