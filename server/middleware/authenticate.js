import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user_entity.js';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

 const authenticate = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token is required' });
  }
  const tokenParts = token.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(400).json({ message: 'Malformed token' });
  }

  try {
    const decoded = jwt.verify(tokenParts[1], JWT_SECRET);
  
    req.user = await User.findById(decoded.userId);

    if (!req.user) {
      return res.status(404).json({ message: 'User not found' });
    }

    next(); 
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired' });
    }
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authenticate;
