const User = require('../models/user.model');
const ClaimHistory = require('../models/claimHistory.model');

exports.claimPoints = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    const randomPoints = Math.floor(Math.random() * 10) + 1;
    user.totalPoints += randomPoints;
    await user.save();
    const claimLog = new ClaimHistory({ userId: user._id, pointsClaimed: randomPoints });
    await claimLog.save();
    res.status(200).json({
      message: `Successfully claimed ${randomPoints} points for ${user.name}.`,
      user: user,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error claiming points', error: error.message });
  }
};
