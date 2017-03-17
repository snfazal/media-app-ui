// server.js
var express = require('express');
var logger  = require('morgan');
var app     = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(4000, function(){
  console.log(`================`);
  console.log(`ALWAYS LISTENING`);
  console.log(`================`);
});
