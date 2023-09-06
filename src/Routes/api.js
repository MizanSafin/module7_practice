const express = require("express");
const helloController = require("../Controllers/helloController");
const Router = express.Router();

Router.get("/hello-get", helloController.greetingGet);
Router.post("/hello-post", helloController.greetingPost);

module.exports = Router;
