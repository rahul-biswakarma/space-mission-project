import http from "http";

import app from "./app.js";
import { getPlanetData } from "./models/planets.model.js";

const PORT = process.env.PORT || 3030;

const server = http.createServer(app);

async function startServer() {
  await getPlanetData();
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
}

await startServer();
