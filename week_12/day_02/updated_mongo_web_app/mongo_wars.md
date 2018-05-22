# Mongo Web App

## Learning Objectives
- Understand how to use Mongo in our JS
- Perform a GET request on an API which uses a Mongo database.
- Perform a POST request on an API which uses a Mongo database.

## Duration
2 hours

# Intro

We’re going to build an application simple list application that allows you to keep track of things within a list (like a Todo List for example).

Well, a todo list is kind of boring. How about we make a list of quotes from Star wars characters instead? Awesome, isn’t it?

What we’re building isn’t a sexy single page app. We’re mainly focusing on how to use CRUD, Express and Mongo DB in this lesson, so, more server-side stuff.

- Hand out start code

Lets start by installing the dependencies we will need.

```
#terminal > star_wars_quotes

npm install

```

Lets start our server and webpack.

```
#terminal > root

nodemon server.js
```

```
#new terminal window!

cd client
webpack - w
```
Make sure mongod is running as well. 

You will see that there is a form to enter in the quotes and 2 buttons. One to save and one to delete all quotes. 

### CRUD - READ - Part 1.

The READ operation is performed by browsers whenever you visit a webpage. Under the hood, browsers sends a GET request to the server to perform a READ operation. 

As we have seen, we handle a GET request with the get method:

```
app.get(path, callback)
```

### CRUD - CREATE

The CREATE operation is performed only by the browser if a POST request is sent to the server. This POST request can triggered either with JavaScript or through a <form> element.

Lets start with creating the quotes. 

We will do this without using the form first of all tho ensure that we can save them to Mongo. 

As we are going to store our quotes in a Mongo DB we first have to install MongoDB through npm if we want to use it as our database.

```
#terminal

npm install mongodb --save
```

Once installed, we can connect to MongoDB through the Mongo.Client‘s connect method.

Start by requiring the MongoClient then setting up our connection. We will also move our server start up code so that the server only starts when connected to the mongo DB.

```
#server.js

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/star_wars', function(err, database) {
  if (err){ 
    console.log(err);
    return;
  }

  console.log('Connected to database');
  app.listen(3000, function(){ 
    console.log("Listening on port 3000"); 
  }); 
})
```

Wait... We haven't created a star wars database in Mongo?? We don't have to. When Mongo tries to connect to the star_wars db it will create it if it doesn't exist...Voodoo!!

We’re done setting up MongoDB. Now, let’s create a quotes collection to store quotes for our application.

We can create the quotes collection by using the string quotes while calling MongoDB’s database.collection() method. While creating the quotes collection, we can also save our first entry into MongoDB with the save method simultaneously.

```

MongoClient.connect('mongodb://localhost:27017/star_wars', function(err, database) {
  if (err){ 
    console.log(err);
    return;
  }

  //add post code here so that we have access to database object
  app.post('/quotes', function(req, res) {
    database.collection('quotes').save(req.body, function(err, result) {
      if (err) {
        console.log(err)
        return;
      }

      res.json(result)
    })
  })

  console.log('Connected to database');
  app.listen(3000, function(){ 
    console.log("Listening on port 3000"); 
  }); 
})
```
We can try now try this out in Insomnia. 

Open insomnia and create a post request to localhost:3000/quotes and put 2 entries in the body for name and quote. 

You will notice that we get a json response that says 

```
  {
    "n": "1",
    "ok": "1"
  }
```

which shows us we created 1 element. All good!.

### CRUD - READ Part 2

Since we now have some quotes in the collection, why not try showing them to our user when they land on our page?

We can get the quotes from Mongo by using the find method that’s available in the collection method.

We will write another app.get function that will return the JSON data when called. This will then be redered to the HTML page. We will not have to type this url in to the browser as the information will display at localhost:3000/.

```
#server.js
//just below the app.post we created
app.get('/quotes', function(req, res) {
  database.collection('quotes').find().toArray(function(err, results){
    res.json(results);
  });
});
```

When this is written, lets test using insomnia to make sure we are all good.

Okay cool, now we can use insomnia to get all quotes, and create new quotes. Amazing.


### Showing quotes in the UI

So we want all our quotes to display in the UI, all we need to do is perform a GET request using XMLHttpRequest (just like with countries api).

So in app.js, we want to perform the request, convert the result to a javascript object, and then call our nice quoteview object.

Luckily enough, quoteView is already created and handles everything with rendering so we should be good to go if we write.

```
app.js

var QuoteView = require('./views/quoteView');

var app = function(){
  var url = "http://localhost:3000/quotes";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return ;
  var quoteString = this.responseText;
  var quotes = JSON.parse(quoteString);
  var ui = new QuoteView(quotes);
}

window.addEventListener('load', app);
```

Lets check it out navigate to your browser and you should see the quotes you added from earlier.

Yay!!

### Using the form to post data.

So now lets add some quotes using the form. 

We have already added our route to POST the data in server.js so what we need to do is amend the form to POST to this route when button is clicked.

```
index.html

<form action="/quotes" method="POST"> //NEW
  <input type="text" placeholder="name" name="name">
  <input type="text" placeholder="quote" name="quote">
  <button type="submit">Submit</button>
</form>
```
now when the submit button is clicked the form passes the name and quote to the /quotes route as a POST request.

Give it a try. refresh the browser and enter in a quote and submit. Unfortunately it seems to show us the same page we saw when we posted using insomnia. So what can we do?

Well, if you remember from the sinatra days, forms will always go to a new page, in our case /quotes (Since that is what the action does). But posting to /quotes will return json. Maybe instead of returning json, we can tell it to redirect back to / and which is essentially saying "refresh the page". That refresh will load again and in turn, load all the quotes from scratch. Pretty handy! So just change our post to 

```
  app.post('/quotes', function(req, res) {
    database.collection('quotes').save(req.body, function(err, result) {
      if (err) {
        console.log(err)
        return;
      }

      //changed from res.json to redirect to home page
      res.redirect('/')
    })
  })
```

### Task

Look at the submit button. Add the functionality to delete all of the quotes from the database using this button. 

Hint - You will need to add in a new post route to server.js which may be called on a request to /delete.

#### Solution

```
app.post('/delete', function(req, res) {
   database.collection('quotes').remove();
   res.redirect('/');
});

```