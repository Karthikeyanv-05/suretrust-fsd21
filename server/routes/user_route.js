import express from 'express';
import { googleAuthController, loginController, signUpController, profileController } from '../controllers/user_controller.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.post('/google_auth', googleAuthController);
router.post('/login', loginController);
router.post('/signup', signUpController);
router.get('/profile', authenticate, profileController);

export default router;
