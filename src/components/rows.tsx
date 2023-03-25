import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Columns from "./columns";
import "./box.css"

interface NumberInterface {
  number: number;
  one: boolean;
  two: boolean;
  three: boolean;
  five: boolean;
  seven: boolean;
}

function Rows(props: NumberInterface) {
  const { number, one,two,three,five,seven } = props;
  let numberArray = [];

  for (let i = number; i < number + 10; i++) {
    numberArray.push(i * 10 - 9);
  }

  const rows = numberArray.map((number) => (
    <Row key={number} className="row">
      <Columns number={number} one={one} two={two} three={three} five={five} seven={seven}/>
    </Row>
  ));

  return <>{rows}</>;
}

export default Rows;
