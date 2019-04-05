var express = require("express");
var app = express();
var path = require("path")
var server = require("http").createServer(app);
var io = require("socket.io")(server);

//Construye el HTML del cliente
app.use(express.static("public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/public/login.html");
});

app.get('/chatGlobal', function(req, res){
  res.sendFile(__dirname + "/public/chatPublico.html");
});

app.get('/room', function(req, res){
  res.sendFile(__dirname + "/public/room.html");
});

server.listen(3000, function(){
	console.log("Servidor iniciado en: http://localhost:3000");
});

var usersOnline = [];
var socketID = {};

function sendAllUsersOnline(io, socket){
	console.log("Enviando usuarios " + usersOnline);
	io.emit("display users", usersOnline);
}

//Escucha las peticiones de los clientes conectados
io.on("connection", function(socket){
	console.log("Cliente conectado");

	sendAllUsersOnline(io, socket);

	//Se conecta un cliente
	socket.on("user connected", function(nickname){
		socket.nickname = nickname;
		usersOnline.push(socket.nickname);
		socketID[socket.nickname] = socket.id;

		console.log(socket.nickname + " conectado. ID: " + socketID[socket.nickname]);
		socket.broadcast.emit("user connected", socket.nickname);

		sendAllUsersOnline(io, socket);
	});

	//El cliente envia un mensaje
	socket.on("chat message", function(msg){
		console.log("Msj recibido de: " + socket.nickname + ". Enviando...");
		//El servidor envia el mensaje a todos los demas
		socket.broadcast.emit("chat message", {
			nickname: socket.nickname,
			msg: msg
			});
	});

	//El cliente se desconecta
	socket.on("disconnect", function(){
		//El servidor notifica todos los demas
		console.log(socket.nickname + " desconectado");
		usersOnline.splice(usersOnline.indexOf(socket.nickname), 1);
	    socket.broadcast.emit("user disconnected", socket.nickname);
	    sendAllUsersOnline(socket);
  	});
});

