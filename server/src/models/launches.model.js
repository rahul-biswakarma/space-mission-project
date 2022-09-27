const launches = new Map();

let lastestFlightNumber = 1;

const launch = {
  flightNumber: 1,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["NASA", "ISRO"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightId, launch);

function getAllLaunches(req, res) {
  return Array.from(launches.values());
}

function addNewLaunches(newLaunch) {
  lastestFlightNumber++;
  launches.set(
    lastestFlightNumber,
    Object.assign(newLaunch, {
      flightNumber: lastestFlightNumber,
      upcoming: true,
      success: true,
      customer: ["NASA", "ISRO"],
    })
  );
}

export { getAllLaunches, addNewLaunches };
