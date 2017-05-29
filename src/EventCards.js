import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import logo from './logo.svg'
import EventCard from './EventCard'

class EventCards extends Component
{
  render(){
    return(
      <Grid columns='equal'>
      <Grid.Row>
      <Grid.Column>
        <EventCard
          title="Party at Tom's House"
          price="$1000"
          location="Thomas' House"
          date="07/04/2017"
          time="19:00"
          image={logo}
        />
        </Grid.Column>
        <Grid.Column>
        <EventCard
          title="Party at My House"
          price="$2000"
          location="My House"
          date="08/04/2068"
          time="1:00"
          image={logo}
        />
        </Grid.Column>
        <Grid.Column>
        <EventCard
          title="Party at Her House"
          price="$10.00"
          location="Her House"
          date="01/01/2018"
          time="00:00"
          image={logo}
        />
        </Grid.Column>
      </Grid.Row>
      </Grid>
    );
  }
}

export default EventCards;
