let items = [];

const formulario = document.getElementById("Formulario");
const input = document.getElementById("input-texto");
const lista = document.getElementById("Lista");

const mostrarLista =() => {
    lista.innerHTML = items
    .map((item) =>
<div class="tarjeta"> ${item} </div>)
.join ("");
}

formulario.addEventListener("submit", (e) => { 
e.preventDefault()
const texto =input.value.trim();
if(texto=== "") return;
items.push(texto) 
input.value = "";
mostrarLista ();
})