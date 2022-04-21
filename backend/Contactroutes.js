const express = require("express");
const Router = express.Router();
const contactcontroller = require("./contactcontroller.js");
Router.post("/contact", contactcontroller.sendmail);

module.exports = Router;
