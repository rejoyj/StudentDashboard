const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: String,
  rollNumber: String,
});

module.exports = mongoose.model('Student', studentSchema);
