import React, { Component } from 'react';
import Nav from './Nav';
import Wrapper from './Wrapper';
import Footer from './Footer';
import Header from './Header';
import images from '../images';

class ReactClickyGame extends Component {
  state = {
    score: 0,
    highScore: 0,

    // Stores the class value.
    // Assigns to navMessage based on a positive, or, negative click
    navMsgColor: '',

    // this method will contain the messages displayed, based on the clicks from the user
    navMessage: 'Click On a Character to begin!',

    // Stored images
    allCharacters: this.shuffleFuturamaArray(),

    // empty array that will track each element clicked on.
    imageClicked: [],

    shake: false
  };

  // binds the current this (ReactClickyGame)to checkUserClicked to have access to state
  clickEvent = this.checkUserClick.bind(this);

  // shuffles images when the DOM is loading page
  shuffleFuturamaArray() {
    // const array that will serve is the new array of characters
    const newFuturamaArr = images.slice();

    // will store the shuffled image array
    const shuffleFuturamaArr = [];

    // After referencing the new Array, a new image will be spliced into the DOM.
    while (newFuturamaArr.length > 0) {
      shuffleFuturamaArr.push(newFuturamaArr.splice(Math.floor(Math.random() * newFuturamaArr.length), 1)[0]);
    }

    // Returns shuffled futurama characters array
    return shuffleFuturamaArr;
  }

  checkUserClick(clickedCharacter) {
    
    // imageClicked method stores all previously clicked images from the user
    const previousState = this.state.imageClicked.slice();

    // shuffles the images
    const shuffledArray = this.shuffleFuturamaArray();

    // tracks score of user
    // score will equal current state score
    // highscore will equal current state score
    let score = this.state.score;
    let highScore = this.state.highScore;

    // if the clicked item is not in imageClicked, then it hasn't been clicked and the score is increased
    if (!this.state.imageClicked.includes(clickedCharacter)) {
      // have to increment each correct click
      if (score === highScore) {
        score++;
        highScore++;

        // Only increases the score value if it is aligned with highscore as well
      } else {
        score++;
      }

      // tracks which image has been clicked
      previousState.push(clickedCharacter);
    }

    // IMPORTANT:
    // This will reset the current score state
    // Only IF, the same character was clicked on twice
    if (this.state.imageClicked.includes(clickedCharacter)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMsgColor: 'incorrect',
        navMessage: 'You Guessed Wrong!',
        allCharacters: shuffledArray,
        imageClicked: [],
        shake: true
      });
    }

    // readjusts the current state to increase the score, only if the user has clicked correctly.
    this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: 'correct',
      navMessage: 'You Guessed Right!',
      allCharacters: shuffledArray,
      imageClicked: previousState,
      shake: false
    });
  }

  // This line of code, 110-127, will set the current score to the Nav
  // passes the randomized state.allCharacters array to wrapper to create a Character component for each image.
  // passes the this.checkUserClick down to wrapper to pass to each Character component to be used for the click event.
  render() {
    const state = this.state;
    return (
      <div>
        <Nav
          score={state.score}
          highScore={state.highScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgColor}
        />
        <Header />
        <Wrapper
          shake={state.shake}
          characters={state.allCharacters}
          clickEvent={this.clickEvent}
        />
        <Footer />
      </div>
    );
  }
}

export default ReactClickyGame;