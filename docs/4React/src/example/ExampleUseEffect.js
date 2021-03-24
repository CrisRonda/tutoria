import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const getRandomInt = (max = 4) => Math.floor(Math.random() * Math.floor(max));

const getPokemonByNameOrID = async (req) => {
  try {
    const res = await fetch(BASE_URL + req);
    if (!res.ok) {
      throw new Error(`Code error: ${res.status}`);
    }
    const {
      id,
      order,
      species,
      weight,
      name,
      sprites: { front_default },
    } = await res.json();
    return { name, id, order, species, weight, img: front_default };
  } catch (err) {
    return { error: err, msj: "Pokemon no existe o su nombre esta mal" };
  }
};

const UseEffect = () => {
  const [pokemon, setPokemon] = useState({});
  const [update, setUpdate] = useState(true);
  const [timer, setTimer] = useState(0);
  // const [name, setName] = useState("");
  // const [name1, setName1] = useState("");

  // useEffect(() => {
  //   console.log("Me ejecuto por primera vez");
  // }, []);

  // useEffect(() => {
  //   console.log("Estoy observando a name: ", name);
  // }, [name]);

  useEffect(() => {
    async function getPokemon() {
      const index = getRandomInt(151);
      // console.log("Pidiendo pokemon: ", index);
      const _pokemons = await getPokemonByNameOrID(index);
      setPokemon(_pokemons);
    }
    getPokemon();
  }, [update]);

  // useEffect(() => {
  //   async function ticTac() {
  //     setInterval(() => {
  //       setTimer((bef) => bef + 1);
  //     }, 1000);
  //   }
  //   ticTac();
  //   return () => {
  //     clearInterval();
  //   };
  // }, []);

  return (
    <Container>
      <p>{timer}s</p>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setUpdate((prev) => !prev)}
      >
        Get new pokemon
      </Button>
      {/* <TextField
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <TextField
        value={name1}
        onChange={({ target: { value } }) => setName1(value)}
      /> */}
      {/* <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={pokemon.name}
            height="250"
            image={pokemon.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {pokemon.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {`Orden: ${pokemon.order}`}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {`Peso: ${pokemon.weight}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    */}
      {/* // si exite el pokemon --> render */}
      <PokemonCard
        // name={pokemon.name}
        // img={pokemon.img}
        // order={pokemon.order}
        // weight={pokemon.weight}
        // id={pokemon.id}
        {...pokemon}
      />
    </Container>
  );
};
export default UseEffect;
