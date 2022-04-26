const { body, check, validationResult } = require("express-validator");
const { database } = require("../database/database");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const client = require("../database/database");
const bcrypt = require("bcrypt");

dotenv.config();

//TODO, this method needs to post the info from the frontend to the DB
const updateInfo = (req, res) => {
  console.log(req.body);
  fullName = req.body.fullName;
  company = req.body.company;
  address1 = req.body.address1;
  address2 = req.body.address2;
  city = req.body.city;
  zipcode = req.body.zipcode;
  state = req.body.state;
  firstTime = "FALSE";

  //TODO with ahmed. does it need username and auth to go with it?
  client.query("INSERT INTO clientinfo() VALUES ()", [], (err, dbres) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.json(dbres.rows);
    }
  });
};

//this method needs to query the info from the DB and send to the frontend
const retrieveInfo = (req, res) => {
  username = req.body.username;

  client.query(
    "SELECT * FROM clientinfo WHERE username = $1",
    [username],
    (err, dbres) => {
      if (err) {
        res.json({ auth: false, message: "Could not Query DB" });
      } else if (dbres.rowCount > 0) {
        res.json({ auth: true, info: dbres.rows[0] });
      } else {
        res.json({ auth: false, message: "Not Found User!" });
      }
    }
  );
};

module.exports = {
  updateInfo,
  retrieveInfo,
};
