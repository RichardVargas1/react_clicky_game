import React from 'react';
import './style.css';

// the onClick function is defined as a callback so that the clicked elements value can be passed to props.clickEvent
// This will check if the image has been clicked on, or not
const CharacterCard = props => (
  <div className="card" onClick={e => props.clickEvent(e.target.src)}>
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default CharacterCard;