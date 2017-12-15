/*jshint esversion: 6*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const publicPath = path.join(__dirname, '../public/');

const database = require('./database');

var app = express();

app.set('view engine', 'hbs');

// Middleware - Extends express app functionality.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req, res) {
  database.getAllAppointments((appointmentList) => {
      var appointments = appointmentList;
      res.render('index', {appointments: appointments});
  });
});

app.post('/addAppointment', (req, res) => {
  database.insertNewItem({name: req.body.name, date: req.body.date});

  res.redirect('/');
});

app.listen(3000, function (){
  console.log("Connected to server");
});
