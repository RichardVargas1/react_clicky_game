import React from 'react';
import './style.css';

// const value arrow function. Containsa p tag that shows instructions of clicky game
const Header = () => (
  <div className="header text-center d-flex align-items-center justify-content-center">
    <p className="m-0">Click on a character to earn points! Don't click on any more than once! Score resets if you do.</p>
  </div>
);
export default Header;