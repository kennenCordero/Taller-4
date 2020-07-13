
var tabla = [
{nombre: "kennen",apellido: "cordero",usuario: "kenne",correo:"ken@uam.com",contraseña:1234,validador:1},
{nombre: "alonso",apellido: "cordero",usuario: "kenne",correo:"ken@uam.com",contraseña:124,validador:3}
];


window.onload = cargarEventos;

function cargarEventos(){
document.getElementById("mostrar-tabla").addEventListener("click",mostrarTabla,false);
document.getElementById("nuevoJugador").addEventListener("submit",nuevoEquipo,false);
}

function mostrarTabla(){
    alert("hola");
   var cuerpoTabla = document.getElementById("jugadorestabla");
   var tablallena = "";
   for(var i =0; i < tabla.lengt;i++ ){
    tablallena += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].apellido + "</td><td>" +  tabla[i].usuario + "</td><td>" + tabla[i].correo + "</td><td>" + tabla[i].contraseña + "</td><td>" + tabla[i].validador + "</td></tr>";
   }

   tabla += "</tbody>"
   tabla += "</table>";
   cuerpoTabla.innerHTML = tablallena;
}

function nuevoEquipo(event){
   event.preventDefault();
   var equipoIntroducidoPOrUsuario = document.getElementById("Nombre").value; 
   var nombreIntroducidoPOrUsuario = document.getElementById("Apelloido").value;
   var usuarioIntroducidoPOrUsuario = document.getElementById("Usuario").value;
   var correoIntroducidoPOrUsuario = document.getElementById("Correo").value;
   var contraseñaIntroducidoPOrUsuario = document.getElementById("Contraseña").value;
   var validadorIntroducidoPOrUsuario = document.getElementById("Validador").value;
   tabla.push(nuevoEquipo);
   alert("se añido correctamente")
}