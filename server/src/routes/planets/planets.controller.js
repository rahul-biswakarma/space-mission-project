import { habitablePlanets as planetsModel } from "../../models/planets.model.js";

export function getAllPlanets(req, res) {
  return res.json(planetsModel);
}
