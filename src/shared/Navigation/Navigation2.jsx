import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import navigationStyles from './navigationStyles';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul style={navigationStyles.navbarUl}>
          <li style={navigationStyles.navbarLi}>
            <Link
              to={'/'}
              activeStyle={{ color: 'red' }}
            >
              <RaisedButton label="test" />
            </Link>
          </li>
          <li style={navigationStyles.navbarLi}>
            <Link to={'/admin'} activeClassName="active">
              Admin
            </Link>
          </li>
          <li style={navigationStyles.navbarLi}>
            <Link to={'/login'} activeClassName="active">
              Login
            </Link>
          </li>
          <li style={navigationStyles.navbarLi}>
            <Link to={'/signUp'} activeClassName="active">
              SignUp
            </Link>
          </li>
          <li style={navigationStyles.navbarLi}>
            <Link to={'/createEvent'} activeClassName="active">
                Create Event
            </Link>
          </li>
          <li style={navigationStyles.navbarLi}>
            <Link to={'/organizerTerms'} activeClassName="active">
                Organizer Terms
            </Link>
          </li>
          <li style={navigationStyles.navbarLi}>
            <Link to={'/userTerms'} activeClassName="active">
                User Terms
            </Link>
          </li>
          <li style={navigationStyles.navbarLi}>
            <Link to={'/contactUs'} activeClassName="active">
                ContactUs
            </Link>
          </li>
          <li style={navigationStyles.navbarLi}>
            <Link to={'/aboutUs'} activeClassName="active">
                About Us
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
