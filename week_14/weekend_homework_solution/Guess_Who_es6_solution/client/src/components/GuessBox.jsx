import React from 'react';
import winChecker from '../models/win_checker.js';

class GuessBox extends React.Component {

  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.handleChosenCharacter = this.handleChosenCharacter.bind(this);
    this.state = { chosenCharacter: null, guessResult: null }
  }

  handleChosenCharacter(event) {
    this.setState({ chosenCharacter: event.target.value })
  }

  buttonClick() {
    const result = winChecker.checkForWin(this.state.chosenCharacter, this.props.opponentCharacter)
    if (result) {
      this.setState({ guessResult: "Correct! You win!!"}) 
    } else {
      this.setState({ guessResult: "Wrong, you lose!"}) 
    }
  }

  answerTextColour () {
    return this.state.guessResult === "Correct! You win!!" ? "answer-green" : "answer-red";
  }

  getOptions() {
    const dropDownOptions = this.props.characters.map((character, index) => {
      return(
        <option value={character.name} key={index}>{character.name}</option>
      )
    });
    return dropDownOptions;
  }


  render(){
    return(
      <div id="guessBox">
        Make a Guess:
        <select id="guessCharacter" onChange={this.handleChosenCharacter}>
          {this.getOptions()}
        </select>
        <button className="guessButton" onClick={this.buttonClick}>Guess!</button>
        <div id="winAnswer"> <span className={this.answerTextColour()}>{this.state.guessResult}</span></div>
      </div>
    )
  }
};


export default GuessBox;