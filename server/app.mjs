import express from "express";
import authRoutes from "./routes/auth.route.mjs";
import { successLog } from "./utils/messageLog.mjs";

import "./db/index.mjs";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  successLog(`Server running on port ${PORT}`);
});
