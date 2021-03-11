function suma({ valor1, valor2 }) {
  return valor1 + valor2;
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

const a = suma({ valor1: 12, valor2: 12 });
const b = multiplicacion(2, 3);
const mulsum = arraySum([1, 2, 3, 4, 5, 6, 7]);
const newsum = reduceSum([1, 1, 1, 1, 1, 1, 1]);

// console.log(a, b, mulsum, newsum);
