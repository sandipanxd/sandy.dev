import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import contactRoutes from "./routes/contact.js";
import contactLimiter from "./middleware/contactLimiter.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 4001;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(helmet());
app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json({ limit: "20kb" }));

app.use("/api/contact", contactLimiter, contactRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
