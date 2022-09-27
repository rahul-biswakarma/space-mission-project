import { Router } from "express";

import {
  httpGetAllLaunches,
  httpAddNewLaunches,
} from "./launches.controller.js";

const launchesRouter = Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunches);

export default launchesRouter;
