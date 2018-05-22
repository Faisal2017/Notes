var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var STAFF_JSON = path.join(__dirname, 'data/staff.json');
var LOTR_JSON = path.join(__dirname, 'data/lotr.json');
var HP_JSON = path.join(__dirname, 'data/hp.json');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/api/characters/staff', function(req, res){
  fs.readFile(STAFF_JSON, function(err, data){
    if(err) process.exit(1);

    res.json(JSON.parse(data));
  })
})

app.get('/api/characters/lotr', function(req, res){
  fs.readFile(LOTR_JSON, function(err, data){
    if(err) process.exit(1);

    res.json(JSON.parse(data));
  })
})

app.get('/api/characters/hp', function(req, res){
  fs.readFile(HP_JSON, function(err, data){
    if(err) process.exit(1);

    res.json(JSON.parse(data));
  })
})

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
