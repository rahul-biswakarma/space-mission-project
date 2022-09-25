import cors from "cors";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import planetRouter from "./routes/planets/planets.router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/planets", planetRouter);

app.get("/", (req, res) => {
  express.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export default app;
