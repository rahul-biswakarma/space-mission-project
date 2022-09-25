import cors from "cors";
import express from "express";
import planetRouter from "./routes/planets/planets.router.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/planets", planetRouter);

export default app;
