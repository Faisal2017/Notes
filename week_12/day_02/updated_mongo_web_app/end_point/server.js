var express = require('express');
var parser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var app = express();
var path = require("path");
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

mongoClient.connect('mongodb://localhost:27017/star_wars', function(err, database) {
  if (err) { 
    console.log(err);
    return;
  }
  
  app.get('/quotes', function(req, res) {
   database.collection('quotes').find().toArray(function(err, results){
      res.json(results);
   });
  });

  app.post('/quotes', function(req, res) {
   database.collection('quotes').save(req.body, function(err, result) {
    if (err) {
      console.log(err);
    } 
    res.redirect('/');
   });

  });

   app.post('/delete', function(req, res) {
    database.collection('quotes').remove();
    res.redirect('/');
   });

  console.log('Connected to database');
  
  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});
