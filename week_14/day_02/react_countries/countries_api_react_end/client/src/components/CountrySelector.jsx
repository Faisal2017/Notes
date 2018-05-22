import React from 'react';

class CountrySelector extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedIndex: undefined
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});

    const selectedCountry = this.props.countries[newIndex];
    this.props.selectCountry(selectedCountry);
  }

  render() {
    const options = this.props.countries.map((country, index) => {
      return <option value={index} key={index}>{country.name}</option>;
    });

    return (
      <select id="countries" value={ this.state.selectedIndex } onChange={ this.handleChange }>
        { options }
      </select>
    );
  }
}

module.exports = CountrySelector;