import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Pricing from './Pricing'
import Contact from './Contact'
import {Link} from 'react-router-dom'

class Main extends Component {


  render() {
    
    return (
      <div>
        <h4>Main App</h4>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
export default Main;
