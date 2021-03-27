import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import UserContext from "../context/User/context";
import mystyles from "./styles";

const useStyles = makeStyles(mystyles);

const UsersList = () => {
  const userContext = useContext(UserContext);
  const classes = useStyles();
  useEffect(() => {
    userContext.getUsers();
  }, []);

  return (
    <Box className={classes.root}>
      {userContext.users.length > 0
        ? userContext.users.map((user) => (
            <Card key={user.id} className={classes.card}>
              <CardMedia
                component="img"
                alt={user.first_name}
                height="150"
                image={user.avatar}
              />
              <CardActionArea>
                <Typography>
                  {user.first_name + " " + user.last_name}
                </Typography>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => userContext.getProfile(user.id)}
                  size="small"
                  className={classes.button}
                >
                  Ver perfil
                </Button>
              </CardActions>
            </Card>
          ))
        : null}
    </Box>
  );
};

export default UsersList;
