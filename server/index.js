import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import userRouter from './routes/user_route.js';
import newsletterRouter from './routes/newsletter_route.js';
import path from 'path';

dotenv.config();

const app = express();

// Middleware configuration
app.use(cors());

app.use(express.json());

// Define routes for the backend API
app.use('/api/auth', userRouter);
app.use('/api/newsletter', newsletterRouter);

// Connect to the database
connectDB();

// Serve static files from the frontend dist folder
const __dirname = path.resolve(); // Handle __dirname in ES module
app.use(express.static(path.join(__dirname, 'dist')));

// For any other requests, send the index.html (for Single Page Application routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const PORT = process.env.PORT ||5000;
 app.listen(PORT, () => console.log(`Server running on http://localhost:PORT`));
// Export the app for Vercel (serverless function)
export default app;