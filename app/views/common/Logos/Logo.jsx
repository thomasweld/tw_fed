import React from 'react';
import logoFile from '../../../assets/ticket_win_white.png';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={logoFile} alt="Ticketwin Logo" />
      </div>
    );
  }
}

export default Logo;
