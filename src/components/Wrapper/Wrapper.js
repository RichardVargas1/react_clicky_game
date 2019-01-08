import React from 'react';
import './style.css';
import CharacterCard from '../CharacterCard';

// main container for each Character component
// loops through each index in props.characters, which contains an array of character images
// to create a new Character component for each image
// attaches the passed down clickEvent function to each Character component
const Wrapper = props => (
  // loops through wrapper
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.characters.map((a, i) => <CharacterCard name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Wrapper;