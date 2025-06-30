const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes'); // ✅ IMPORT ROUTES FIRST

const app = express(); // ✅ DEFINE app BEFORE using it

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/admin', adminRoutes); // ✅ AFTER app is defined

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/studentportal');
mongoose.connection.once('open', () => {
  console.log('✅  Connected to MongoDB');
});

// Default test route
app.get('/', (req, res) => {
  res.send('MongoDB + Node.js + Express backend is live!');
});

// Start server
app.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});
