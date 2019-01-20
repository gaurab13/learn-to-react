import React, { Component } from 'react';

class Attendees extends Component {
  render() {
    const { attendees } = this.props;
    const list = attendees.map( attendee => {
      return (
        <div className="attendee" key={attendee.id}>
          <p>{`Name: ${attendee.name}`}</p>
          <p>{`Address: ${attendee.address}`}</p>
        </div>
      )
    })
    return (
      <div>
        {list}
      </div>
    )
  }
}
export default Attendees;