import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      notes: []
    }
  }
  submit(){
    const { notes, text } = this.state;
    const newNote = {text: this.state.text};
    console.log(text);
    notes.push(newNote);
    this.setState({notes: notes});
  }
  render() {
    return (
      <div>
        <h2>Note to Self</h2>
        <Link to = './register'>Register Page</Link>
        <Form inline>
          <FormControl onChange={event => {this.setState({text: event.target.value})}}/>
          <Button onClick={() => this.submit()}>Submit</Button>
        </Form>
        {
          this.state.notes.map((note, index) => {
            return (
              <div key = {index}>
                {note.text}
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
