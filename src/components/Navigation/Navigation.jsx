import React from 'react';
import { Link } from 'react-router-dom';
import navigationStyles from './navigationStyles';

export default class Navigation extends React.Component {
  render() {
    return (
      <div style={navigationStyles.paragraph}>
        <ul>
          <li>
            <Link
              to={'/'}
              activeStyle={{ color: 'red' }}
            >
              Events
            </Link>
          </li>
          <li>
            <Link to={'/admin'} activeClassName="active">
              Admin
            </Link>
          </li>
          <li>
            <Link to={'/login'} activeClassName="active">
              Login
            </Link>
          </li>
          <li>
            <Link to={'/signUp'} activeClassName="active">
              SignUp
            </Link>
          </li>
          <li>
            <Link to={'/createEvent'} activeClassName="active">
                Create Event
            </Link>
          </li>
          <li>
            <Link to={'/organizerTerms'} activeClassName="active">
                Organizer Terms
            </Link>
          </li>
          <li>
            <Link to={'/userTerms'} activeClassName="active">
                User Terms
            </Link>
          </li>
          <li>
            <Link to={'/contactUs'} activeClassName="active">
                ContactUs
            </Link>
          </li>
          <li>
            <Link to={'/aboutUs'} activeClassName="active">
                About Us
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
