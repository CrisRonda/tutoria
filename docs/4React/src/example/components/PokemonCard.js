import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import Proptypes from "prop-types";

const PokemonCard = ({ name, img, order, weight, id }) => {
  const newName = name + "  " + id;
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" alt={name} height="250" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {newName}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {`ID: ${id}`}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {`Orden: ${order}`}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {`Peso: ${weight}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PokemonCard.propTypes = {
  name: Proptypes.string.isRequired,
  img: Proptypes.string,
  order: Proptypes.number,
  weight: Proptypes.number,
  id: Proptypes.number,
  myObj: Proptypes.shape({
    id: Proptypes.string,
    name: Proptypes.string,
  }),
  myArray: Proptypes.arrayOf(Proptypes.string),
  myArray2: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string,
    })
  ),
  myFunc: Proptypes.func,
};

PokemonCard.defaultProps = {
  id: 0,
};

export default PokemonCard;
