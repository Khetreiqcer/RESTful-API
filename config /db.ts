import mongoose from "mongoose";
import config from "./default";
import Logger from "./logger";

const dbUri = config.dbUri;

async function connectToDb() {
  try {
    await mongoose.connect(dbUri);
    Logger.info("Connected to MongoDB");
  } catch (error) {
    Logger.error(error);
    process.exit(1);
  }
}

export default connectToDb;