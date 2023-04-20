import React from "react";
import "./App.css";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      sortedData: data,
    };
  }

  handleSumbit = (event) => {
    event.preventDefault();
    //get form data now
  };

  handleInput = (event) => {
    //grab the value
    //add it to state userName
  };

  handleSelect = (event) => {
    //grab value from select in the form then if/else to tell even or odd or all.
  };

  render() {
    console.log(data);
    let numbers = data.map((number) => {
      return <ListGroupItem>{number}</ListGroupItem>;
    });
    return (
      <>
        <header>
          <h1>Forms in React</h1>
        </header>
        <section className="listNumbers">
          <ListGroup>{numbers}</ListGroup>
        </section>
      </>
    );
  }
}

export default App;
