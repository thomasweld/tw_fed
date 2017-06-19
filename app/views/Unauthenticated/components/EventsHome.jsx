import React, { Component } from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';

class EventsHome extends Component {
  render() {
    const EventsHomeWrapper = styled.div`
    max-width: 1000px;
    border: 1px solid red;
    margin: 0 auto;
`;

    return (
      <EventsHomeWrapper>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </EventsHomeWrapper>
    );
  }
}

export default EventsHome;
