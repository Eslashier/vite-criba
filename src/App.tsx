import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Rows from "./components/rows";
import "./App.css";

function App() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [five, setFive] = useState(false);
  const [seven, setSeven] = useState(false);

  return (
    <div>
      <Container className="main">
        <h1>Actividad eje 4</h1>
        <Row className="justify-content-md-center">
          <Rows
            number={1}
            one={one}
            two={two}
            three={three}
            five={five}
            seven={seven}
          />
        </Row>
      </Container>
      <div className="buttons">
        <button
          className="button"
          style={{ backgroundColor: "#1AA3E8" }}
          onClick={() => setOne(!one)}
        >
          1
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#E92D3B" }}
          onClick={() => setTwo(!two)}
        >
          2
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#F1761C" }}
          onClick={() => setThree(!three)}
        >
          3
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#F2E26F" }}
          onClick={() => setFive(!five)}
        >
          5
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#20E256" }}
          onClick={() => setSeven(!seven)}
        >
          7
        </button>
      </div>
    </div>
  );
}

export default App;
