const express = require('express');
const router = express.Router();
const { getClaimHistory } = require('../controllers/history.controller');

router.get('/', getClaimHistory);

module.exports = router;