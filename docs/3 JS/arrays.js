const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];
const arrayString = ["perro", "gato", "ave", "dave", "Ave jaramillo"];

// ***********************************************************************************************
// map
const newArray = arrayNumbers
  .map((item) => (item % 2 == 0 ? item : null))
  .filter(Boolean);
// console.log("newArray", newArray);

// ***********************************************************************************************
// foreach
const newArray1 = arrayNumbers.forEach((item) => item);
// console.log("newArray1", newArray1);

// ***********************************************************************************************
// filter
const filtered = arrayString.filter((item) => item.toLowerCase().match(/ave/));
// console.log("filtered", filtered);

// ***********************************************************************************************

// // find & filter
// const filterPairNumbers = arrayNumbers.filter((item) => item % 2 === 0);
const pairNumbers = arrayNumbers.find((item) => item % 2 === 0);

// console.log("pairNumbers", pairNumbers);
// console.log("filterPairNumbers", filterPairNumbers);

// ***********************************************************************************************

// // Join in array
const joinArray = arrayNumbers.join(", ");
// console.log("joinArray", joinArray);

// ***********************************************************************************************
// // POP Mutate array
const lastValue = arrayNumbers.pop();
// console.log("lastValue", lastValue, arrayNumbers);

// ***********************************************************************************************

// // unshift --> agrega al inicio || devuelve el valor que agregamos
// // shift --> remueve el primero || devuelve la longitud del array
const as = arrayString.unshift("primero");
// console.log(arrayString);
const as1 = arrayString.shift();
// console.log(arrayString);
// ***********************************************************************************************
// REDUCER
const stringsJoin = arrayString.reduce(
  (acum, curr) => acum.concat(` ${curr},`),
  ""
);
// console.log(stringsJoin);
const objJoin = arrayString.reduce(
  (acum, curr) => ({ ...acum, [curr]: { value: curr } }),
  ""
);
// console.log(objJoin);
// ***********************************************************************************************
