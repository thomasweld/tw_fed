import React from 'react';
import logoFile from '../../../assets/logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={logoFile} alt="LOGO" />
      </div>
    );
  }
}

export default Logo;
