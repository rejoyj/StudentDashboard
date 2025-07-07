const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  roll: String,
  email: { type: String, unique: true },
  phone: String,
  course: String,
  batch: String,
  branch: String,
  address: String,
  image: String,
  password: String
});

module.exports = mongoose.model('Student', studentSchema);
