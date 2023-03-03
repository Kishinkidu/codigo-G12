const celular = {
    marca: "apple",
    precio: "1220",
    rating: "4.4",
};

const persona = {
    nombre:"Juan",
    apellido: "Perez",
    edad:28,
    altura: 1.78,
    peso: 76.4,
    hobby: ["futbol", "natacion", "bicicleta"],
    esMayorDeEdad: true,
};

console.log(persona["edad"]);
console.log(persona.edad);
console.log(persona.nombre, persona.apellido);

persona["dni2"]= "1111111";
persona.dni =  "888888888";

console.log(persona);
for(let hobby of persona.hobby){
    console.log(hobby); 
}
const carros = [
    {
        marca :"bmw",
        modelo :"ms",
        precio: 200000,
        anio: 2023,
        color :"rojo",
    },
    {
        marca :"mercedez",
        modelo:"gla 2",
        precio:1450000,
        anio: 2022,
        color: "azul",
    },
];

console.log("-------ITERANDO UN ARRAY DE OBJETOS -----")

for (let carro of carros){
    console.log("marca, carro.marca");
}
const phone = {
    marca: "apple",
    precio: 1200,
    rating: 4.4,
    oferta: 1000,
  };
  
//   // destructuracion sirve para poder extraer alguna propiedad
  const {
    marca: nombreDeMarca,
    precio: precioFinal,
    rating: puntuacion,
    oferta,
  } = phone;
  console.log("marca", nombreDeMarca);