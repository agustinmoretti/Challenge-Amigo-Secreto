// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo(amigos) {
    let nombreIngresado = document.getElementById('amigo').value;
    limpiarCaja();

    if(nombreIngresado != ''){
        amigos.push(nombreIngresado);
    } else {
        alert("Por favor, inserte un nombre.");
    }
    
    actualizarListaAmigos(amigos);
}

function actualizarListaAmigos(amigos) {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        let li = document.createElement("li");
        li.textContent = amigos[i];
        
        // Agregar el elemento
        lista.appendChild(li);
    }
}

function sortearAmigo(amigos) {
    
    if(amigos.length == 0){
        alert("La lista esta vacia. Por favor, inserte un nombre.");
    } else {
        let amigoSecreto = Math.floor(Math.random() * amigos.length) + 1;

        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo sorteado es: <strong>${amigos[amigoSecreto]}</strong>`;

    }

}