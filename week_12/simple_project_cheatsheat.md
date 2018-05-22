# Full Stack cheatsheat (Quotes example)

## Server

Okay, so first things first, we want a server right now. No HTML or any front end, we just want a simple server running. Lets make a new directory.

```
    mkdir quotes
```

```
    cd quotes
```

Now, i need to set up my package.json, since if i give my project to other devs, they need my dependencies.

```
    npm init
```

Cool, okay, i got my package.json. Now let me get my first depedency. Which is express. We will also add it to our package.json so other devs know what we need.

```
    npm install --save express
```

We should have a node_modules folder. Lets not add that to git shall we, quite a lot of files.

```
    touch .gitignore
```

Open sublime

```
    subl .
```

Now in .gitignore. type

```
    node_modules
```

Now its ignored, good.

Okay, so lets now create a new js file, which will be the entry point for our server. Lets call it server.js.

```
    touch server.js
```

And lets set up our server. If you guys remember, we need to require express. Call its function and then tell the server to listen on a port.

```
    var express = require('express');
    var app = express();

    app.listen(3000, function(){
      console.log("Listening on port 3000");
    });
```

Now to run our server we just type in our terminal.

```
    nodemon server.js
```

Which is a nice tool that will monitor our file for changes and rerun it. Cool. But we might not always rely on nodemon, maybe we want to abstract our commands away so that if they change, we don't care. So kill the server, and in package.json type:

```
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "nodemon server.js"
    },
```

Now we can just type

```
    npm start
```

And it will run the same command but now we can swap them and nobody has to worry. Cool, okay now our server is running, happy days, expect its not responding to anything. So lets set up our first route. We will make it a get request to /quotes and it will always return an empty array for now. So in server.js

```
    app.get('/quotes', function(req, res){
      res.json([]);
    });
```

Okay now go to localhost:3000/quotes and we will get an empty array. Sweeeet.

So what do we need to do now? Well personally it be nice to get my database setup so I can be good to go. So first things first! Lets start mongo. So open a new terminal and type.

```
    mongod
```

Cool, our database is up and running. Right, next we need to use the mongodb library. We also want to include it in our package.json as a dependency (Again so other devs and deployment scripts can know its needed).

```
    npm install --save mongodb
```

Please note that this is not mongodb the database server we are installing, its just a javascript library that makes it easier for us to talk to mongodb.

So now, back to our server.js. We want to change it so that when our server file is run, it will connect to our database and then start the server, as in our case, if we could not connect to the database then the server is pointless.

So lets change our server.js. It will look like this:

```
    var express = require('express');
    var app = express();
    var mongoClient = require('mongodb').MongoClient;

    mongoClient.connect('mongodb://localhost:27017/quotes', function(err, db) {
        if (err) { 
          console.log(err);
          return;
        }

        console.log("Connected to the database :)");

        app.get('/quotes', function(req, res){
          res.json([]);
        });

        app.listen(3000, function(){
          console.log("Listening on port 3000");
        });  
      
      });
```

Cool, now our terminal says we are connected and server is starting. Sweet!! So what now? Well lets fix up our get request to query the server instead of hard coding the return. 

Okay, so we will use our nice db object that we got in our callback to fetch all the items.

```
    app.get('/quotes', function(req, res){
      db.collection('myquotes').find().toArray(function(err, result) {
        res.json(result);
      });
    });
```

So the find method returns what is called a cursor object, which has a toArray function that will give me a list of all my found items. So go back to localhost:3000/quotes and still empty, so what can i do to quickly test this?

Well we can use the mongo client to manually add a quote and then just check if it was added. Open a new terminal

```
    mongo
```

then type

```
    use farm;
    db.myquotes.insert({quote: "hi"});
```

Now, we go back to localhost:3000/quotes and we see our new quote. Sweet, a basic setup so far. Okay, for next one, what we want to do is handle post so we can add items. 

Problem is we need to add a new library that makes our job a bit easier. The body-parser library makes accessing the body super easy. (Otherwise we have to write a bit extra, not overly complicated but no need to if someone made it easier for us).

So in our terminal

```
    npm install --save body-parser
```

And in our server.js we will require it. 

```
    var parser = require('body-parser');
```

Then we tell our express to use the body-parser and it will handle the rest.

```
    app.use(parser.json());
```

Now that I can easily access the body. I can write my post request. Inside server.js

```
    app.post('/quotes', function(req, res) {
      db.collection('myquotes').save(req.body, function(err, result) {
        res.json(result);
      });
    });
```

Now lets test it using insomnia. Do a post to localhost:3000/quotes and the body to look like

```
    {
        "quote": "hi"
    }
```

Then do a get to localhost:3000/quotes and we should see our new quote. Cool. 

Okay, so we have a simple restful web api server. So lets set up our UI stuff. 
First though we need to tell express what our static directory is, so that requests can default to that directory (so /img.jpg etc will check our static directory).

Inside our quotes directory. Type:

```
    mkdir -p client/build
```

And then create an index.html inside that folder.

```
    touch client/build/index.html
```

Inside that .html file. Lets add some simple html.

```
    <html>
      <body>
        Hi!
      </body>
    </html>
```

So how can we serve our index.html. Inside server.js

```
    app.use(express.static('client/build'));
```

Interesting to note, the default behaviours of servers is to search for index.html if you go to the root page. So localhost:3000/ is the same as saying localhost:3000/index.html. Which is handy, we dont need to write a get request to server that html.

Okay, so we got our server and some simple HTML. But we know that we are gonna have to write some javascript for the front end, and we dont want our index.html to be cluttered with script tags and all the messy stuff associated with that. So we are gonna set up our webpack.

First things first, lets install webpack as a dev dependency.

```
    npm install --save-dev webpack
```

We will say that all our javascript for front end will be in our client folder but we will create a src folder also.

```
    mkdir client/src
```

Create our entry point for our ui.

```
    touch client/src/app.js
```

Next thing is set up our webpack config, we want to tell it our entry point and to do some fancy stuff to make our development life a bit easier. So create our webpack config.

```
    touch client/webpack.config.js
```

And in our new file lets type

```
    config = {
      entry: __dirname + "/src/app.js",
      output: {
        filename: "bundle.js",
        path: __dirname + "/build"
      },
      devtool: 'source-map'
    }

    module.exports = config;
```

Like with npm start, we want to write a script incase we ever need to update what bundle tool to use or something.

So in package.json. 

```
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "nodemon server.js",
      "bundle": "cd client && webpack -w"
    },
```

Now

```
    npm run bundle
```

And finally in our index.html

```
    <html>
      <head>
      <script src="bundle.js"></script>
      </head>
      <body>
        Hi!
      </body>
    </html>
```

Okay, so we got it all included. Going forward you should be able to

* Add a window.addEventListener('load', function() {}) in app.js.
* Write a form and some js to show the quotes (using XMLHttpRequest);

I will update this to include UI but for now this should help a bit.

Good luck!
