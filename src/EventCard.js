import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class EventCard extends Component {

  render(){
    return (
      <Card>
        <h2>{this.props.title}</h2>
        <h2>{this.props.price}</h2>
        <h2>{this.props.location}</h2>
        <h2>{this.props.date}</h2>
        <h2>{this.props.time}</h2>
        <img src={this.props.image} alt="event artwork" />
      </Card>
    );
  }
}

export default EventCard;
