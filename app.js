import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import templateRoutes from "./routes/template.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/templates", templateRoutes);

export default app;
