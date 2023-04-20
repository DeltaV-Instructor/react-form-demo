import React from "react";
import "./App.css";
import ListGroup from "react-bootstrap/ListGroup";
import { FormGroup, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

    let firstName = event.target.firstName.value;
    let lastName = event.target.lastName.value;
    // console.log("form: ", firstName, lastName);


    let userName = event.target.userName.value;
    this.setState({
      userName: userName
    })
    console.log('user in state yet?', this.state.userName);







  };

  handleInput = (event) => {
    //grab the value
    let userName = event.target.value;
    console.log("🚀 ~ file: App.js:27 ~ App ~ userName:", userName);
    //add it to state userName
    this.setState({
      userName: userName,
    });
  };

  handleSelect = (event) => {
    //grab value from select in the form then if/else to tell even or odd or all.
    let selected = event.target.value;
    console.log(selected);

    //if even or odd or all
    if(selected === "even"){
      //filter over array of numbers and find even
     let newData = data.filter((number) => number % 2 === 0);
      //we need to update state to rerender just the even nums
      this.setState({sortedData: newData});
    } else if(selected === 'odd'){
       //filter over array of numbers and find even
       let newData = data.filter((number) => number % 2 !== 0);
      //we need to update state to rerender just the even nums
      this.setState({sortedData: newData});
    } else {
      //give back all the numbers
      this.setState({sortedData: data})
    }
  };

  render() {
    // console.log(data);
    console.log("STATE:", this.state.sortedData);
    let numbers = this.state.sortedData.map((number, index) => {
      return <ListGroupItem key={index}>{number}</ListGroupItem>;
    });
    return (
      <>
        <header>
          <h1>Forms in React</h1>
        </header>
        <section className="listNumbers">
          <ListGroup>{numbers}</ListGroup>
        </section>

        <Form onSubmit={this.handleSumbit}>
          <Form.Label>
            Name:
            <input type="text" name="userName" onInput={this.handleInput} />
          </Form.Label>

          <FormGroup controlId="firstName">
            <Form.Label>FirstName: </Form.Label>
            <Form.Control type="text" />
          </FormGroup>

          <Form.Label htmlFor="lastName">Last Name:</Form.Label>
          <Form.Control type="text" name="lastName" id="lastName" />

          <p>Selected Numbers</p>
          <Form.Select name="selected" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </Form.Select>
          <Button type="submit">Submit</Button>
        </Form>
      </>
    );
  }
}

export default App;

{
  /* <form>
<label>
  User Name
  <input type="text" name="userName" onChange={this.handleInput} />
</label>
<fieldset>
  <legend>Selected Numbers</legend>
  <select name="selected" onChange={this.handleSelect}>
    <option value="all">All</option>
    <option value="even">Even</option>
    <option value="odd">Odd</option>
  </select>
</fieldset>
<button type="submit">Submit</button>
</form> */
}
