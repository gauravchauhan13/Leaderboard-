const express = require('express');
const cors = require('cors');
const userRoutes = require('./api/routes/user.routes');
const claimRoutes = require('./api/routes/claim.routes');
const historyRoutes = require('./api/routes/history.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/claim', claimRoutes);
app.use('/api/history', historyRoutes);

app.get('/', (req, res) => {
  res.send('Leaderboard API is running...');
});

module.exports = app;
