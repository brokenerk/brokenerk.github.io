function abrirSalaPrivada(rootPath, from, to){
  var newRoom = window.open(rootPath + "privado/?private=1&from=" + from +"&to=" + to, "_blank");
  if (!newRoom) 
    alert('Por favor active los pop-ups del navegador');
}

function ajustarScroll(){
  $("#messages")[0].scrollTop = $("#messages")[0].scrollHeight;
}

function publico(socket, rootPath, nickname, uploader){
  var numUsers = 0;

  socket.emit("user connected", nickname);
  $("#messages").append($("<li>").text(nickname + " bienvenido al chat público.")); 
  console.log("Enviando nickname al servidor");

  //Muestra los usuarios online
  socket.on("display users", function(users){
    console.log("Recibiendo usuarios: " + users); 

    $("#users li").remove();
    numUsers = 0;

    for(var i = 0; i < users.length; i++){
      if(users[i].localeCompare(nickname) != 0){
        // --------------- AQUI HAY QUE APLICAR CSS
        numUsers++;
        $("#users").append($('<li class="users"><button class="btn-users" id="' + users[i] + '">' + users[i] + '</button></li>'));
      }
    }

    if(numUsers > 0)
      $("#messages").append($("<li>").text(numUsers + " usuarios en línea")); 
    else
      $("#messages").append($("<li>").text("No hay usuarios en linea ):")); 

    ajustarScroll();
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
      ajustarScroll();
    }
  });

 // Agrega a los usuarios cuando se conecten
  socket.on("user connected", function(newNickname){
    console.log("Usuario: " + newNickname + " conectado"); 

    $("#messages").append($("<li>").text(newNickname + " se ha conectado"));
    ajustarScroll();
  });

  //Elimina el usuario desconectado
  socket.on("user disconnected", function(nickname){
    console.log("Usuario: " + nickname + " desconectado");

    /* --------------- AQUI HAY QUE APLICAR CSS*/
    $("#messages").append($("<li>").text(nickname + " se ha desconectado"));
    $("#" + nickname).remove();

    numUsers--;   
    if(numUsers > 0)
      $("#messages").append($("<li>").text(numUsers + " usuarios en línea")); 
    else
      $("#messages").append($("<li>").text("No hay usuarios en linea ):"));  

    ajustarScroll();  
  });

  //Recibe del servidor los mensajes de otros clientes
  socket.on("chat message", function(data){
    console.log("Msj: " + data.msg + " de: " + data.nickname);

    /* --------------- AQUI HAY QUE APLICAR CSS*/
    $("#messages").append($("<li>").text(data.nickname + ": " + data.msg));
    ajustarScroll();      
  });

  //Recibe del servidor los links de descarga
  socket.on("chat file", function(data){
    console.log("Link: " + data);

    $("#messages").append($(data));   
    ajustarScroll();  
  });

  // -------------------- CHAT PRIVADO
  //Iniciar chat privado con algun usuario
  $(document).on("click", ".btn-users", function(){
    var to = $(this).attr("id");
    console.log("Enviando solicitud de chat privado a: " + to);

    var participantes = {
      from: nickname,
      to: to
    };

    socket.emit("start private", participantes);
    abrirSalaPrivada(rootPath, nickname, to);
  });

  //Se recibe una solicitud para iniciar un chat privado, se une
  socket.on("start private chat", function(room){
    console.log("Recibida solicitud para unirse al chat privado de: " + room.from);

    abrirSalaPrivada(rootPath, room.to, room.from);
  });

  
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
    ajustarScroll(); 
  });

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
      ajustarScroll();
    }
  });
} 