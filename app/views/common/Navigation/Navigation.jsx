import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoFile from '../../../assets/ticket_win_white.png';

class Navigation extends React.Component {
  render() {
    const Wrapper = styled.section`
    background: lightgrey;
`;
    const NavItem = styled.h4`
    font-size: 1.5em;
    color: palevioletred;
    display: inline-block;
    padding: 0 8px 0 8px;
    margin: 10px;
`;
    const NavLogo = styled.div`
    max-width: 200px;
    display: inline-block;
    align-content: left
`;

    const navLogoStyle = {
      backgroundImage: 'url(../../../assets/ticket_win_white.png)',
      'max-width': '200px',
    };

    return (
      <Wrapper>
        <NavLogo>
          <img style={navLogoStyle} src={logoFile} alt="Ticketwin Logo" />
        </NavLogo>
        <NavItem>
          <NavLink to="/">Events Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/createevent">Create Event</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/support">Support</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/aboutus">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
      </Wrapper>
    );
  }
}

export default Navigation;
