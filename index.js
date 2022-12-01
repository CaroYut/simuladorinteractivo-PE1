//1) Generar dos variables: usuarioConEmail y contrasenia. 
//Asiganarle un valor aleatorio. A traves de tres prompts, pidale al usuario los siguientes datos
//Para el caso login
//a) Pidale al usuario que ingrese su nombre, usuario y contrasenia. Valide que el usuario y la contrasenia coincidan con los datos de las variables, estos datos tienen que ser iguales entre si.
// en el caso de que no lo sean, devuelve un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erroneo" o "Su contrasenia es erronea" 
//b) Luego de que el usuario se loguee exitosamente, envie una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea. 
//c) Valide con un bucle que el usurio tenga un arroba, en el caso que no la contenga, envie un prompt con el siguiente mensaje: "Ingrese nuevo email".

const usuarioConEmail = "jorge@email.com"
const contrasenia = "jorge123"

let nombre = prompt("Ingrese su nombre")
let usuario = prompt("Ingrese su usuario")
let contraDelUsuario = prompt("Ingrese su contrasenia")

if  (usuario == contraDelUsuario) {
   alert ("Bienvenido ${nombre}")
}
else {
 alert ("Su usuario o contraseña es erroneo")
}

for (let i = 0; i < usuarioConEmail.length; i++) {
    if (usuarioConEmail[i] === "@") {
      break;
    }
  }
  

