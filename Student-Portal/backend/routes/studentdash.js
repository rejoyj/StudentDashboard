const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

// Get student profile by email
router.get('/profile/:email', async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.params.email });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update student profile by roll number
router.put('/:roll', async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { roll: req.params.roll },
      req.body,
      { new: true }
    );
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
