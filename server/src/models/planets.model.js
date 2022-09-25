import path from "path";
import { parse } from "csv-parse";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";

const habitablePlanets = [];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] == "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

async function getPlanetData() {
  return new Promise((resolve, reject) => {
    createReadStream(path.join(__dirname, "..", "..", "data", "kepler.csv"))
      .pipe(parse({ comment: "#", columns: true }))
      .on("data", (data) => {
        if (isHabitablePlanet(data)) habitablePlanets.push(data);
      })
      .on("error", (error) => {
        console.log(`Error encounterd on getPlanetData: ${error}`);
        reject(error);
      })
      .on("end", () => {
        console.log(`Total habitbale planets: ${habitablePlanets.length}`);
        resolve();
      });
  });
}

export { getPlanetData, habitablePlanets };
