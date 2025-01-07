import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user_entity.js';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticate = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token is required' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.userId);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
