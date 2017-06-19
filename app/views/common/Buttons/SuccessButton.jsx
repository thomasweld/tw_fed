import React from 'react';
import PropTypes from 'prop-types';

class SuccessButton extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-success">
        {this.props.buttonText}
      </button>
    );
  }
}

SuccessButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default SuccessButton;
