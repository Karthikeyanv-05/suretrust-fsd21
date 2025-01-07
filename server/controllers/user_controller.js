import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user_entity.js';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const signUpController = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ message: 'User already exists' });
    const newUser = new User({ email, name, password });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const googleAuthController = async (req, res) => {
  const { tokenId } = req.body;
  try {
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`);
    const data = await response.json();
    if (!data.email) return res.status(400).json({ message: 'Google Authentication failed' });
    let user = await User.findOne({ email: data.email });
    if (!user) {
      user = new User({ email: data.email, name: data.name, authSource: 'google', picture: data.picture });
      await user.save();
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const profileController = async (req, res) => {
  res.json(req.user);
};
