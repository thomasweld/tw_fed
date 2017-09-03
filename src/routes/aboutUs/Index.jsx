import React from 'react';
// import indexStyles from './indexStyles';

export default class AboutUs extends React.Component {
  render() {
    // return <p style={indexStyles.paragraph}>About Us</p>;
    return (
      <div className="row">
        <div
          style={{ textAlign: 'center' }}
          className="col-xs-12 col-sm-8 col-md-6 col-lg-4"
        >
          <div className="box">Responsive</div>
        </div>
        <div
          style={{ textAlign: 'center' }}
          className="col-xs-12 col-sm-8 col-md-6 col-lg-4"
        >
          <div className="box">Responsive</div>
        </div>
        <div
          style={{ textAlign: 'center' }}
          className="col-xs-12 col-sm-8 col-md-6 col-lg-4"
        >
          <div className="box">Responsive</div>
        </div>
      </div>
    );
  }
}
