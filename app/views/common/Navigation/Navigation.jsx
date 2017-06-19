import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


class Navigation extends React.Component {
  render() {
    const Wrapper = styled.section`
    background: papayawhip;
    text-align: right;

`;
    const NavItem = styled.h4`
    font-size: 1.5em;
    color: palevioletred;
    display: inline-block;
    padding: 0 8px 0 8px;
    margin: 10px;
    text-decoration: none;
`;

    return (
      <Wrapper>
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
