const dotenv = require("dotenv");
const client = require("../database/database");
dotenv.config();

//Ahmed TODO
const calculate = (req, res) => {
  id = req.body.id;
  numgallons = req.body.numgallons;
  //need to request db for num of rows in fuelquotes to know if has history
  //need to request db for location as well

  //TODO math to calculate
  estpricepergall = 0;
  totalPrice = 0;

  //sends back up the ppg and the totalPrice after calculating it
  res.json({ price: totalPrice, ppg: estpricepergall });
};

module.exports = {
  calculate,
};
