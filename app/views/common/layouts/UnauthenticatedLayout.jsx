import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

class UnauthenticatedLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Navigation />
        <div className="container-fluid spacer">
          {children}
        </div>
      </div>
    );
  }
}

UnauthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UnauthenticatedLayout;
