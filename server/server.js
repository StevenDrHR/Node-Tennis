const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../public/');

var app = express();

app.get('/', function(req, res){
  res.sendFile(publicPath + 'index.html')
})

app.get('/about', function(req, res){
  res.sendFile(publicPath + 'about.html')
})

app.listen(3000, function (){
  console.log("Connected to server");
});
