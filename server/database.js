/*jshint esversion: 6*/
const mongoose = require('mongoose');

var AppointmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);

mongoose.connect('mongodb://localhost/tennis');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongoose is connected!');
});

function insertNewItem(newAppointment) {
  var appointment = new Appointment(newAppointment);

  appointment.save(function (err, item) {
    if (err) {
      return console.error(err);
    }

  });
}

function getAllAppointments(callback) {
  Appointment.find(function (err, appointments) {
    if (err) {
      return console.error('Could not return appointment list.', err);
    }

    callback(appointments);
  });
}

module.exports = {
  insertNewItem,
  getAllAppointments,
};
