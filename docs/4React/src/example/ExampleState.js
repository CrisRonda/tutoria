import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const Example = () => {
  const [counter, setCounter] = useState(0);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [person, setperson] = useState({
    name: "",
    age: 0,
  });
  const [persons, setpersons] = useState([]);

  const handleAdd = () => setCounter((prev) => (prev >= 10 ? prev : prev + 1));

  const handleMinus = (value) =>
    setCounter((prev) => (prev <= 0 ? prev : prev - value));

  return (
    <Container>
      <Typography variant="h4" color="secondary">
        Mi contador
      </Typography>
      <Box display="flex" justifyContent="space-around" my={2}>
        <Button variant="contained" color="secondary" onClick={handleAdd}>
          +
        </Button>
        <Typography variant="h4" color="secondary">
          {counter}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleMinus(2)}
        >
          -
        </Button>
      </Box>
      {/* <Box display="flex" justifyContent="center" flexDirection="column" mt={6}>
        <TextField
          variant="outlined"
          label="Ingresa un nombre"
          placeholder="Ejemplo Mariana"
          value={person.name}
          onChange={({ target: { value } }) => {
            setperson((prev) => ({ ...prev, name: value }));
            // setName(value);
          }}
        />
        <TextField
          variant="outlined"
          label="Ingresa la edad"
          placeholder="Ejemplo 12"
          type="number"
          value={person.age}
          inputProps={{ max: 10, min: 0 }}
          onChange={({ target: { value } }) => {
            // setAge(value);
            setperson((prev) => ({ ...prev, age: value }));
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            // [{name: 'hola1', age: 12}, {name:'Asd', age:23}]
            setpersons((prev) => [...prev, person]);
            // setName("");
            // setAge("");
            setperson({
              name: "",
              age: 0,
            });
          }}
        >
          Agregar un nuevo elemento
        </Button>
        {persons.map(({ name, age }, index) => (
          <Box key={index} display="flex" justifyContent="space-around">
            <Typography>{name}</Typography>
            <Typography>{age}</Typography>
          </Box>
        ))}
      </Box>
     */}
    </Container>
  );
};
export default Example;

// const helloWorld = "hola mundo";
// const function1 = "hola mundo";
// const function2 = "hola mundo";

// export { helloWorld, function1, function2 };
