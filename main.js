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
function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let jugador = 0
let pc = aleatorio (1,3)

jugador = prompt("Elige 1 para piedra, 2 para papel o 3 para tijera")

if(jugador == 1){
    alert("elegiste piedra")
} else if(jugador == 2){
    alert("elegiste papel")
} else if(jugador == 3){
    alert("elegiste tijera")
} else {
    alert("elegiste PERDER")
}
if(pc == 1){
    alert("PC elige piedra")
} else if(pc == 2){
    alert("PC elige papel")
} else if(pc == 3){
    alert("PC elige tijera")
}

//combate
if(pc == jugador) {
    alert("empate")
} else if(jugador == 1 && pc == 3){
    alert("ganaste")
} else if(jugador == 2 && pc == 1){
    alert("ganaste")
} else if(jugador == 3 && pc == 2){
    alert("ganaste")
} else {
    alert("perdiste")
}

//declaracion de numero aleatorio
//Math.floor(Math.random() * (max - min + 1) + min)