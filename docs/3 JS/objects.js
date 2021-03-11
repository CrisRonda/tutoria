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
  age: function () {
    return new Date().getFullYear() - this.year;
  },
};

// console.log(data.age());

// keys
const keys = Object.keys(data);
console.log(keys);

// values
const values = Object.values(data);
console.log(values[1]);

data.name = "Cambie de nombre a pesar de ser const";
console.log(data);
