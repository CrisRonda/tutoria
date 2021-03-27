import { Container, Typography } from "@material-ui/core";
import UseStateExample from "./example/ExampleState";
import ExampleUseEffect from "./example/ExampleUseEffect";
import ExampleMemo from "./example/ExampleMemo";
import ContextExample from "./contextExample";
import "./styles.css";

export default function App() {
  return (
    <Container>
      <Typography variant="h2" align="right" color="primary">
        Hello React!
      </Typography>
      {/* <UseStateExample />
      <ExampleUseEffect /> */}
      {/* <ExampleMemo /> */}
      <ContextExample />
    </Container>
  );
}
