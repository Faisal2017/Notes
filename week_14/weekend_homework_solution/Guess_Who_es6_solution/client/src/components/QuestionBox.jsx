import React from 'react';

class QuestionBox extends React.Component {

  constructor(props) {
    super(props);
    this.questionButtonClick = this.questionButtonClick.bind(this);
    this.handleFirstSelectChange = this.handleFirstSelectChange.bind(this);
    this.handleSecondSelectChange = this.handleSecondSelectChange.bind(this);
    this.state = { characteristicValue: null, characteristicCategory: null, answerText: null };
  }

  questionButtonClick(event) {
    const category = this.state.characteristicCategory;
    const value = this.state.characteristicValue;
    if (value === this.props.opponentCharacter[category]){
      this.setState({answerText: "Yes!"})
    }
    else {
      this.setState({answerText: "No."})
    }
  }

  handleFirstSelectChange(event) {
    const characteristicCategory = event.target.value;
    this.setState({characteristicCategory, answerText: null});
  }

  handleSecondSelectChange(event) {
    const characteristicValue = event.target.value;
    this.setState({characteristicValue});
  }

  getOptions() {
    console.log(this.props.characters.length)
    if (this.props.characters.length === 0) return null;
    console.log('still going')
    const characteristics = this.props.characters.map((character) => character[this.state.characteristicCategory]);
    const unique = characteristics.filter((characteristic, i, array) => (
      array.indexOf(characteristic) === i )
    );
    const options = unique.map((characteristic, i) => (<option key={i} value={characteristic}>{characteristic}</option>));
    console.log(options)
    return options;
  }

  capitalise(string) {
    const firstLetter = string.slice(0, 1).toUpperCase();
    const restOfString = string.slice(1).toLowerCase();
    return firstLetter + restOfString;
  }


  getCategories() {
    if (this.props.characters[0] == null) return;
    const properties = Object.keys(this.props.characters[0]);
    const validProperties = properties.filter((property) => {
      const isImage = property === "image";
      const isName = property === "name";
      const isFlipped = property === "flipped";
      return (isImage || isName || isFlipped) ? false : true
    })
    const propertyOptions = validProperties.map((property, index) => (
        <option value={property} key={index}>{this.capitalise(property)}</option>
      ));
    return propertyOptions
  }

  render(){
    return(
      <div>
        Guess a characteristic: 
        <select id="questionSelect" onChange={this.handleFirstSelectChange}>
          <option>Choose characteristic:</option>
          {this.getCategories()}
        </select>

        <select id="optionSelect" onChange={this.handleSecondSelectChange}>
          <option>Choose an option:</option>
          {this.getOptions()}
        </select>

        <button onClick={this.questionButtonClick}>Do they have this?</button> 
        <span className={this.state.answerText === "Yes!" ? "answer-green" : "answer-red"}>
        {this.state.answerText}
        </span>
      </div>
    )
  }
};

export default QuestionBox;
