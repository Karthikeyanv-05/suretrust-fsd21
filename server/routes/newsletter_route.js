import express from 'express';
import { subscribeUser } from '../controllers/newsletter_controller.js';

const router = express.Router();

router.post('/subscribe', subscribeUser);

export default router;
