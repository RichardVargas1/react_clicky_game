import React from 'react';
import './style.css';

// const value arrow function. Containsa p tag that shows instructions of clicky game
const Header = () => (
  <div className="banner text-center d-flex align-items-center justify-content-center">
    <p className="m-0">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
);
export default Header;