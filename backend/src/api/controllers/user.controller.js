const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await User.find({}).sort({ totalPoints: -1 }).skip(skip).limit(limit);
    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);

    res.status(200).json({ users, currentPage: page, totalPages, totalUsers });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'User name is required.' });
    }
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: 'A user with this name already exists.' });
    }
    const newUser = new User({ name });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};
