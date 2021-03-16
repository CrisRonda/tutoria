const nombre = "Strings";
const enteros = 123;
const nuemflotante = 123.123;
const numedoubles = 12.1237123712371263721637216732617;
const obj = { string: "as ", niu: 122 };
const arr = [1, 2, 3, 4, 5, 6];
const bol = false;

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];
const arrayString = ["Luis", "Carlos", "MARIA", "JUANITO", "Ave jaramillo"];

// ***********************************************************************************************
// map
// arrayString.map((item, i) => console.log(i, item));
const newArray = arrayNumbers
  .map((item) => (item % 2 === 0 ? item : null))
  .filter(Boolean);
// console.log("newArray", newArray, arrayNumbers);

// ***********************************************************************************************
// foreach
// const newArray1 = arrayString.forEach((item, index) =>
//   console.log(index, item)
// );
// console.log("newArray1", newArray1);

// ***********************************************************************************************
// filter
// const _newArray = arrayNumbers.filter((item) => item % 2 === 0);
// console.log(_newArray);
const filtered = arrayString.filter((item) => item.toLowerCase().match(/ave/));
// console.log("filtered", filtered);

// ***********************************************************************************************

// // find & filter
// const filterPairNumbers = arrayNumbers.filter((item) => item % 2 === 0);
const pairNumbers = arrayNumbers.find((item) => item % 2 === 0);
const filteredString = arrayString.find((item) =>
  item.toLowerCase().match(/ave/)
);
// console.log("find", filteredString);
// console.log("pairNumbers", pairNumbers);
// console.log("filterPairNumbers", filterPairNumbers);

// ***********************************************************************************************

// // Join in array
// let mesj = "";
// for (let index = 0; index < arrayString.length; index++) {
//   mesj = mesj + arrayString[index] + ", ";
// }
// console.log(mesj);
const joinArray = arrayString.join(", ");
// console.log("joinArray", joinArray);

// ***********************************************************************************************
// // POP Mutate array
// console.log("antes", arrayNumbers);
const lastValue = arrayNumbers.pop();
// console.log("lastValue", lastValue, arrayNumbers);

// ***********************************************************************************************

// // unshift --> agrega al inicio || devuelve el valor que agregamos
// // shift --> remueve el primero || devuelve la longitud del array
// console.log("antes", arrayString);
const longitudDelNuevoArray = arrayString.unshift("primero");
// console.log("Devuelve", longitudDelNuevoArray, arrayString);
const elementoQuitado = arrayString.shift();
// console.log("Final", elementoQuitado, arrayString);
// ***********************************************************************************************
// REDUCER
const stringsJoin = arrayString.reduce((acum, curr) => {
  return acum.concat(` ${curr},`);
}, "");

// console.log(stringsJoin);
const objJoin = arrayString.reduce((acum, curr, index) => {
  // console.log(acum, curr);
  return { ...acum, [index]: { name: curr, id: index } };
}, {});
const sumaJoin = arrayNumbers.reduce((acum, curr) => {
  // console.log(acum, curr);
  return (acum += curr);
}, 0);
// console.log(sumaJoin);

// ***********************************************************************************************
