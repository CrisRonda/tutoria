import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useState, useCallback, useMemo } from "react";

const UseExample = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [update, setUpdate] = useState(false);
  const sum = useCallback(() => {
    console.log("SUM: ", { counterA, counterB });
    return counterA + counterB;
  }, [counterB]);
  // cambiar el metodo por una variable
  const hardFunction = useMemo(() => {
    console.log("HARDFUNC: ", { counterA, counterB });
    let i = 0;
    while (i < 2_000_000_000) i++;
    return counterA % 2 == 0 ? "Es par" : "Es impar";
  }, [counterA]);
  // const hardFunction = () => {
  //   console.log("me ejecuto", { counterA, counterB });
  //   let i = 0;
  //   while (i < 2_000_000_000) i++;
  //   return counterA % 2 == 0 ? "Es par" : "Es impar";
  // };

  return (
    <Container>
      <Button onClick={() => setUpdate((bef) => !bef)}>Hard function</Button>
      <Typography>El primer valor {hardFunction}</Typography>
      <Typography align="center" variant="h5">
        {sum()}
      </Typography>
      <Box display="flex" justifyContent="space-around" my={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCounterA((bef) => bef + 1)}
        >
          +
        </Button>
        <Typography variant="h4" color="secondary">
          {counterA}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCounterA((bef) => bef - 1)}
        >
          -
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-around" my={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCounterB((bef) => bef + 1)}
        >
          +
        </Button>
        <Typography variant="h4" color="secondary">
          {counterB}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCounterB((bef) => bef - 1)}
        >
          -
        </Button>
      </Box>
    </Container>
  );
};

export default UseExample;
