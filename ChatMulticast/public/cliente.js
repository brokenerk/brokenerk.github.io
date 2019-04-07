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

  var privado = getParameterByName("private");
  var nickname = getParameterByName("nickname");

  if(privado == 0){
    chatPublico(socket, rootPath, nickname);
  }
  else{
    room();
  }

  
});