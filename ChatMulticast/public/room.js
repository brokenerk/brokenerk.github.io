$(function () {
  var socket = io();

  //Para obtener el nickname desde GET
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  var from = getParameterByName("from");
  var to = getParameterByName("to");

  $("#users").append($('<li id="' + from + '"><button>' + from + '</button></li>'));
  $("#users").append($('<li id="' + to + '"><button>' + to + '</button></li>'));

  socket.emit("start private chat", to);
       
});