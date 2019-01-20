import React, { Component } from 'react';
import Attendees from './Attendees';

class App extends Component {
  constructor() {
    super();
    this.state = {
      attendees: [
        {
          id: 'person1',
          name: 'Rick',
          address: 'Washington'
        },
        {
          id: 'person2',
          name: 'Bender',
          address: 'New York'
        },
        {
          id: 'person3',
          name: 'Fry',
          address: 'New New York'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>React Workshop</h1>
        <Attendees attendees={this.state.attendees} />
      </div>
    );
  }
}

export default App;
