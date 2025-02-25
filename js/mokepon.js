const sectionAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-seleccion-mascota")
const botonReinicio = document.getElementById("boton-reiniciar")
const sectionMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesJugador = document.getElementById("ataques-jugador")
const ataquesEnemigo = document.getElementById("ataques-enemigo")
const contenedorMokepones = document.getElementById("contenedor-mokepones")
const contenedorAtaques = document.getElementById("contenedor-ataques")

const spanVidaJugador = document.getElementById("vida-jugador")
const spanVidaEnemigo = document.getElementById("vida-enemigo")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let opcionDeMokepones
let mascotaJugador
let ataquesMokepon
let botonFuego 
let botonAgua
let botonTierra 
let vidaJugador = 3
let vidaEnemigo =3

class Mokepon {
    constructor(nombre, imagen, vida) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/Hipodoge.jpeg.png", 3)
let capipepo = new Mokepon("Capipepo", "./assets/Capipepo.jpeg.png", 3)
let ratigueya = new Mokepon("Ratigueya", "./assets/Ratigueya.jpeg.png", 3)

hipodoge.ataques.push(
    {nombre: "Agua 💧", id: "boton-agua"}, 
    {nombre: "Agua 💧", id: "boton-agua"},
    {nombre: "Agua 💧", id: "boton-agua"},
    {nombre: "Fuego 🔥", id: "boton-fuego"},
    {nombre: "Tierra 🧱", id: "boton-tierra"}
)
capipepo.ataques.push(
    {nombre: "Fuego 🔥", id: "boton-fuego"},
    {nombre: "Fuego 🔥", id: "boton-fuego"},
    {nombre: "Fuego 🔥", id: "boton-fuego"},
    {nombre: "Agua 💧", id: "boton-agua"},
    {nombre: "Tierra 🧱", id: "boton-tierra"}
)
ratigueya.ataques.push(
    {nombre: "Tierra 🧱", id: "boton-tierra"},
    {nombre: "Tierra 🧱", id: "boton-tierra"},
    {nombre: "Tierra 🧱", id: "boton-tierra"},
    {nombre: "Agua 💧", id: "boton-agua"},
    {nombre: "Fuego 🔥", id:"boton-fuego"}
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarjuego() {

    sectionAtaque.style.display = "none"
    
    sectionReiniciar.style.display = "none"

    mokepones.forEach((mokepones) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepones.nombre} />
        <label class="tarjetas-mokepon" for=${mokepones.nombre}>
            <p>${mokepones.nombre}</p>
            <img src="${mokepones.imagen}" alt="${mokepones.nombre}">
        </label>
        `
        contenedorMokepones.innerHTML += opcionDeMokepones 

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
    })
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    botonReinicio.addEventListener("click", reiniciarJuego)
}
function seleccionarMascotaJugador() {
    sectionMascota.style.display = "none"

    sectionAtaque.style.display = "flex"


    if (inputHipodoge.checked) {        
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert("No elegiste nada. Vuleve a intentarlo")
        reiniciarJuego()
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataque
    
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataque = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataque)
}

function mostrarAtaques(ataque) {
    ataque.forEach((ataques) => {
       ataquesMokepon = `
       <button id=${ataques.id} class="boton-ataque" >${ataques.nombre}</button>`
       
       contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")

    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
}

function seleccionarMascotaEnemigo() {
    let enemigoAleatorio = aletorio(0, mokepones.length -1)
 
    spanMascotaEnemigo.innerHTML = mokepones[enemigoAleatorio].nombre
}
//Ataque de Jugador 
function ataqueFuego() {
    ataqueJugador = "Fuego"
    ataqueAletorioEnemigo(3)
}
function ataqueAgua() {
    ataqueJugador = "Agua"
    ataqueAletorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "Tierra"
    ataqueAletorioEnemigo()
}
//Ataque de la maquina
function ataqueAletorioEnemigo() {
    let ataqueAleatorio = aletorio(1, 3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else {
        ataqueEnemigo = "Tierra"
    }
    combate()
}
//Ganar, perder o empatar
function combate() {

    if((ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") || (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") || (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua")) {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else if((ataqueJugador == "Fuego" && ataqueEnemigo == "Agua") || (ataqueJugador == "Agua" && ataqueEnemigo == "Tierra") || (ataqueJugador == "Tierra" && ataqueEnemigo == "Fuego")) {
        crearMensaje("PERDISTE")
        vidaJugador--
        spanVidaJugador.innerHTML = vidaJugador
    } else {
        crearMensaje("EMPATASTE")
    }

    revisarVidas()
}
//Revisar Vidas
function revisarVidas() {
    if(vidaJugador == 0) {
        crearMensajeFinal("Perdiste. Vuelve a intentarlo en la proxima")
    } else if(vidaEnemigo == 0) {
        crearMensajeFinal("Felicitaciones, GANASTE")
    }
}
//Mensaje
function crearMensaje(resultados) { 
    let nuevoAtaqueJugador = document.createElement("p") 
    let nuevoAtaqueEnemigo = document.createElement("p")    

    sectionMensajes.innerHTML = resultados
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}
//Mensaje Final
function crearMensajeFinal(resultadoFinal) { 
    sectionReiniciar.style.display = "block"
    
    
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}
//Reinicio
function reiniciarJuego() {
    location.reload()
}

function aletorio(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}
window.addEventListener("load", iniciarjuego)
