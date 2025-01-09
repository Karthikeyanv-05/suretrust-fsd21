import express from 'express';
import { googleAuthController, loginController, signUpController, profileController } from '../controllers/user_controller.js';
import  authenticate from '../middleware/authenticate.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

const validateSignup = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  body('name').notEmpty().withMessage('Name is required'),
];

const validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/google_auth', googleAuthController);

router.post('/login', validateLogin, handleValidationErrors, loginController);

router.post('/signup', validateSignup, handleValidationErrors, signUpController);

router.get('/profile', authenticate, profileController);

router

export default router;
