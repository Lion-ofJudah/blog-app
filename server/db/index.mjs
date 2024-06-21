import mongoose from "mongoose";
import { successLog, errorLog } from "../utils/messageLog.mjs";

import dotenv from "dotenv";

dotenv.config();

main().catch((error) => errorLog(error));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);

  successLog("Connected to MongoDB");
}
