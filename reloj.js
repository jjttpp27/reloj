
//PRIMERO VAMOS A DEFINIR LAS VARIABLES QUE VAMOS A NECESITAMOS
var currentTime = new Date();
var year = currentTime.getFullYear();
var month = currentTime.getMonth();
var day = currentTime.getDay();

/*En esta parte creamos un if en (horas, minutos, segundos)para que cuando el numero sea menor que 0 
tenga un cero a la izquierda como en los relojes digitales y no sea solo un digito.*/

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
//Procedemos a crear el reloj con la funcion setInterval que he puesto que se refresque cada 1 segundo

setInterval(() => {
    //Usamos el querySelector para indicar donde quiero enseñar la informacion 
    var reloj = document.querySelector("#reloj");
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
    //Finalmente enseñamos el resultado que queremos
    reloj.innerHTML = `${hour}:${minutes}:${seconds}`;

}, 1000);
//TERMINA PARTE DEL RELOJ


//EJERCICIO 1 PARTE DEL SALUDO
//Para el saludo he seleccionado un "div", donde ira el saludo y he procedido a crear una condicional.
var saludo = document.querySelector("#saludo");

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
//En este ejercicio tube que crear un array con los nombres de los dias.
const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
];
//Con esta variable seleccionara el dia y lo convertira al nombre en String
var dayName = dias[day]

//Consegui un metodo q te devolvia el nombre del mes, sino hubiese hecho otro array con los meses.
var mesName = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date());

//Finalmente el resultado final con la frase terminada.
var fecha = document.querySelector("#fecha");
fecha.innerHTML = `Hoy es ${dayName}, ${day} de ${mesName} de ${year} y son las ${hour}:${minutes}`

//TERMINA PARTE DE FECHA