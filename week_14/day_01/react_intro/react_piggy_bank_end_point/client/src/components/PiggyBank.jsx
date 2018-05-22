import React from 'react';
import PropTypes from 'prop-types';

class PiggyBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }

  addToSavings() {
    this.setState({
      total: this.state.total + this.props.changeAmount
    })
  }

  removeFromSavings() {
    this.setState({
      total: this.state.total - this.props.changeAmount
    })
  }

  render() {
    return(
    <div className="bank-box">
      <h1>{this.props.title}</h1>
      <h2>{this.props.owner}</h2>
      <p>Total: {this.state.total}</p>
      <button onClick={() => {this.addToSavings()}}>Add</button>
      <button onClick={() => {this.removeFromSavings()}}>Remove</button>
    </div>
    );
  }
}

PiggyBank.propTypes = {
  title: PropTypes.string.isRequired
};

export default PiggyBank;