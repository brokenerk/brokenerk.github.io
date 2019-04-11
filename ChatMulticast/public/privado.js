/************************************************************************/
/*                            EMOJIS                                   */
/**********************************************************************/
  let emojis = ['0x1F600', '0x1F603', '0x1F604', '0x1F601', '0x1F606', '0x1F605', '0x1F923', '0x1F602',
                '0x1F642', '0x1F643', '0x1F609', '0x1F60A', '0x1F607', '0x1F60D', '0x1F929', '0x1F618',
                '0x1F617', '0x1F61A', '0x1F619', '0x1F60B', '0x1F61B', '0x1F61C', '0x1F92A', '0x1F610',
                '0x1F61D', '0x1F911', '0x1F917', '0x1F92D', '0x1F92B', '0x1F914', '0x1F910', '0x1F928',
                '0x1F611', '0x1F636', '0x1F60F', '0x1F612', '0x1F644', '0x1F62C', '0x1F925', '0x1F60C',
                '0x1F614', '0x1F62A', '0x1F924', '0x1F634', '0x1F637', '0x1F912', '0x1F915', '0x1F922',
                '0x1F92E', '0x1F927', '0x1F635', '0x1F92F', '0x1F920', '0x1F60E',
      '0x1F913',
      '0x1F9D0',
      '0x2639',
      '0x1F62E',
      '0x1F632',
      '0x1F633',
      '0x1F626',
      '0x1F627',
      '0x1F628',
      '0x1F630',
      '0x1F625',
      '0x1F622',
      '0x1F62D',
      '0x1F631',
      '0x1F616',
      '0x1F623',
      '0x1F61E',
      '0x1F613',
      '0x1F629',
      '0x1F62B',
      '0x1F624',
      '0x1F621',
      '0x1F620',
      '0x1F92C',
      '0x1F608',
      '0x1F47F',
      '0x1F480',
      '0x2620',
      '0x1F4A9',
      '0x1F47D',
      '0x1F648',
      '0x1F649',
      '0x1F64A',
      '0x1F496',
      '0x1F497',
      '0x1F493',
      '0x1F49E',
      '0x1F495',
      '0x1F494',
      '0x2764',
      '0x1F49B',
      '0x1F49A',
      '0x1F499',
      '0x1F4AF',
      '0x1F44C'];

function ajustarScroll() {
  $("#messages-private")[0].scrollTop = $("#messages-private")[0].scrollHeight;
}

/************************************************************************/
/*                 CARGAR EMOJIS-PRIVADOS                              */
/**********************************************************************/
function cargarEmojisPrivados() {
  for(let i = 0; i < emojis.length; i++) {
    $("#emojis-privado").append($('<li class ="emojis-privado" id="'+ i + '"onclick="ponerEmojiPrivado(this)">').text(String.fromCodePoint(emojis[i])));
    $("#emojis-privado").append($("</li>"));
  }
}

/************************************************************************/
/*                  PONER EMOJIS-PRIVADOS                              */
/**********************************************************************/
function ponerEmojiPrivado(element) {
  var msj = $("#m-private").val();
  var i = $(element).attr("id");
  // Concatena el mensaje actual mas el emoji
  var mensaje = msj + String.fromCodePoint(emojis[i]);
  $("#m-private").val(mensaje);
}

function privado(socket, rootPath, from, to, uploader) {
  socket.emit("private IDs", from);
   $("#users li").remove();
  $("#users-private").append($('<li class="titleOnline"><i id="activo" class="fab fa-get-pocket" style="font-size:26px;color:#52de7a"></i> Usuarios en linea <i id="activo" class="fab fa-get-pocket" style="font-size:26px;color:#52de7a"></i></li>'));
  $("#users-private").append($('</li>'));  
  $("#users-private").append($('<li id="'+ from +'" class="users"><i class="fas fa-chevron-circle-right" style="font-size:26px;color:#52de7a"></i><button class="btn-users">' + from + '</button></li>'));
  $("#users-private").append($('<li id="'+ to +'" class="users"><i class="fas fa-chevron-circle-right" style="font-size:26px;color:#52de7a"></i><button class="btn-users">' + to + '</button></li>'));
  $("#messages-private").append($("<li>").text(from + " bienvenido a la sala privada")); 
  $("#messages-private").append($("<li>").text(to + " se ha unido a la sala privada")); 
  ajustarScroll()
  
  cargarEmojisPrivados();
  // Envia mensajes
  $("#enviarMensaje-private").click(function(e){
    e.preventDefault();
    var msj = $("#m-private").val();

    if(msj != "") {
      socket.emit("private chat message", {
        to: to,
        msg: msj
      });

      $("#messages-private").append($("<li>").text(from + ": " + msj));
      $("#m-private").val("");
      ajustarScroll()
    }
  });


  //Envia mensajes al presionar Enter
  $(window).keydown(function(e) {
    if (e.which === 13) {
      e.preventDefault();
      var msj = $("#m-private").val();

      if(msj != "") {
        socket.emit("private chat message", {
          to: to,
          msg: msj
        });

        $("#messages-private").append($("<li>").text(from + ": " + msj));
        $("#m-private").val("");
        ajustarScroll()
      }
    }
  });

  // Recibe del servidor los mensajes de otros clientes
  socket.on("private chat message", function(data) {
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

    if(e.succes != 1) {
      var nombre = e.file.name;
      var tam = e.file.size;

      let aux = "";
      for(let i = 0; i < nombre.length; i++) {
        let charNombre = nombre.charAt(i);
        if(charNombre == ".") {
          for(let j = i; j < nombre.length; j++) {
            charNombre = nombre.charAt(j);
            aux = aux + charNombre; 
          }
          break;
        }
      }
      console.log("extension: " + aux);
      if(aux === ".PNG" || aux == ".jpg" || aux == ".png" || aux == ".jpeg" || aux == ".JPEG") {
        var msjFile = '<li>' + from + ': ' + '<img class = "imagen-chat" src="' + rootPath + 'uploads/' + nombre + '"></li>';
        socket.emit("private chat file", {
          link: msjFile,
          to: to
        }); 
        $("#messages-private").append($(msjFile)); 
      }    

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
    $("#messages-private").append($("<li style=background:#52de7a;>").text(leaver + " ha abandonado la sala privada."));
    ajustarScroll()      
  });
} 