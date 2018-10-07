import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  //logic here


  //rendering here
  render() {
    return (
      <div className='footer'>
        <div id='footies' className="uk-navbar-container uk-navbar">

          <div className="uk-navbar-center">
            <p id='copywrite'>© 2018 William Stearns</p>
          </div>

          <div className="uk-navbar-left">
            <img className='footerPic' alt='React Logo' src={require('../images/reactLogo.svg')} />
          </div>
          

        </div>
      </div>
    );
  }

}

export default Footer;