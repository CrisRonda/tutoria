require("isomorphic-unfetch");

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemonByNameOrID(req) {
  try {
    const res = await fetch(BASE_URL + req);
    if (!res.ok) {
      throw new Error(`Code error: ${res.status}`);
    }
    const { id, order, species, weight, name } = await res.json();
    return { name, id, order, species, weight };
  } catch (err) {
    return { error: err, msj: "Pokemon no existe o su nombre esta mal" };
  }
}

// Con ids de pokemons
let ids = [];
for (let i = 1; i < 10; i++) {
  ids.push(i.toString());
}
getPokemonPromise = (req) => fetch(BASE_URL + req);
const promises = ids.map((id) => getPokemonPromise(id));
const myPromises = async () => {
  const res = Promise.all(promises);
  const jsonData = Promise.all((await res).map((item) => item.json()));
  const data = (await jsonData).map((pok) => ({ name: pok.name, id: pok.id }));
  console.log(data);
  return data;
};
// myPromises();

// con nombres

const pokemons = ["pikachu", "charmander", "ditto"];

const awaitPromises = pokemons.map((id) => getPokemonByNameOrID(id));

const myAwaitPromises = async () => {
  const data = await Promise.all(awaitPromises);
  return data;
};

async function main() {
  const data = await myAwaitPromises();
  console.log(data);
}

main();
