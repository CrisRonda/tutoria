require("isomorphic-unfetch");

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemonByNameOrID(req) {
  try {
    console.log("Buscando pokemon....");
    const res = await fetch(BASE_URL + req);
    console.log("pokemon encontrado....", res.ok, "asd");
    if (!res.ok) {
      throw new Error(`Code error: ${res.status}`);
    }
    const { id, order, species, weight, name } = await res.json();
    console.log({ name, id, order, species, weight });
  } catch (err) {
    console.log(
      "*******************\n",
      "El pokemon no existe o existe un error en su nombre\n",
      err.message + "\n",
      "*******************"
    );
  }
}
getPokemonByNameOrID("pikachu");

// // Promises
// const pokemons = ["pikachu", "charmander", "ditto"];

// const promises = pokemons.map((name) => getPokemonByNameOrID(name));

// const data = Promise.all(promises);
// console.log("+++++++++++++++++++++++");
// console.log(data);
// console.log("+++++++++++++++++++++++");
