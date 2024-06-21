import express from "express";
import { successLog } from "./utils/messageLog.mjs";

import "./db/index.mjs";

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  successLog(`Server running on port ${PORT}`);
});
