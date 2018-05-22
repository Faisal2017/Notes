var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));


  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');

});
