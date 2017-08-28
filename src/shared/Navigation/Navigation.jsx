import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';

import { navigationOpenDrawer, navigationCloseDrawer } from './NavigationDuck';

const Navigation = props => (
  <div>
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={props.navigationOpenDrawer}
    />
    <Drawer
      docked={false}
      open={props.navigation.drawerOpen}
      onRequestChange={props.navigationCloseDrawer}
    >
      <Link to={'/'}>
        <MenuItem onClick={props.navigationCloseDrawer}>
          Home
        </MenuItem>
      </Link>

      <Link to={'/admin'}>
        <MenuItem onClick={props.navigationCloseDrawer}>
          Admin
        </MenuItem>
      </Link>

      <Link to={'/login'}>
        <MenuItem onClick={props.navigationCloseDrawer}>
          Login
        </MenuItem>
      </Link>

      <Link to={'/signUp'}>
        <MenuItem onClick={props.navigationCloseDrawer}>
          SignUp
        </MenuItem>
      </Link>

      <Link to={'/createEvent'}>
        <MenuItem onClick={props.navigationCloseDrawer}>
          Create Event
        </MenuItem>
      </Link>

      <Link to={'/organizerTerms'}>
        <MenuItem onClick={props.navigationCloseDrawer}>
          Organizer Terms
        </MenuItem>
      </Link>

      <Link to={'/userTerms'}>
        <MenuItem onClick={props.navigationCloseDrawer}>
          User Terms
        </MenuItem>
      </Link>

      <Link to={'/contactUs'}>
        <MenuItem onClick={props.navigationCloseDrawer}>
          ContactUs
        </MenuItem>
      </Link>

      <Link to={'/aboutUs'}>
        <MenuItem onClick={props.navigationCloseDrawer}>
          About Us
        </MenuItem>
      </Link>
    </Drawer>
  </div>
);

Navigation.propTypes = {
  navigation: PropTypes.shape({
    drawerOpen: PropTypes.bool.isRequired,
  }).isRequired,
  navigationOpenDrawer: PropTypes.func.isRequired,
  navigationCloseDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  navigation: state.navigation,
});

const mapDispatchToProps = () => ({
  navigationCloseDrawer,
  navigationOpenDrawer,
});

export default connect(mapStateToProps, mapDispatchToProps())(Navigation);
