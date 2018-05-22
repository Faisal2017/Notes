# Introduction to sockets

Approx 30-45 minutes.

## Learning Objectives

- Understand the advantages of using socket.io rather than polling for changes
- Understand how to use socket.io to create a realtime multi-user application

### Introduction

> Adapt this part of the lesson based on whether the students have covered polling previously. (For example in the Bitcoin pricing lesson.)

Let's think about how we updated our Bitcoin prices earlier. We used a technique called _polling_ to repeatedly ask the server for information at predefined intervals. Although this worked OK, there are some disadvantages to such an approach:

- If the price changes _more_ frequently than our poll period, we won't be showing all the inbetween prices
- If the price changes _less_ frequently than our poll period, we are sending more requests than we need to, using more bandwidth, and putting the server under more strain.

There is a different solution to this problem of real-time updates: we're going to look at a library called socket.io.

### What is socket.io?

The socket.io website tells us that it allows "bidirectional event-based communication." But what does that mean?

Basically, it means that our client and server can have a two-way conversation, easily passing information back and forth. You can think of it like a telephone call, where one person speaks and the other responds.

By contrast, when we use polling, it's more like sending a letter to someone. You fire off a request, (maybe) get a response, then the connection is closed.

In this context, our server is Express, and our server.js file, and our client is anything looking at the front-end of our website.

Socket.io is a really powerful library that allows us to build all sorts of real-time applications, from chatrooms, to games, and much, much more.

Let's take a look at how we can use socket.io to build a chatroom.

### Our strategy

Notice that in our ChatContainer component, we have an array of messages inside the state object. When a new message is pushed onto that array, the child components re-render, showing the new message on the page.

When we submit a message, we want to pass it up to server.js instead. Then, server.js is going to broadcast this message to all connected clients, which will push this message onto their own individual states. This will trigger the same re-rendering we saw before.

It's important to note that communication in socket.io is _event based_. This means that our clients will be firing an event (which we'll call 'chat') and our server will be listening out for this event.

### Installing socket.io

> Hand out the start_point, and ask the students to set it up and spend five minutes looking over the code.

```bash
# terminal
npm install
npm start

# new terminal tab
webpack -w
```

The first thing we are going to do is install the socket.io library.

```bash
# terminal, new tab, cd back to project root
npm install --save socket.io
```

### Server

Next, we want to listen out for socket connections in our server.js file. 

We're going to bring in socket.io to work with:

```js
# server.js
var io = require('socket.io').listen(server); // ADDED
```

Next, we're going to listen out for any incoming socket connections:

```js
# server.js

var io = require('socket.io').listen(server);

// ADDED
io.sockets.on('connection', function(socket){
  
});
```

So when server.js hears an incoming connection coming in, it's going to do whatever is in the anonymous function that we've written.

Next, let's listen out for a particular event happening, and we'll call it 'chat'. 

```js
# server.js

io.sockets.on('connection', function(socket){
  // ADDED
  socket.on('chat', (message) => {
    io.sockets.emit('chat', message);
  });
});
```

So when the server receives a 'chat' event, with a message, it's going to broadcast that message to all connected clients by calling `io.sockets.emit`.

For the two arguments in this function call, we're going to label the outgoing event as 'chat' again, and we're going to broadcast the same message to all clients that we received.

That's all we need to do in the server file.

### Client

We need to tackle two things in our client code:

- Instead of pushing each new message onto our own state array, we need to push it up to the server
- We need to listen for any new messages coming in, and handle them appropriately

First of all, let's give ourselves the socket library to work with in the client.

```js
# client/components/ChatContainer.jsx

import React from 'react';
import ChatForm from '../components/ChatForm';
import Message from '../components/Message';
import io from 'socket.io-client'; // ADDED
```

Notice that we're importing the socket.io _client_ here.

Next, we need a socket instance variable to work with. We're going to use this to send and receive to and from the server.

```js
# client/components/ChatContainer.jsx

this.state = {
  messages: [],
  name: null,
  msg: null
};

// ADDED
this.socket = io('http://localhost:3000/');
```

We're going to handle sending requests up to the server next. Instead of pushing messages onto our own array, we're going to push them up to the server:

> Make sure you delete `let messages...; and this.setState({...}); from the following function

```js
# client/components/ChatContainer.jsx

submitForm(event) {
  event.preventDefault();

  // Make sure we have a name & message before proceeding
  if (this.state.name && this.state.msg) {
    // construct a new message
    let newMessage = { author: this.state.name, text: this.state.msg };

    // CHANGED
    this.socket.emit('chat', newMessage);
  }
}
```

So once we've created a new message object, we're just passing it up to the server using the socket instance variable that we created earler. Notice that we're tagging it as 'chat' - this is the event that the server is listening out for.

Finally, we need our component to listen out for any messages being sent to it.

```js
# client/components/ChatContainer.jsx, in constructor()

this.socket = io('http://localhost:3000/');
this.socket.on('chat', this.addMessage.bind(this)); // ADDED
```

We're going to write an addMessage function that handles incoming messages.

```js
# client/components/ChatContainer.jsx 

addMessage(message){
  var messages = this.state.messages;
  let newMessages = [message, ...messages];
  this.setState({
    messages: newMessages
  });
}
```

Here, we are simply taking the message that was received from the server, and adding it to the beginning of a new array. The older messages are added to the rest of the array.

(Don't forget that you shouldn't modify this.state.messages directly!)

Then, we're setting the state of our container.

We might need to restart our server and Webpack here, but at this point, everything should be working!

Open two browser windows pointing at http://localhost:3000 and test it out! You should see that chat messages sent on one client appear on the other.

### A step further

> Note that the Edinburgh network doesn't currently allow connections to other machines, so this section of the codealong won't work. However, you can demo the app at [Heroku](https://blooming-chamber-44519.herokuapp.com/). It might take a minute or two to fire up when it's first loaded.

Find your IP address by running the following command:

```bash
# terminal

ipconfig getifaddr en0
```

Test it out by asking all the students to go to http://{YOUR_IP_ADDRESS}:3000/ in their web browsers and typing a few messages.