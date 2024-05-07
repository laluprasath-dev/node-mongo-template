import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_URL as string
    );
    console.log(`MongoDB connected:${connection.connection.host}`);
  } catch (err: any) {
    console.log(err.message);
  }
};

export default connectDB;
