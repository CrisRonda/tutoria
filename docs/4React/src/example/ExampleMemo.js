import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useState, useCallback, useMemo, memo } from "react";

const UseExample = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [update, setUpdate] = useState(false);
  // const sum = () => {
  //   console.log("SUM: ", { counterA, counterB });
  //   return counterA + counterB;
  // };
  const sum = useCallback(() => {
    console.log("Me ejecuto en el callback");
    return counterA + counterB;
  }, [counterB]);

  // cambiar el metodo por una variable

  const _hardFunction = () => {
    console.log("me ejecuto", { counterA });
    let i = 0;
    // while (i < 2_000_000_000) i++; // --> Proceso muy pesado de calcular
    return counterA % 2 == 0 ? "Es par" : "Es impar";
  };
  const hardFunction = useMemo(() => _hardFunction(), [counterA]); //-> 2s ó las llamadas al API (SON DEMASIADOS DATOS)

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

export default memo(UseExample); // tareas muy pesadas, o en mapas
