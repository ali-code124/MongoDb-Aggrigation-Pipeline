// teacher.js
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Teacher_DB");

// Define schema
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  }
});

// Define model
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;

