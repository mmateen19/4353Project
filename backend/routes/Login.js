// const { body, check, validationResult } = require("express-validator");
// const {database} = require("../database/database")
// const jwt = require('jsonwebtoken')
// const dotenv = require("dotenv");

// dotenv.config();


// const registerUser = (req, res, next) => 
// {

//     const errors = validationResult(req);

//     if (!errors.isEmpty())
//     {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     //console.log(req.body)
//     let data = {
//         username: req.body.username,
//         password: req.body.password,
//         history: [], //an array of json objects
//         fullName: "",
//         company: "",
//         address1: "",
//         address2: "",
//         city: "",
//         zipcode: "",
//         state: "",
//         id: database.length + 1,
//         authToken: "",
//       };
    
//       database.push(data)
//       res.json(database);

// }


// const logUserIn = (req, res, nex) => 
// {

//     // const errors = validationResult(req);

//     // if (!errors.isEmpty())
//     // {
//     //     return res.status(400).json({ errors: errors.array() });
//     // }
    
//     console.log(req.body)
//     const username = req.body.username;
//     const password = req.body.password;

//     const userData = database.find(
//         (user) => user.username === req.body.username
//       );
//       let pass;
//       if (userData) {
//         //console.log(userData)
//         if (userData.password == req.body.password){
          
//           //console.log(req.session.user)
//           pass = userData.password;
    
//           //Auth
//           const id = userData.id
//           const token = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {
//             expiresIn: 300,
//           });

//           req.session.user = userData

//           res.json({authentication: true, token: token, userId: userData.id})
//         }
//         else {
//             return res.json({authentication: false, message: "Password doesn't match"})
//         }
//       } else {
//         return res.json({authentication: false, message: "User not found"})
//       }

// }


// const checkAuth = (res, req, nex) =>
// {
//   const authHeader = req.headers['x-access-token'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//     if (err) 
//     {
//       res.json({auth: false, message: "Failed to authenticate"});
//     }
//     else 
//     {
//       req.userId = decoded.id;
//       next();

//     }
//   });       

// }



// module.exports = 
// {
//     registerUser,
//     logUserIn,
//     checkAuth,
// }