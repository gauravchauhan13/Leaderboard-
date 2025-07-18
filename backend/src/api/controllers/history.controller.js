const ClaimHistory = require('../models/claimHistory.model');

exports.getClaimHistory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const history = await ClaimHistory.find({})
      .populate('userId', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalRecords = await ClaimHistory.countDocuments();
    const totalPages = Math.ceil(totalRecords / limit);

    res.status(200).json({ history, currentPage: page, totalPages, totalRecords });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching history', error: error.message });
  }
};
