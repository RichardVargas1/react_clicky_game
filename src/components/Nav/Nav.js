import React from 'react';
import './style.css';

// Navbar that contains title of game.
// Nav also contains score from the clicked images.
const Nav = props => (
  <div className="navbar ">
    <div>Futurama Game</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
    </div>
  </div>
);

export default Nav;