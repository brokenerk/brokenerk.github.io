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

  console.log("Enviando nickname al servidor");

  //Muestra los usuarios online
  socket.on("display users", function(users){
    console.log("Recibiendo usuarios: " + users); 

    $("#users li").remove();

    for(var i = 0; i < users.length; i++){
        if(users[i].localeCompare(nickname) != 0){
          $("#users").append($('<li id="' + users[i] + '"><button><a href="http://localhost:3000/room?from=' + nickname + '&to=' + users[i] + '" target="_blank">' + users[i] + '</a></button></li>'));
        }
      }
  });

  //Envia mensajes
  $("#enviarMensaje").click(function(e){
    e.preventDefault();
    var msj = $("#m").val();

    if(msj != ""){
      //Envia mensajes a otros clientes
      socket.emit("chat message", msj);
      $("#messages").append($("<li>").text(nickname + ": " +msj));
      $("#m").val("");
    }
  });

  //Agrega a los usuarios cuando se conecten
  socket.on("user connected", function(newNickname){
    console.log("Usuario: " + newNickname + " conectado"); 

    $("#users").append($('<li id="' + newNickname + '"><button><a href="http://localhost:3000/room?from=' + nickname + '&to=' + newNickname + '" target="_blank">' + newNickname + '</a></button></li>'));
    $("#messages").append($("<li>").text(newNickname + " se ha conectado"));
  });

  //Elimina el usuario desconectado
  socket.on("user disconnected", function(nickname){
    console.log("Usuario: " + nickname + " desconectado");

    $("#messages").append($("<li>").text(nickname + " se ha desconectado"));
    $("#" + nickname).remove();
  });

  //Recibe del servidor los mensajes de otros clientes
  socket.on("chat message", function(data){
    console.log("Msj: " + data.msg + " de: " + data.nickname);

    $("#messages").append($("<li>").text(data.nickname + ": " + data.msg));      
  });
  
});