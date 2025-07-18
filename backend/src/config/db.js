const mongoose = require('mongoose');

// The connectDB function connects to the MongoDB database.
const connectDB = async () => {
  try {
    // process.env.MONGO_URI is loaded from the .env file in server.js
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected successfully.');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    // Exit the process with a failure code if connection fails
    process.exit(1);
  }
};

// This is the crucial line. It exports the connectDB function so other files can use it.
module.exports = connectDB;