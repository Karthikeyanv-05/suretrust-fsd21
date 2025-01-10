import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURL = process.env.uri;

if (!mongoURL) {
    console.error("MongoDB connection string is missing in .env file. Please define MONGOURL.");
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connection established successfully.");
    } catch (error) {
        console.error("Mongoose connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
