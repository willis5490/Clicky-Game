import React, { Component } from "react";
import './Header.css'


class Header extends Component {
 //logic here
 state = {
   score: 0,
   topScore: 0
 }



 //rendering here
 render() {
    return (
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" className='headies'>
      <nav id='headies' className="uk-navbar-container uk-navbar" >
    <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
          <h4 id='mediaQueryMove' className='headerFont'>Click on any image below to begin!</h4>
        </ul>
    </div>
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li><a href="'/"><h4 className='headerFont'>Marvel Memory Game</h4></a></li>
        </ul>
    </div>
    <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
         <h4 className='headerFont'>Score: {this.props.score} || Top Score: {this.props.topScore}</h4>
        </ul>
    </div>
</nav>
</div>
    );
  }

}

export default Header;