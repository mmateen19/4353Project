const { check, validationResult } = require("express-validator");
const database = require("../database/database.js");
const client = require("../database/database");

const saveQuote = (req, res, next) => {
  //console.log(req.body);
  id = req.body.id;
  date = req.body.date;
  numGallons = req.body.numGallons;
  ppg = req.body.ppg;
  totalPrice = req.body.totalPrice;

  client.query(
    "INSERT INTO fuelquotes(id, gallons, quote, price, date) VALUES ($1, $2, $3, $4, $5)",
    [id, numGallons, totalPrice, ppg, date],
    (err, dbres) => {
      if (err) {
        console.log(err.stack);
      } else {
        res.json({status: true, rows:dbres.rows});
      }
    }
  );
};

const getHistory = (req, res) => {
  id = req.body.id; 
  //console.log(id);
  //console.log("Ahmed")


  client.query(
      "SELECT gallons, quote, price, date FROM fuelquotes WHERE id = $1",
      [id],
      (err, dbres) => {
          if (err){
              res.json({history: false, message:"could not query DB"});
          } else if (dbres.rowCount > 0){
              res.json({history: true, result:dbres.rows});
          } else {
              res.json({history:false, message:"no quotes found in DB"});
          }
      }
  )
};


module.exports = {
  saveQuote,
  getHistory,
};
