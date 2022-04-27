const { body, check, validationResult } = require("express-validator");
const { database } = require("../database/database");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const client = require("../database/database");
const bcrypt = require("bcrypt");

dotenv.config();

const registerUser = (req, res, next) => {
  //console.log(req.body);
  username = req.body.username;
  password = req.body.password;
  firstTime = "TRUE";

  bcrypt.hash(password, parseInt(process.env.SALTROUNDS), (err, hash) => {
    if (err) {
      console.log(err);
    }

    client.query(
      "INSERT INTO users(username, password, firsttime) VALUES ($1, $2, $3)",
      [username, hash, firstTime],
      (err, dbres) => {
        if (err) {
          res.json({reg: false, resp:err.stack});
        } else {
          console.log(dbres.rows)
          res.json({res: true, dbres: dbres.rows});
        }
      }
    );
  });
};

const logUserIn = (req, res, nex) => {
  const username = req.body.username;
  const password = req.body.password;

  client.query(
    "SELECT * FROM users WHERE username = $1",
    [username],
    (err, dbres) => {
      if (err) {
        res.json({ auth: false, message: "Could not Query DB" });
      } else if (dbres.rowCount > 0) {
        bcrypt.compare(password, dbres.rows[0].password, (error, response) => {
          if (response) {
            req.session.user = response;
            //console.log(dbres.rows[0]);
            //Auth
            const id = response.id;
            const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);
            res.json({ auth: true, token: token, userData: dbres.rows[0] });
          } else {
            res.json({ auth: false, message: "Not Found Pass!" });
          }
        });
      } else {
        res.json({ auth: false, message: "Not Found User!" });
      }
    }
  );
};

function authenticateToken(req, res, next) {
  const token = req.headers["x-access-token"];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) {
      res.json({ auth: false, message: "Failed to authenticate" });
    } else {
      req.userId = decode.id;
      next();
    }
  });
}

module.exports = {
  registerUser,
  logUserIn,
  authenticateToken,
};
