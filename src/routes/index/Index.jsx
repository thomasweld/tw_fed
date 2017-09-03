import React from 'react';
import indexStyles from './indexStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import MarginWrapper from '../../HOC/MarginWrapper/marginWrapper';



class Index extends React.Component {
  render() {
    // return <p style={indexStyles.paragraph}>HOME - Events</p>;
    return (
      <div className='row'>
        <div className='col-xs-12
                      col-sm-8
                      col-md-6
                      col-lg-4'>
                      <Card>
                        <CardHeader
                          title='URL Avatar'
                          subtitle='Subtitle'
                          avatar='images/jsa-128.jpg'
                        />
                        <CardMedia
                          overlay={<CardTitle title='Overlay title' subtitle='Overlay subtitle' />}
                        >
                          <img src='http://via.placeholder.com/350x350' alt='' />
                        </CardMedia>
                        <CardTitle title='Card title' subtitle='Card subtitle' />
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                          <FlatButton label='Action1' />
                          <FlatButton label='Action2' />
                        </CardActions>
                      </Card>

          </div>
          <div  className='col-xs-12
                      col-sm-8
                      col-md-6
                      col-lg-4'>
                      <Card>
                        <CardHeader
                          title='URL Avatar'
                          subtitle='Subtitle'
                          avatar='images/jsa-128.jpg'
                        />
                        <CardMedia
                          overlay={<CardTitle title='Overlay title' subtitle='Overlay subtitle' />}
                        >
                          <img src='http://via.placeholder.com/350x350' alt='' />
                        </CardMedia>
                        <CardTitle title='Card title' subtitle='Card subtitle' />
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                          <FlatButton label='Action1' />
                          <FlatButton label='Action2' />
                        </CardActions>
                      </Card>

          </div>

           <div  className='col-xs-12
                                col-sm-8
                                col-md-6
                                col-lg-4'>
                                <Card>
                                  <CardHeader
                                    title='URL Avatar'
                                    subtitle='Subtitle'
                                    avatar='images/jsa-128.jpg'
                                  />
                                  <CardMedia
                                    overlay={<CardTitle title='Overlay title' subtitle='Overlay subtitle' />}
                                  >
                                    <img src='http://via.placeholder.com/350x350' alt='' />
                                  </CardMedia>
                                  <CardTitle title='Card title' subtitle='Card subtitle' />
                                  <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                  </CardText>
                                  <CardActions>
                                    <FlatButton label='Action1' />
                                    <FlatButton label='Action2' />
                                  </CardActions>
                                </Card>
                    </div>
      </div>

    );
  }
}

export default MarginWrapper(Index);
