var express = require("express");
var app = express();
var path = require("path")
var server = require("http").createServer(app);
var io = require("socket.io")(server);

//Construye el HTML del cliente
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get('/chatGlobal', (req, res) => {
  res.sendFile(__dirname + "/public/chatGlobal.html");
});

server.listen(3000, function(){
	console.log("Servidor iniciado en: http://localhost:3000");
});

var numUsers = 0;
var usersOnline = [];

function sendAllUsersOnline(socket){
	socket.broadcast.emit("display users", usersOnline);
}

//Escucha las peticiones de los clientes conectados
io.on("connection", function(socket){
	//Se envian los clientes online
	sendAllUsersOnline(socket);

	//Se conecta un cliente
	socket.on("user connected", function(nickname){
		socket.nickname = nickname;
		numUsers++;
		usersOnline.push(socket.nickname);

		console.log(socket.nickname + " conectado");
		socket.broadcast.emit("user connected", {
			nickname: socket.nickname,
			numUsers: numUsers
		});

		sendAllUsersOnline(socket);
	})

	//El cliente envia un mensaje
	socket.on("chat message", function(msg){
		//El servidor envia el mensaje a todos los demas
		socket.broadcast.emit("chat message", {
			nickname: socket.nickname,
			msg: msg
			});
	})

	//El cliente se desconecta
	socket.on("disconnect", function(){
		//El servidor notifica todos los demas
		usersOnline.splice($.inArray(socket.nickname, usersOnline), 1);
	    socket.broadcast.emit("user disconnected", socket.nickname);
  	})
});

