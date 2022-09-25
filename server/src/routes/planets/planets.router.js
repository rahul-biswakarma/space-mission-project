import { Router } from "express";
import { getAllPlanets } from "./planets.controller.js";

const planetRouter = Router();

planetRouter.get("/", getAllPlanets);

export default planetRouter;
