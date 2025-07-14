//Esto es para dar la bienvenida a alguien

// let usuario = ""
// usuario = prompt("cual es tu usuario?")
// alert("Bienvenides " + usuario)


//piedra papel o tijera con muchos if

// let jugador = 0
// let pc = 2
// jugador = prompt("Elige 1 para piedra, 2 para papel o 3 para tijera")

// if(jugador == 1){
//     alert("elegiste piedra")
// }
// if(jugador == 2){ 
//     alert("elegiste papel")
// }
// if(jugador == 3){ 
//     alert("elegiste tijera")
// }

//piedra papel o tijera ejecutandolos en cascada

let jugador = 0
let pc = 2
jugador = prompt("Elige 1 para piedra, 2 para papel o 3 para tijera")

if(jugador == 1){
    alert("elegiste piedra")
} else if(jugador == 2){ 
    alert("elegiste papel")
} else if(jugador ==3){ 
    alert("elegiste tijera")
} else {
    alert("elegiste PERDER")
}
