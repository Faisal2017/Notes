# React Comments

## Learning Objectives
- Be able to create a multiple component React application
- Be able to pass data between components
- Understand the difference between state and props

## Intro
We're going to create a comments feature which displays a list of comments that have been added to a site.

We do this in React by describing how the whole page should be drawn. We can still only attach _one_ React component into our HTML in `app.js`, like we've been doing before.

So how will we put more than one component in? Our top-level component will render _other_ components.

To start off, we're going to build a static application that will render based on a hard coded array of comment data. This is often a good place to start with a React application. We can worry about hitting an API to get data from a database later, don't let that stop you from writing your front-end in React with dummy data.

## Application Structure
We are now going to create a skeleton structure for our application.

- CommentContainer { state: comments }
  - CommentList    { props: comments }
    - Comment      { props: author, text }
    - Comment      { props: author, text }
    - Comment      { props: author, text }

Components can render simple JSX elements, essentially just some HTML, but they can also render _other_ React components. Our `CommentContainer` will render `CommentList`. `CommentList` will render multiple `Comment` components.

These layers of different React components form a component **hierarchy**. It's a structure of components like a branching tree. (well, an upside down tree)

### First Component

(use react_start_point. Can rename to comments_app.)

```bash
# terminal
mv react_start_point comments_app_react
cd comments_app_react
npm install
npm start
[NEW TAB]
cd client
npm install
npm start
```

Let's build our first component, our 'Container' component. It'll be the parent component for all our others.

React components must implement a render method that returns what we want it to display. It is automatically called by React so we have to call it 'render' so that React can find it. This is part of the component lifecycle...
[React Component Specs](https://facebook.github.io/react/docs/component-specs.html) 

```bash
# terminal
mkdir client/src/components
touch client/src/components/CommentContainer.jsx
```
First let's create and render a simple component out to our page to check that everything is hooked up and working correctly.

```jsx
// CommentContainer.jsx
import React from 'react';
  
class CommentContainer extends React.Component {
  render() {
  	 return (
      <div className="comment-box">
        Hello, world! I am a CommentContainer.
      </div>
    );
  }
}

export default CommentContainer;
```

```jsx
// app.js
import React from 'react';
import ReactDOM from 'react-dom';
  
import CommentContainer from './components/CommentContainer.jsx';

window.onload = function() {
  ReactDOM.render(
    <CommentContainer />,
    document.getElementById('app')
  );
};
```

Similarly we will make the empty component for our CommentList.

```bash
# terminal
touch client/src/components/CommentList.jsx
```

```jsx
// CommentList.jsx
import React from 'react'

class CommentList extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="comment-list">
        Hello, world! I am a CommentList.
      </div>
    );
  }
}

export default CommentList;
```

We now want our CommentContainer to use this new component. Let's add it to the hierarchy.

```jsx
// CommentContainer.jsx
import React from 'react';

import CommentList from './CommentList';

class CommentContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="commentContainer">
        <CommentList />
      </div>
    );
  }
}

export default CommentContainer;
```

## Comment Component

### Properties
Let's create the Comment component, which will depend on data passed in from its parent. Data passed in from a parent component is available as a 'property' on the child component. These 'properties' are accessed through `this.props`. A special property is `this.props.children`, which refers to any text or elements written between the JSX opening and closing tags.

Properties are immutable,  components can not change their properties,  they are just given them. Using props, we will be able to read the data passed to the Comment from the CommentList, and render some markup:

```bash
# terminal
touch client/src/components/Comment.jsx
```
```jsx
// CommentList.jsx
import React from 'react';
import Comment from './Comment.jsx';

class CommentList extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="comment-list">
        <Comment author="Rick Henry">Cool</Comment>
        <Comment author="Valerie Gibson">Nice</Comment>
      </div>
    );
  }
}

export default CommentList;
```

```jsx
// Comment.jsx
import React from 'react';

class Comment extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="comment">
        <h4 className="commentAuthor">
          { this.props.author }
        </h4>
        { this.props.children }
      </div>
    );
  }
}

export default Comment;

```

## Data Model
We have hard coded the data in a list of comments.

We now want to create a simple array of comments which will be drawn by the view.

We are going to set up our CommentContainer to be in control of the data.

It will handle the comment data, and later on updating it.

## State
Our CommentContainer is going to be the master of the state of our application, the array of comments.

For now we'll just make some mock data.  If we were creating a proper app we could get this from our server.

```jsx
// CommentContainer.jsx
var sampleData = [
   { id: 1, author: "Rick Henry", text: "Cool" },
   { id: 2, author: "Valerie Gibson", text: "This is a comment" }
 ];
 
class CommentContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = { data: sampleData };
  }
 
  render() {
    return (
      <div className="commentContainer">
        <h1>Comments</h1>
        <CommentList data={ this.state.data } />
      </div>
    );
  }
}
```

Our comment box controls state and creates a dumb list. 

This list has no state (things it can change), it just has the comments it has been given and uses as properties.  We'll create an array of comment components and give them the properties of the author and the text.

Any string put inside our tags can be accessed as children properties.  React wants a key element on array items to uniquely identify them.

```jsx
class CommentList extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    var commentComponents = this.props.data.map(function(comment) {
      return (
        <Comment author={ comment.author } key={ comment.id }>
          { comment.text }
        </Comment>
      );
    });

    return (
      <div className="commentList">
        { commentComponents }
      </div>
    );
  }
}
```

Great we've created our UI to render comments out of these three React Components.

The next step might be to add a form to add new comments, or to get the list of comments from a request to an API. Both of these can be done really nicely in React. But we'll look at API requests tomorrow.
