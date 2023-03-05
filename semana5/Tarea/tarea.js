// PROBLEMA 1
// Escribe una función que reciba un número y devuelva el doble de ese número.

function doble(num) {
  return (num * 2);
}
const potencia = doble(3)
console.log(potencia);

//Problema 2
//Escribe una función que reciba un número y devuelva el triple de ese número.
function doble(num) {
  return (num * 3);
}
const exponent = doble(25)
console.log(exponent);

//Problema 3
//Escribe una función que reciba un número y devuelva el cuadrado de ese número.
function elevar(num, exponente) {
  return Math.pow(num, 2)
}
const cuadrado = elevar(16)
console.log(cuadrado)
//Problema 4
//Escribe una función que reciba un número y devuelva el cubo de ese número.
function elevar(num, exponente) {
  return Math.pow(num, 3)
}
const cubo = elevar(2)
console.log(cubo)
//Problema 5
//Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:

const numero1 = 5;
const numero2 = 8;

if (numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
  console.log("numero2 es positivo");
}
if (numero1 < 0 || numero1 !== 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if (numero1 >= numero2 / numero1 + 1) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//Problema 6
//Escribe una función que reciba un número y devuelva el doble de ese número si es par o el triple de ese número si es impar.
function problema6(num) {
  if (num % 2 == 0) { return (num * 2) };
  if (num % 3 == 0) { return (num * 3) };
}
const result = problema6(22)
console.log(result)

//Problema 7 -----------------------------------------------------------------------------------------------
//Escribir una funcion que calcule el factorial de un número entero n es una operación matemática que consiste
// en multiplicar todos los factores.
function factores(num) {
  const total = 1;
  for (var i = num; i > 0; --1) {
    return (total * i);
  }
}
const igual = factores(3)
console.log(igual)

//Problema 8
//Escribir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir,
//  si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplos de palíndromos:
// La ruta nos aporto otro paso natural
// Sé ver las al revés
// Anita lava la tina
// Dabale arroz a la zorra el abad
// nota: Las tildes y los espacios no deben ser tenidos en cuenta.
function invertircadena(frase) {
  const resultado = "";
  for (let i = frase.lenght - 1; i > 0; --1) {
    resultado += texto[i];
  }
  return resultado
}
console.log(invertircadena("Anita lava la tina"));