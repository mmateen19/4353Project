const { body, check, validationResult } = require("express-validator");
const {database} = require("../database/database")
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");

dotenv.config();


const registerUser = (req, res, next) => 
{
    console.log(req.body);
    let data = {
        username: req.body.username,
        password: req.body.password,
        history: [], //an array of json objects
        fullName: "",
        company: "",
        address1: "",
        address2: "",
        city: "",
        zipcode: "",
        state: "",
        id: database.length + 1,
        token: "",
      };
    
      database.push(data)
      //console.log(database)
      res.json(database);

}


const logUserIn = (req, res, nex) => 
{

//     console.log(req.body);
  const userData = database.find(
    (user) => user.username === req.body.username
  );
  let pass;
  if (userData) {
    // console.log(userData)
    if (userData.password === req.body.password){
      req.session.user = userData
      //console.log(req.session.user)
      pass = userData.password;

      //Auth
      const id = userData.id
      
      const token = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET);

      userData.token = token; 

      res.json({auth: true, token: token, userData: userData})
    }
    else {
      res.json({auth: false, message: "Not Found Pass!"})
    }
  } else {
    res.json({auth: false, message: "Not Found User!"})
  }

}


function authenticateToken(req, res, next) 
{
  const token = req.headers['x-access-token']


  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) 
    {
      res.json({auth: false, message: "Failed to authenticate"});
    }
    else 
    {
      req.userId = decode.id;
      next();

    }
  });       

}



module.exports = 
{
     registerUser,
     logUserIn,
     authenticateToken,
}