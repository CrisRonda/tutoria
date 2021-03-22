import React from "react";

import { Container, Grid } from "@material-ui/core";
import UserState from "./context/User/state";
import UsersList from "./components/UserList";
import Profile from "./components/Profile";
const ContextExample = () => {
  return (
    <UserState>
      <Grid container spacing={5}>
        <Grid item sm={8}>
          <UsersList />
        </Grid>
        <Grid item sm={4}>
          <Profile />
        </Grid>
      </Grid>
    </UserState>
  );
};

export default ContextExample;
