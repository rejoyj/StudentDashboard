const mongoose = require('mongoose');
const Admin = require('./models/Admin');

mongoose.connect('mongodb://127.0.0.1:27017/studentportal');

mongoose.connection.once('open', async () => {
  try {
    await Admin.create({ email: 'admin@iiitb.com', password: 'admin123' });
    console.log('✅ Admin created');
  } catch (err) {
    console.error('❌ Error creating admin:', err.message);
  } finally {
    mongoose.connection.close();
  }
});
