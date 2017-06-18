import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/login"
            name="Login"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/signup"
            name="Signup"
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
