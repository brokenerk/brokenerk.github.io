$(function () {
  var socket = io();
  var rootPath = "http://localhost:3000/";

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
          // --------------- AQUI HAY QUE APLICAR CSS
          $("#users").append($('<li id="' + users[i] + '"><a class="button" href="' + rootPath + 'room?from=' + nickname + '&to=' + users[i] + '" target="_blank">' + users[i] + '</a></li>'));
        }
      }
  });

  //Envia mensajes
  $("#enviarMensaje").click(function(e){
    e.preventDefault();
    var msj = $("#m").val();

    if(msj != ""){
      socket.emit("chat message", msj);

      /* --------------- AQUI HAY QUE APLICAR CSS*/
      $("#messages").append($("<li>").text(nickname + ": " +msj));
      $("#m").val("");
    }
  });

  //Agrega a los usuarios cuando se conecten
  socket.on("user connected", function(newNickname){
    console.log("Usuario: " + newNickname + " conectado"); 

    /* --------------- AQUI HAY QUE APLICAR CSS*/
    $("#users").append($('<li id="' + newNickname + '"><a class="button" href="' + rootPath + 'room?from=' + nickname + '&to=' + newNickname + '" target="_blank">' + newNickname + '</a></li>'));
    $("#messages").append($("<li>").text(newNickname + " se ha conectado"));
  });

  //Elimina el usuario desconectado
  socket.on("user disconnected", function(nickname){
    console.log("Usuario: " + nickname + " desconectado");

    /* --------------- AQUI HAY QUE APLICAR CSS*/
    $("#messages").append($("<li>").text(nickname + " se ha desconectado"));
    $("#" + nickname).remove();
  });

  //Recibe del servidor los mensajes de otros clientes
  socket.on("chat message", function(data){
    console.log("Msj: " + data.msg + " de: " + data.nickname);

    /* --------------- AQUI HAY QUE APLICAR CSS*/
    $("#messages").append($("<li>").text(data.nickname + ": " + data.msg));      
  });

  //Recibe del servidor los links de descarga
  socket.on("chat file", function(data){
    console.log("Link: " + data);
    $("#messages").append($(data));     
  });

  // ---------------------- Subir archivos
  var uploader = new SocketIOFileUpload(socket);
  //Con esto automaticamente carga y sube el archivo :3
  document.getElementById('subir').addEventListener("click", uploader.prompt, false);

  //Muestra el progreso de subida
  uploader.addEventListener("progress", function(e){
    var nombre = e.file.name;
    var tam = e.file.size;
    var porcentaje = parseInt(e.bytesLoaded / e.file.size * 100);
    console.log("Nombre: " + nombre);
    console.log("Tam: " + tam);
    console.log("Subiendo: " + porcentaje + "%");

    /* --------------- AQUI HAY QUE APLICAR CSS (ALERT O CUADRO DE DIALOGO PARA TENER ENTRETENIDO AL CLIENTE)*/
    $("#messages").append($("<li>").text("Enviando " + nombre + " de " + tam + " bytes: " + porcentaje + "%")); 
  })

  //Envia link de descarga a otros clientes una vez finalizada la subida
  uploader.addEventListener("complete", function(e){
    console.log(e.success);

    if(e.succes != 1){
      var nombre = e.file.name;
      var tam = e.file.size;
      /* --------------- AQUI HAY QUE APLICAR CSS*/
      var msjFile = '<li>' + nickname + ': ' + '<a href="' + rootPath + 'uploads/' + nombre + '" download>' + nombre + '. ' + tam + ' bytes</a></li>';
      
      socket.emit("chat file", msjFile);
      $("#messages").append($(msjFile)); 
    }
  })
});