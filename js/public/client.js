// Comunicación en tiempo real
var url = "http://fb236e73.ngrok.io";
var local = "http://localhost:3000";
var socket = io.connect(url);

window.addEventListener('devicemotion', function(event) {
    $("li.info__aceleracion span").text("X: " + event.acceleration.x * 100 + " -- Y: " + event.acceleration.y * 100 + " -- Z: "
        + event.acceleration.z * 100);
    var aceleracion = {
        z: event.acceleration.z,
        x: event.acceleration.x,
        y: event.acceleration.y
    };
    socket.emit("movimiento", {
        acelerometro: aceleracion
    });
});

socket.on("movimiento", function (datos) {
    console.log(datos);
});

window.addEventListener('deviceorientation', function (event) {
    $("li.info__orientacion span").text("X: " + event.beta + " -- Y: " + event.gamma + " -- Z: "
        + event.alpha);
    var orientacion = {
        z: event.alpha,
        x: event.beta,
        y: event.gamma
    };
    socket.emit("movimiento", {
        giroscopio: orientacion
    });
});