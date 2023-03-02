import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbUri = process.env.MONGO_URI;

export default async function connectDb() {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(dbUri);
    console.log("MongoDB connected: " + connect.connection.host);
  } catch (error) {
    console.log(error);
    process.exit();
  }
}
