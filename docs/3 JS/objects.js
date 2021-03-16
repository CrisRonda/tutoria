const data = {
  name: "Cristian Ronda",
  year: 1994,
  city: "Quito",
  country: "Ecuador",
  children: [
    {
      id: 1,
      name: "Hijo 1",
      year: 2011,
      city: "Gyq",
    },
    {
      id: 2,
      name: "Hijo 2",
      year: 2016,
      city: "Gyq",
    },
  ],
  obj1: {
    test: "test1",
    "vecino dos": ["Carlos", "Maria"],
  },
  age: function () {
    console.log(this.year);
    return new Date().getFullYear() - this.year;
  },
};

// const vegatales = {
//   rojos: ["Tomates", "Tomate de arbol"],
//   verdes: ["Aguacate", "Pera"],
//   otros: ["Pina", "asd"],
// };
// const value = "otros";
// console.log(data.obj1.test);
// console.log(data.obj1["vecino dos"]);
// console.log(vegatales[value]);

// keys
// const keys = Object.keys(data);
// console.log(keys);

// // values
// const values = Object.values(data);
// console.log(values[0]);
// data = { nuevoNombre: "Hola!" };
console.log("anterior: ", data);

data.name = "Cambie de nombre a pesar de ser const";
console.log("modificar: ", data);
delete data;
console.log("eliminado: ", data);
