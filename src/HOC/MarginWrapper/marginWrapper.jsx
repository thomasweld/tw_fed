import React, { Component } from 'react';

export default BaseComponent => class MarginWrapper extends Component {
  render() {
    return (
      <div
        style={{ marginTop: '20px', marginBottom: '20px' }}
        className="col-xs-offset-1 col-xs-10 col-md-offset-1 col-md-10"
      >
        <BaseComponent {...this.props} />
      </div>
    );
  }
};
