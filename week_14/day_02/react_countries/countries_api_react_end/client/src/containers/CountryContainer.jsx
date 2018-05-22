import React from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      focusCountry: null
    };
    this.setFocusCountry = this.setFocusCountry.bind(this);
  }

  componentDidMount(){
    const url = 'https://restcountries.eu/rest/v2/all';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({ countries: data, focusCountry:data[0] });
      }
    };
    
    request.send();
  }

  setFocusCountry(country){
    this.setState({ focusCountry: country });
  }

  render(){
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector 
            countries={this.state.countries} 
            selectCountry={this.setFocusCountry} />
        <CountryDetail country={this.state.focusCountry} />
      </div>
    );
  }
}

module.exports = CountryContainer;