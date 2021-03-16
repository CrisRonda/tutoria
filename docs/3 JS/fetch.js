require("isomorphic-unfetch");

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonByNameOrID(id) {
  console.log("Buscando pokemon....");
  fetch(`${BASE_URL}${id}`)
    .then((res) => {
      console.log("pokemon encontrado....", res.status);
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Code error: ${res.status}`);
    })
    .then((data) => {
      const { name, id, order, species, weight } = data;
      // console.log(data);
      console.log({ name, id, order, species, weight });
      return { name, id, order, species, weight };
    })
    .catch((err) =>
      console.log(
        "*******************\n",
        "El pokemon no existe o existe un error en su nombre\n",
        err.message + "\n",
        "*******************"
      )
    );
}
const pokemon = getPokemonByNameOrID("1jsks");
