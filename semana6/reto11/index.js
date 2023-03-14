const boton = document.querySelector(".buscar")
const textbuscador = document.querySelector("input")
const imagen = document.querySelector("img")
const nombre = document.querySelector("span")
const contenedor = document.querySelector(".contenedor")
const form = document.querySelector("form")

const pokemones=[];
form.onsubmit = function(event){
    event.preventDefault();
pokemones.push({
    name:textbuscador.value
});  
textbuscador.value="";
}

async function getpokemos(){
    const respuesta = await fetch ("https://pokeapi.co/api/v2/pokemon/")
    const datos = await respuesta.json();

    renderPokemons(datos.results)

    imagen.textContent= URL.tofixed()
    span.textcontent= .tofixed()
}

