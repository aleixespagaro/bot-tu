import { config } from "dotenv";
config();

import express from "express";
import bot from "./bot";

const port = process.env.PORT || 3000;
const server = express();

server.use(express.static(`${__dirname}/../web/build`));

server.get("/*", (_req, res) => {
  res.sendFile(`${__dirname}/../web/build/index.html`);
});

server.listen(port, () => {
  bot();
  console.log(`🚀 Server is running on port ${port} ✨`);
});
