function suma({ valor1 = 33, valor2 = 12 }) {
  return valor1 + valor2;
}

function enviarDatos({ edad, nombre, año }) {
  ///
}
function multiplicacion(valor1, valor2) {
  return valor1 * valor2;
}

function arraySum(numbers = []) {
  let total = 0;
  numbers.forEach((item) => {
    total += item;
  });
  return total;
}

function reduceSum(numbers = []) {
  return numbers.reduce((acum, curr) => curr + acum, 0);
}
// const _sume = suma({ valor1: 11, valor2: 43 });
// console.log(11 - "1");

// const a = suma({});
// const b = multiplicacion(2, 3);
// const mulsum = arraySum([1, 2, 3, 4, 5, 6, 7]);
// const newsum = reduceSum([2, 3, 1, 2, 3, 1, 1]);
// console.log(newsum);
// console.log(a, b, mulsum, newsum);
