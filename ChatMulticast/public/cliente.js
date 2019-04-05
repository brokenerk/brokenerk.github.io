$(function () {
  var socket = io();

  //Para obtener el nickname desde GET
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  } 

  var nickname = getParameterByName("nickname");
  socket.emit("user connected", nickname);

  //Envia mensajes
  $("#enviarMensaje").click(function(e){
    e.preventDefault();
    var msj = $("#m").val();

    if(msj != ""){
      //Envia mensajes a otros clientes
      socket.emit("chat message", msj);
      $("#messages").append($("<li>").text(msj));
      $("#m").val("");
    }
  });

  //Muestra los usuarios online
  socket.on("display users", function(users){
    $("#users").empty();
    for(var i = 0; i < users.length; i++)
      if(users[i] != nickname)
        $("#users").append($("<li id= '" + users + "'>").text(users));
    //console.log(users); 
  })

  //Agrega a los usuarios cuando se conecten
  socket.on("user connected", function(data){
     $("#users").append($("<li id= '" + data.nickname + "'>").text(data.nickname));
     $("#messages").append($("<li>").text(data.numUsers + " users online"));
  })

  //Elimina el usuario desconectado
  socket.on("user disconnected", function(nickname){
    console.log("usuario " + nickname + " desconectado");
    $("#" + nickname).remove();
  })

  //Recibe del servidor los mensajes de otros clientes
  socket.on("chat message", function(data){
    $("#messages").append($("<li>").text(data.nickname + ": " + data.msg));      
  });
  
});