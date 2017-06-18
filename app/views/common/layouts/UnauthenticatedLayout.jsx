import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

import Logo from '../Logos/Logo';
import MenuExampleInvertedSecondary from '../Navigation/Menu';

class UnauthenticatedLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <MenuExampleInvertedSecondary />
        <Container>
          <Grid>
            <Logo />
          </Grid>
          <div className="container-fluid spacer">
            <div className="col-md-6 col-md-offset-3">
              {children}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

UnauthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UnauthenticatedLayout;
