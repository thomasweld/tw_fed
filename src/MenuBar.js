import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import logo from './logo.svg';



class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
      <Menu.Item name='logo'>
        <h2>TICKETWIN</h2>
        <img src={logo} alt='logo'/>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item
          name='events'
          active={activeItem === 'events'}
          onClick={this.handleItemClick}/>
        <Menu.Item
          name='help'
          active={activeItem === 'help'}
          onClick={this.handleItemClick}/>
        <Menu.Item
          name='sign up'
          active={activeItem === 'sign up'}
          onClick={this.handleItemClick}/>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}/>
          <Menu.Item
            name='create event'
            active={activeItem === 'create event'}
            onClick={this.handleItemClick}/>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MenuBar;
