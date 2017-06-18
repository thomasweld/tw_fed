import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import MenuExampleInvertedSecondary from '../Navigation/Menu';

class UnauthenticatedLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <MenuExampleInvertedSecondary />
        <Container>
          {children}
        </Container>
      </div>
    );
  }
}

UnauthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UnauthenticatedLayout;
