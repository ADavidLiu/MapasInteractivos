// SERVIDOR
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// COMUNICACIÓN EN TIEMPO REAL
io.on("connect", function (socket) {
    console.log("Avión conectado!");
    socket.on("movimiento", function (datos) {
        console.log(datos);
        socket.broadcast.emit("movimiento", datos);
    });
});