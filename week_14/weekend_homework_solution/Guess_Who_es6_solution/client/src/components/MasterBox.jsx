import React from 'react';
import Grid from './Grid.jsx';
import QuestionBox from './QuestionBox.jsx';
import GuessBox from './GuessBox.jsx';

class MasterBox extends React.Component {

  constructor(props) {
    super(props);
    this.sendHTTPRequest = this.sendHTTPRequest.bind(this);
    this.chooseCharacter = this.chooseCharacter.bind(this);
    this.flipCharacter = this.flipCharacter.bind(this);
    this.changeDeck = this.changeDeck.bind(this);
    this.state = {
      characters: [], 
      opponentCharacter: null, 
      won: false
    };
  }

  sendHTTPRequest(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status === 200){
        const characters = JSON.parse(request.responseText);
        this.setState({characters: characters});
        this.chooseCharacter(characters);
      }
    };
    request.send(null);
  }

  componentDidMount(){
    this.sendHTTPRequest(this.props.url);
  }

  chooseCharacter(characters) {
    const chosenCharacter = characters[Math.floor(Math.random() * (characters.length-1))];
    this.setState({opponentCharacter:chosenCharacter})
  }

  flipCharacter(indexToFlip) {
    const updatedCharacters = this.state.characters.map((character, index) => {
      if(index === indexToFlip){
        const newCharacter = Object.assign({}, character, {flipped: !character.flipped})
        return newCharacter;
      }else{
        return character;
      }
    })
    this.setState({characters: updatedCharacters});
  }

  changeDeck(event) {
    const selectedDeck = event.target.value;
    this.sendHTTPRequest(selectedDeck)
  }

  render(){
    return(
      <div className="main">
        <img src="/images/logo.png"/><br />
        Change deck:
        <select id="deckSelect" onChange={this.changeDeck}>
          <option value="/api/characters/staff">CodeClan Staff</option>
          <option value="/api/characters/lotr">Lord of The Rings</option>
          <option value="http://hp-api.herokuapp.com/api/characters">Harry Potter</option>
        </select>
        <Grid characters={this.state.characters} onFlip={this.flipCharacter}></Grid>
        <QuestionBox characters={this.state.characters} opponentCharacter={this.state.opponentCharacter}></QuestionBox>
        <GuessBox characters={this.state.characters} opponentCharacter={this.state.opponentCharacter}></GuessBox>
      </div>
    );
  }
};

export default MasterBox;
