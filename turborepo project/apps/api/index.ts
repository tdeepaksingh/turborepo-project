import express, { type Express } from "express";
const app = express();

const port = process.env.PORT || 5001;
const server = app();

server.listen(port, () => {
  log(`api running on ${port}`);
});