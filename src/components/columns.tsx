import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./box.css"

interface NumberInterface {
  number: number;
  one: boolean;
  two: boolean;
  three: boolean;
  five: boolean;
  seven: boolean;
}

function Columns(props: NumberInterface) {
  const { number, one, two, three, five, seven } = props;
  let numberArray = [];

  for (let i = number; i < number + 10; i++) {
    numberArray.push(i);
  }

  function color(numberColor:number){
    if(numberColor === 1 && one )
    return "#1AA3E8"
    if(numberColor%2 === 0 && numberColor !== 2  && two)
    return "#E92D3B"
    if(numberColor%3 === 0 && numberColor !== 3 && three)
    return "#F1761C"
    if(numberColor%5 === 0 && numberColor !== 5 && five)
    return "#F2E26F"
    if(numberColor%7 === 0 && numberColor !== 7 && seven)
    return "#20E256"
  }

  const columns = numberArray.map((number) => <Col key={number} className="col" style={{ backgroundColor: color(number) }}>{number}</Col>);

  return <>{columns}</>;
}

export default Columns;
