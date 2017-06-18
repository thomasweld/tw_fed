import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logoFile from '../../../assets/ticketwin_logo.png';

export default class MenuExampleStackable extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item className="heaerLogoWrapper">
          <Link to="/"><img src={logoFile} alt="logo" className="headerLogo" /></Link>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/createEvent"
          name="createEvent"
          active={activeItem === 'createEvent'}
          onClick={this.handleItemClick}
        >
          Create Event
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/support"
          name="support"
          active={activeItem === 'support'}
          onClick={this.handleItemClick}
        >
          Support
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/aboutus"
          name="aboutus"
          active={activeItem === 'aboutus'}
          onClick={this.handleItemClick}
        >
          About Us
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/login"
          name="login"
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/signup"
          name="signup"
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        >
          Sign Up
        </Menu.Item>
      </Menu>
    );
  }
}
