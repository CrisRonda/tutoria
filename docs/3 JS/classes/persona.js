class Persona {
  constructor({ name, year, city, country }) {
    this._name = name;
    this._year = year;
    this._city = city;
    this._country = country;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this._year;
  }

  get name() {
    return this._name;
  }

  description() {
    return `La persona se llama ${this._name} y tiene ${this.age()}`;
  }
}

module.exports = {
  Persona,
};
