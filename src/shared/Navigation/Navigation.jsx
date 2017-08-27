import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
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
    />
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
