const { check, validationResult } = require("express-validator");
const database = require("../database/database.js");
const client = require("../database/database");

// validation method

const validate = (method) => {
  switch (method) {
    case "getQuote": {
      return [
        check("userId").exists().not().isEmpty().withMessage("Bad Request"),

        check("location").exists().not().isEmpty().withMessage("Bad Request"),

        check("gallons")
          .exists()
          .not()
          .isEmpty()
          .isNumeric()
          .custom((val, { req }) => {
            return req.body.gallons >= 0;
          })
          .withMessage("Bad Request"),
      ];
    }

    case "saveQuote": {
      return [
        check("userId").exists().not().isEmpty().withMessage("Bad Request"),

        check("location").exists().not().isEmpty().withMessage("Bad Request"),

        check("gallons").exists().not().isEmpty().withMessage("Bad Request"),

        check("quote").exists().not().isEmpty().withMessage("Bad Request"),
      ];
    }

    case "getHistory": {
      return [
        check("userId").exists().not().isEmpty().withMessage("Bad Request"),
      ];
    }
  }
};

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
        res.json(dbres.rows);
      }
    }
  );
};

const getQuote = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (!req.body.userId || !req.body.location || !req.body.gallons) {
    return res.sendStatus(400);
  }
  return res.status(200).json({ errors: errors.array() });
};

const getHistory = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const userId = req.body.userId;
  if (!userId) {
    return res.sendStatus(400);
  } else {
    return res.status(200).json({ errors: errors.array() });
  }
};

module.exports = {
  getQuote,
  getHistory,
  saveQuote,
  validate,
};
