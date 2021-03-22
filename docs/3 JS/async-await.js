require("isomorphic-unfetch");

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// Con ids de pokemons
// let ids = [];
// for (let i = 1; i < 15; i++) {
//   ids.push(i.toString());
// }

// const getPokemonPromise = (req) => fetch(BASE_URL + req);

// const promises = ids.map((id) => getPokemonPromise(id));

// const callMyPromisesAll = async () => {
//   const res = Promise.all(promises);
//   /* res =[ {
//     endpoint: 'pokeapi'
//     status: '400,200'
//     json: ()=> {...} --> async
//   },
// {
//     endpoint: 'rickymorty'
//     status: ''
//     json: ()=> {...} -->async
//   } ]

//   const pokeDate= await res[0].json()
//   */
//   // const pokeDate = await res[0].json();
//   // const rickdara = await res[1].json();

//   const jsonData = Promise.all((await res).map((item) => item.json())); // array de promesas que contiene nuestros valores
//   const data = (await jsonData).map((item) => ({
//     name: item.name,
//     id: item.id,
//   }));
//   console.log("*************************");
//   console.log(data);
//   console.log("*************************");
//   return data;
// };
// callMyPromisesAll();

// con nombres

async function getPokemonByNameOrID(req) {
  try {
    const res = await fetch(BASE_URL + req);
    if (!res.ok) {
      throw new Error(`Code error: ${res.status}`);
    }
    const { id, order, species, name } = await res.json();
    return { name, id, order, species };
  } catch (err) {
    return { error: err, msj: "Pokemon no existe o su nombre esta mal" };
  }
}
const pokemons = ["pikachu", "charmander", "ditto"];

// const myAwaitPromises = async (arrayofPromises) => {
//   const data = await Promise.all(arrayofPromises);
//   return data;
// };

async function main() {
  const awaitPromises = pokemons.map((id) => getPokemonByNameOrID(id));
  const data = await Promise.all(awaitPromises);
  console.log(data);
}

main();
