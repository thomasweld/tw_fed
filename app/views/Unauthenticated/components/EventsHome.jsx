import React, { Component } from 'react';
import { Header, Container, Card } from 'semantic-ui-react';

import CardExampleCard from '../../common/Cards/Card';

class EventsHome extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">Events Using Ticketwin</Header>
        <Card.Group>
          <CardExampleCard />
          <CardExampleCard />
          <CardExampleCard />
          <CardExampleCard />
          <CardExampleCard />
          <CardExampleCard />
          <CardExampleCard />
          <CardExampleCard />
          <CardExampleCard />
        </Card.Group>
      </Container>
    );
  }
}

export default EventsHome;
