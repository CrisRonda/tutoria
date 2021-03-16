const { Persona } = require("./classes/persona");

const sandy = new Persona({
  name: "Sandy",
  year: 1992,
  city: "Quito",
  country: "Ecuador",
});
const miObjeto = {
  name: "Sandy",
  year: 1994,
  city: "Gyq",
  country: "Ecuador",
  age: function () {
    return new Date().getFullYear() - miObjeto.year;
  },
  description: function () {
    return `Hola! ${this.name}`;
  },
};

// console.log(miObjeto.age());
// console.log(sandy.description());
