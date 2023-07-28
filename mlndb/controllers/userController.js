const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUserByUsername = async (req, res) => {
  const username = req.params.username;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createUser = async (req, res) => {
  const userData = req.body;
  try {
    const user = await User.create(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateUser = async (req, res) => {
  const username = req.params.username;
  const userData = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate({ username }, userData, { new: true });
    if (!updatedUser) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
  const username = req.params.username;
  try {
    const deletedUser = await User.findOneAndRemove({ username });
    if (!deletedUser) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(deletedUser);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
