let Invitados = [];

const formulario = document.getElementById("Formulario");
const input = document.getElementById("input-texto");
const lista = document.getElementById("Lista de Invitados");

const mostrarLista =() => {
    lista.innerHTML = Invitados.map((item) =>
<div class="tarjeta"> ${Invitados} </div>).join;
}

formulario.addEventListener("submit", (e) => { 
e.preventDefault()
const texto =input.value.trim();
if(texto=== "") return;
Invitados.push(texto) 
input.value = "";
mostrarLista ();
})

