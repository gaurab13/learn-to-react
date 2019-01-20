import React, { Component } from 'react';

class Attendees extends Component {
  render() {
    return (
      <div className="attendees">
        <p>{`Name: ${this.props.name}`}</p>
        <p>{`Address: ${this.props.address}`}</p>
      </div>
    )
  }
}
export default Attendees;