// Load environment variables from .env file at the very top
require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

// Connect to the database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});