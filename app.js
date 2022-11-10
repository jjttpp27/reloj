
//VARIABLES QUE NECESITAMOS
var currentTime = new Date();
var year = currentTime.getFullYear();
var month = currentTime.getMonth();
var day = currentTime.getDay();

var hour = currentTime.getHours();
if (hour < 10) {
    hour = `0${hour}`
}
var minutes = currentTime.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`
}
var seconds = currentTime.getSeconds();
if (seconds < 10) {
    seconds = `0${seconds}`
}


//EJERCICIO 3 ---->  PARTE DEL RELOJ
setInterval(() => {
    var reloj = document.querySelector(".reloj");
    var currentTime = new Date();

    var hour = currentTime.getHours();
    if (hour < 10) {
        hour = `0${hour}`
    }
    var minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    var seconds = currentTime.getSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    reloj.innerHTML = `${hour}:${minutes}:${seconds}`;

}, 1000);
//TERMINA PARTE DEL RELOJ


//EJERCICIO 1 PARTE DEL SALUDO
var saludo = document.querySelector(".saludo");

if (hour >= 6 && hour < 12) {
    saludo.innerHTML = "Buenos días";
}
else if (hour > 12 && hour < 20) {
    saludo.innerHTML = "Buenas tardes";
} else {
    saludo.innerHTML = "Buenas noches";
}
//TERMINA PARTE DEL SALUDO

//EJERCICIO 2 PARTE DEL STRING EN FECHA
const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
];
var dayName = dias[day]

let mesName = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date());


var fecha = document.querySelector(".fecha");
fecha.innerHTML = `Hoy es ${dayName}, ${day} de ${mesName} de ${year} y son las ${hour}:${minutes}`

//TERMINA PARTE DE FECHA