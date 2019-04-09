function ajustarScroll() {
  $("#messages-private")[0].scrollTop = $("#messages-private")[0].scrollHeight;
}

function privado(socket, rootPath, from, to, uploader) {
  socket.emit("private IDs", from);
  $("#users-private").append($('<li class="users"><button class="btn-users">' + from + '</button></li>'));
  $("#users-private").append($('<li class="users"><button class="btn-users">' + to + '</button></li>'));
  $("#messages-private").append($("<li>").text(from + " bienvenido a la sala privada")); 
  $("#messages-private").append($("<li>").text(to + " se ha unido a la sala privada")); 
  ajustarScroll()
  
  // Envia mensajes
  $("#enviarMensaje-private").click(function(e){
    e.preventDefault();
    var msj = $("#m-private").val();

    if(msj != ""){
      socket.emit("private chat message", {
        to: to,
        msg: msj
      });

      /* --------------- AQUI HAY QUE APLICAR CSS*/
      $("#messages-private").append($("<li>").text(from + ": " + msj));
      $("#m-private").val("");
      ajustarScroll()
    }
  });

  // Recibe del servidor los mensajes de otros clientes
  socket.on("private chat message", function(data){
    console.log("Msj: " + data.msg + " de: " + data.nickname);

    /* --------------- AQUI HAY QUE APLICAR CSS*/
    $("#messages-private").append($("<li>").text(data.nickname + ": " + data.msg));     
    ajustarScroll() 
  });

  // ---------------------- SUBIR ARCHIVOS
  document.getElementById('subir-private').addEventListener("click", uploader.prompt, false);

  // Muestra el progreso de subida
  uploader.addEventListener("progress", function(e) {
    var nombre = e.file.name;
    var tam = e.file.size;
    var porcentaje = parseInt(e.bytesLoaded / e.file.size * 100);
    console.log("Nombre: " + nombre);
    console.log("Tam: " + tam);
    console.log("Subiendo: " + porcentaje + "%");

    /* --------------- AQUI HAY QUE APLICAR CSS (ALERT O CUADRO DE DIALOGO PARA TENER ENTRETENIDO AL CLIENTE)*/
    $("#messages-private").append($("<li>").text("Enviando " + nombre + " de " + tam + " bytes: " + porcentaje + "%"));
    ajustarScroll() 
  });

  //Envia link de descarga a otros clientes una vez finalizada la subida
  uploader.addEventListener("complete", function(e) {
    console.log(e.success);

    if(e.succes != 1){
      var nombre = e.file.name;
      var tam = e.file.size;
      /* --------------- AQUI HAY QUE APLICAR CSS*/
      var msjFile = '<li>' + from + ': ' + '<a href="' + rootPath + 'uploads/' + nombre + '" download>' + nombre + '. ' + tam + ' bytes</a></li>';
      
      socket.emit("private chat file", {
        link: msjFile,
        to: to
      });

      $("#messages-private").append($(msjFile)); 
      ajustarScroll()
    }
  });

  // Recibe del servidor los links de descarga
  socket.on("private chat file", function(data){
    console.log("Link: " + data);

    $("#messages-private").append($(data));     
  });

  // Usuario abandona el chat privado
  socket.on("user leaves", function(leaver){
    console.log("Usuario abandono: " + leaver);

    $("#" + leaver).remove();
    $("#messages-private").append($("<li>").text(leaver + " ha abandonado la sala privada."));
    ajustarScroll()      
  });
} 