import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import userRouter from './routes/user_route.js';
import newsletterRouter from './routes/newsletter_route.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET, POST, PUT, DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
}));

app.use(express.json());
app.use('/api/auth', userRouter);
app.use('/api/newsletter', newsletterRouter);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
