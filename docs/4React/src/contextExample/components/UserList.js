import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import UserContext from "../context/User/context";

const UsersList = () => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.getUsers();
  }, []);

  return (
    <Box display="flex" flexWrap="wrap">
      {userContext.users.length
        ? userContext.users.map((user) => (
            <Card key={user.id}>
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
