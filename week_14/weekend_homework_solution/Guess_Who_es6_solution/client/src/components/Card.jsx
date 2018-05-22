import React from 'react';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip() {
    this.props.onFlip(this.props.index);
  }

  render() {
    let classes = "unflipped"
    if(this.props.characteristics.flipped){
      classes = "flipped"
    }
    return(
      <section className="container">
        <div id="card" className={classes} onClick={this.handleFlip}>
          <figure className="card-front" style={{backgroundImage: "url('" + this.props.characteristics.image + "')"}}></figure>
          <figure className="card-back"></figure>
        </div>
      </section>
    )
  }

}

export default Card;
