var express = require('express');
var app = express();
var path = require('path')
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Construye el HTML del cliente
app.use(express.static('public'));
app.get('/', function(req, res){
	res.sendFile('index.html');
});

//Escucha las peticiones de los clientes conectados
io.on('connection', function(socket){
	//El cliente envia un mensaje
	socket.on('chat message', function(msg){
		//El servidor envia el mensaje a todos los demas
		socket.broadcast.emit('chat message', msg);
	});
	//El cliente se desconecta
	socket.on('disconnect', function(){
		//El servidor notifica todos los demas
	    socket.broadcast.emit('chat message', 'user disconnected');
  	});
});

http.listen(3000, function(){
	console.log('Servidor iniciado en: http://localhost:3000');
});