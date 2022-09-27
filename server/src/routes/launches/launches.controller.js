import { getAllLaunches, addNewLaunches } from "../../models/launches.model.js";

function httpGetAllLaunches(req, res) {
  return res.json(getAllLaunches());
}

function httpAddNewLaunches(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  addNewLaunches(launch);
  return res.status(201).json(launch);
}

export { httpGetAllLaunches, httpAddNewLaunches };
