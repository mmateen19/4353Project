const { check, validationResult } = require("express-validator");
const database = require("../database/database.js");


// validation method 


const validate = (method) =>{
    switch(method){
        case "getQuote":{ 
            return [
                check("userId")
                .exists()
                .not()
                .isEmpty()
                .withMessage('Bad Request'),

              check("location")
                .exists()
                .not()
                .isEmpty()
                .withMessage('Bad Request'),

              check("gallons")
                .exists()
                .not()
                .isEmpty()
                .isNumeric()
                .custom((val, { req }) => { return req.body.gallons >= 0 })
                .withMessage('Bad Request')   
            ]
        }

        case "saveQuote":{
            return [
                check("userId")
                .exists()
                .not()
                .isEmpty()
                .withMessage('Bad Request'),
      
              check("location")
                .exists()
                .not()
                .isEmpty()
                .withMessage('Bad Request'),
      
              check("gallons")
                .exists()
                .not()
                .isEmpty()
                .withMessage('Bad Request'),
      
              check("quote")
                .exists()
                .not()
                .isEmpty()
                .withMessage('Bad Request')  
            ]
        }

        case "getHistory":{
            return [
                check("userId")
                .exists()
                .not()
                .isEmpty()
                .withMessage("Bad Request")
            ]
        }
    }
};

const saveQuote = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return res.json(result).status(200);

}


const getQuote = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return res.json(result).status(200);
  }

const getHistory = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.json(result).status(200);

}


module.exports = {
    getQuote,
    getHistory,
    saveQuote,
    validate,
  };
