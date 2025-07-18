const mongoose = require('mongoose');

const claimHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pointsClaimed: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('ClaimHistory', claimHistorySchema);
