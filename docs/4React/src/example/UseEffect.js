import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography
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
      sprites: { front_default }
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

  useEffect(() => {
    async function getData() {
      const index = getRandomInt(151);
      // console.log("Pidiendo pokemon: ", index);
      const _pokemons = await getPokemonByNameOrID(index);
      setPokemon(_pokemons);
    }
    getData();
  }, [update]);

  useEffect(() => {
    async function ticTac() {
      setInterval(() => {
        setTimer((bef) => bef + 1);
      }, 1000);
    }
    ticTac();
    return () => {
      clearInterval();
    };
  }, []); // motrar que pasa cuando se pone mal un observador

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
      <Card>
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
    </Container>
  );
};
export default UseEffect;
