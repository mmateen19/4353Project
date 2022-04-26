const { body, check, validationResult } = require("express-validator");
const { database } = require("../database/database");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const client = require("../database/database");
const bcrypt = require("bcrypt");

dotenv.config();

//TODO, this method needs to post the info from the frontend to the DB
//also need to set firsttime to be FALSE right here
const updateInfo = (req, res) => {};

//TODO, this method needs to query the info from the DB and send to the frontend
const retrieveInfo = (req, res) => {};

module.exports = {
  updateInfo,
  retrieveInfo,
};
