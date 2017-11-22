/*jshint esversion: 6*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const publicPath = path.join(__dirname, '../public/');

var app = express();

// Middleware - Extends express app functionality.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req, res){
  res.sendFile(publicPath + 'index.html');
});

app.get('/about', function(req, res){
  res.sendFile(publicPath + 'about.html');
});

app.post('/addAppointment', (req, res) => {
  console.log(req.body.name);
  console.log(req.body.date);
});

app.listen(3000, function (){
  console.log("Connected to server");
});
