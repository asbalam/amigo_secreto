// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre) {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = "";
        input.focus();
        limpiarSorteado();  
    } else {
        alert("Por favor, escribe un nombre.");
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        let li = document.createElement("li");
        li.textContent = amigos[index];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Añade al menos un nombre antes de sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    
    amigos = [];
    actualizarListaAmigos();
}

function limpiarSorteado() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}