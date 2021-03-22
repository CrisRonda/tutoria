import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import React from "react";

const PokemonCard = ({ name, img, order, weight }) => (
  <Card>
    <CardActionArea>
      <CardMedia component="img" alt={name} height="250" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
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

export default PokemonCard;
