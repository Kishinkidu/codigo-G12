function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
  
    return Math.pow(num, 2)
  }
  
  const potencia = elevarAlCuadrado(8)
  console.log(potencia);
// metodo arrow   ========>  const = () => {}
  const elevarAlCuadrado = (numero) => numero **2;

  const potencia2 =elevarAlCuadrado(18);
  console.log(potencia2) ; 