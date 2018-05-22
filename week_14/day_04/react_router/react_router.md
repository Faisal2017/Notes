# React Router

## Learning Objectives
 - Describe the URL in relation to one page applications
 - Explain how react router works
 - Implement react router in an application.

## Introduction
 Traditional server rendered applications would work by entering the url into the browser address bar, keeping the information and page in sync.  One page applications make the requests asynchronously,  the url therefore will get out of sync with the UI. 

 This makes navigation difficult.  React has a router module which will help us out with this.  Let's first see all the problems we mentioned in action.

# Setup
 Let's set up an application. 

 (use the start point code)

 Simple application where the Main component keeps hold of the state of the current page of what is showing. It will then switch on this choosing which view should be displayed.

# Task: Checking understanding of current application.
  Add a component and a link for a contact page.

# Adding Router
  So the application is functional, but the url does not match what the UI is showing. And if we leave or refresh the page we will always go to home page regardless where we were. Enter the need for a router. Recently npm has seperated out the modules needed into 2 packages so we will need to install both. 

```
  /client

  npm install --save react-router
  npm install --save react-router-dom
```

Let's set up the main page to work as router.

```jsx

//app.js
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Pricing from './components/Pricing.jsx'
import { hashHistory } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'

window.onload = () => {
  ReactDOM.render((
    <HashRouter history={ hashHistory }>
      <div>
        <Route path="/" component={Main} /> 
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
      </div>
    </HashRouter>
    ),
    document.getElementById('app')
  );
}
```

So as you can see above we import HashHistory from react-router to keep track of our navigation through a site. This means now when we refresh it will remember where we were. 

We then set up a path to '/' to load in the Main.jsx and an exact path to load Home.jsx whenever we land on localhost:3000/.

This means that the Main page and associated view will load whenever we visit any view that follows base url e.g. localhost:3000/about but Home page will only load on above exact url. 

We then simplify the links in the Main.jsx:

```
// Main.jsx

import React from 'react'
import About from './About.jsx'
import Home from './Home.jsx'
import Pricing from './Pricing.jsx'
import {Link} from 'react-router-dom'

class Main extends React.Component {

  render(){
    return(
      <div>
        <h4> Main App</h4>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }

}

module.exports = Main;
```
