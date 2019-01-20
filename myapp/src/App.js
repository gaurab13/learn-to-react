import React, { Component } from 'react';
import Attendees from './Attendees';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Workshop</h1>
        <Attendees />
      </div>
    );
  }
}

export default App;
