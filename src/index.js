import "dotenv/config";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
    try {
        console.log("MONGODB_URI:", process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log(
            `MongoDB Connected!! DB Host: ${connectionInstance.connection.host}`
        );

        console.log(
            `MongoDB Database: ${connectionInstance.connection.name}`
        );

        return connectionInstance;
    } catch (error) {
        console.log("MongoDB connection FAILED:", error);
        throw error;
    }
};

export default connectDB;
connectDB();