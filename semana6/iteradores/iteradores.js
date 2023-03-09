const numbers = [1, 10, 12, 30, 21, 32, 94];

/**
 * Cuando usar forEach?
 * Cuando necesitamos iterar sobre un array y no necesitamos retornar un nuevo array
 */
numbers.forEach(function (number, index) {
  if (number > 20) {
    console.log("Es mayor a 20", number, index);
  } else {
    console.log("Es menor a 20", number, index);
  }
});

// map
const powNumbers = numbers.map(function (number) {
  return { number: number ** 2 };
});

console.log("powNumbers");
console.log(powNumbers);
console.log(numbers);
console.log("Usando arrow function");

numbers.forEach((number, index) => {
  console.log(`${index}) ${number}`);
});

const powNumbersArrow = numbers.map((number) => {
  return { number: number ** 3 };
});

console.log(powNumbersArrow);

const powNumbersArrowInline = numbers.map((number) => number * 2);
console.log(powNumbersArrowInline);

const products = [
    {
      id: 1,
      name: "TV 75 pulgadas",
      category: ["Tech"],
      price: 3500.34,
      stock: 20,
    },
    {
      id: 2,
      name: "Cama king",
      category: ["Hogar"],
      price: 500.99,
      stock: 200,
    },
    {
      id: 3,
      name: "iPhone 14 pro",
      category: ["Tech"],
      price: 5600,
      stock: 10,
    },
    {
      id: 4,
      name: "microondas",
      category: ["Tech", "Hogar"],
      price: 500,
      stock: 120,
    },
    {
      id: 5,
      name: "iPhone 11",
      category: ["Tech", "Hogar"],
      price: 500,
      stock: 0,
    },
  ];

 // filtro para tener los productos que cuesta mas de 1000
const filterPrice = products.filter((product) => product.price > 1000);
console.log("Filter");
console.log(filterPrice);

// category: Tech
const filterCategory = products.filter((product) =>
  product.category.includes("Tech")
);

console.log("filter category", filterCategory);

const filtro = products.filter((product) =>
  product.category
    .join("-") // "Tech-Hogar"
    .toLowerCase() // "tech-hogar"
    .split("-") // ["tech", "hogar"]
    .includes("TECH".toLowerCase())
);
  
  console.log("Buscando solo 1 elemento");
  console.log(search);

  // findIndex buscar solo un elemento pero lo que retorna es el indice(posicion)

const searchIndex = products.findIndex((product) => product.price > 1000);

/**
 * 
const searchIndex = products.findIndex(function (product) {
  return product.price > 1000;
});

 */
console.log("searchIndex", searchIndex);

//for //soporta return
//for of //soporta return
//for in //soporta return
//forEach //no soporta return
//map // return [array]
//filter // return [array]
//find  //return element
//findIndex //return number

//quiero hacer una busqueda, no es exacta ejemplo escribo iphone

const searchIphone = products.filter((products) =>
product.name.toLowerCase().includes("iphone".toLowerCase()));
console.log ("searchIphone", searchIphone);

//every => todo &&
//some => alguno ||
//ambos retornan true o false
const hasStock =products.every((products) => product.stock > 0);
console.log(hasStock);

const hasZeroStock = products.some((product) => product.stock === 0);
console.log(hasZeroStock);