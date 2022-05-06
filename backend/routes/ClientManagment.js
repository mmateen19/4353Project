const { body, check, validationResult } = require("express-validator");
const { database } = require("../database/database");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const client = require("../database/database");
const bcrypt = require("bcrypt");

dotenv.config();

const home = (req, res) => {
  id = req.body.id;

  client.query(
    "SELECT fullname FROM clientinfo WHERE id = $1",
    [id],
    (err, dbres) => {
      if (err) {
        res.json({ exists: false, message: "Could not Query DB" });
      } else if (dbres.rowCount > 0) {
        res.json({ exists: true, info: dbres.rows[0] });
      } else {
        res.json({ exists: false, message: "Not Found User!" });
      }
    }
  );
};

//this method needs to post the info from the frontend to the DB
const updateInfo = (req, res) => {
  console.log(req.body);
  id = req.body.id;
  fullName = req.body.fullName;
  company = req.body.company;
  address1 = req.body.address1;
  address2 = req.body.address2;
  city = req.body.city;
  zipcode = req.body.zipcode;
  state = req.body.state;
  firstTime = "FALSE";

  //need to do another insert to the user table to update firsttime?

  client.query(
    "UPDATE users SET firsttime = $1 WHERE id = $2",
    [firstTime, id],
    (err, dbres) => {
      if (err) {
        return res.json({status: false, rows: dbres.rows});
      } else {
        //res.json(dbres.rows);
      }
    }
  );

  client.query(
    "UPDATE clientinfo SET (fullname, company, address1, address2, city, zipcode, state) = ($1, $2, $3, $4, $5, $6, $7) WHERE id = $8",
    [fullName, company, address1, address2, city, zipcode, state, id],
    (err, dbres) => {
      if (err) {
        return res.json({status: false, rows: dbres.rows});
      } else {
        if (dbres.rowCount > 0) {
          res.json({status: true, rows: dbres.rows});
        }
        else{
          res.json({status: false, rows: dbres.rows});
        }
      }
    }
  );
};

//this method needs to query the info from the DB and send to the frontend
const retrieveInfo = (req, res) => {
  id = req.body.id;

  client.query("SELECT * FROM clientinfo WHERE id = $1", [id], (err, dbres) => {
    if (err) {
      res.json({ auth: false, message: "Could not Query DB" });
    } else if (dbres.rowCount > 0) {
      res.json({ auth: true, info: dbres.rows[0] });
    } else {
      res.json({ auth: false, message: "Not Found User!" });
    }
  });
};

module.exports = {
  updateInfo,
  retrieveInfo,
  home,
};
