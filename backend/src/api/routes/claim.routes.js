const express = require('express');
const router = express.Router();
const { claimPoints } = require('../controllers/claim.controller');

router.post('/', claimPoints);

module.exports = router;
