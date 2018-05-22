import React from 'react';
import Card from './Card.jsx';

class Grid extends React.Component {

  render(){
    const cards = this.props.characters;

    const cardList = cards.map((card, index) => {
      return (
        <Card characteristics={card} key={index} index={index} onFlip={this.props.onFlip}></Card>
      )
    })

    return (
      <div>
        {cardList}
      </div>
    )
  }

};

export default Grid;
