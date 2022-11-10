const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Find that missing item!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

module.exports = app;
