import React, { Component } from 'react';
import styled from 'styled-components';

class EventCard extends Component {
  render() {
    const EventCardWrapper = styled.div`
    max-width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    display: inline-block;
    margin: 10px;
    &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

    const EventCardInner = styled.div`
    padding: 2px 16px;
`;

    const EventCardImage = styled.img`
    width:100%
`;

    return (
      <EventCardWrapper>
        <EventCardImage src="https://placeholdit.co//i/300x300?&bg=b30000" alt="Avatar" />
        <EventCardInner>
          <h4><b>Event 123</b></h4>
          <p>Sweet party!</p>
        </EventCardInner>
      </EventCardWrapper>
    );
  }
}

export default EventCard;
