const express = require("express");
const Router = require("./src/Routes/api");
const app = express();

//base url :
app.use("/api/v1", Router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "failed", data: "Not found." });
});

module.exports = app;
