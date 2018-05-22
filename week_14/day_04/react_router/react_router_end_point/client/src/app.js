import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import About from './components/About'
import Home from './components/Home'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import { hashHistory } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'



window.onload = () => {
  render((
      <HashRouter history={ hashHistory}>
        <div>
          <Route path="/" component={Main} />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    ),
    document.getElementById('app')
  )
}
