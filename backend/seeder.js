const mongoose = require('mongoose');
const User = require('./src/api/models/user.model');
require('dotenv').config();

// A collection of 10 sample users, including the ones you requested.
const users = [
  { name: 'Rahul' },
  { name: 'Kamal' },
  { name: 'Sanaka' },
  { name: 'Priya' },
  { name: 'Amit' },
  { name: 'Deepika' },
  { name: 'Vikram' },
  { name: 'Anjali' },
  { name: 'Rohan' },
  { name: 'Isha' },
];

const seedDB = async () => {
  try {
    // Ensure the MONGO_URI is present in the .env file
    if (!process.env.MONGO_URI) {
      console.error('MONGO_URI not found in .env file. Please add it.');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding.');

    // Clear existing users to prevent duplicates on re-run
    await User.deleteMany({});
    console.log('Existing users cleared.');

    // Insert the new users into the 'users' collection
    await User.insertMany(users);
    console.log('Database seeded successfully with 10 users!');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from the database after the script finishes
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
  }
};

// Run the seeder function
seedDB();
