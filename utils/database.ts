import mongoose from "mongoose";

const mongoDbUri: string | undefined = process.env.MONGODB_URI;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (!mongoDbUri) {
    console.error("MongoDB URI is not defined in the environment variables");
    return;
  }

  try {
    await mongoose.connect(mongoDbUri, {
      dbName: "mediawiz",
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};
