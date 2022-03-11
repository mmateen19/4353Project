const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
require("dotenv").config();

let bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const Login = require("./routes/Login");
const { database } = require("./database/database.js");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(
  session({
    key: "userId",
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.listen(port, () => console.log("Server started on port 4000"));

app.get("/api", (req, res) => res.json("This is to test the API"));
app.get("/api/users", (req, res) => {
  res.json(database);
  a;
});

app.post("/api/users", Login.registerUser);
app.post("/api/users/authentication", Login.logUserIn);

app.get("/api/AuthUser", Login.authenticateToken, (req, res) => {
  console.log(req.userId);
  res.sendStatus(200);
});

//Old Code:

//Function to authenticate token
// function authenticateToken(req, res, next)
// {
//   const token = req.headers['x-access-token']

//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
//     if (err)
//     {
//       res.json({auth: false, message: "Failed to authenticate"});
//     }
//     else
//     {
//       req.userId = decode.id;
//       next();

//     }
//   });

// }

//testing post to the api now
// app.post("/api/users", (req, res) => {
//   console.log(req.body);
//   let data = {
//     username: req.body.username,
//     password: req.body.password,
//     history: [], //an array of json objects
//     fullName: "",
//     company: "",
//     address1: "",
//     address2: "",
//     city: "",
//     zipcode: "",
//     state: "",
//     id: database.length + 1,
//     token: "",
//   };

//   database.push(data)
//   //console.log(database)
//   res.json(database);

//this is the get request called by login. it should take in the username and send back the password
// app.post("/api/users/authentication", (req, res) => {
//   console.log(req.body);
//   const userData = database.find(
//     (user) => user.username === req.body.username
//   );
//   let pass;
//   if (userData) {
//     // console.log(userData)
//     if (userData.password === req.body.password){
//       req.session.user = userData
//       //console.log(req.session.user)
//       pass = userData.password;

//       //Auth
//       const id = userData.id

//       const token = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET);

//       userData.token = token;

//       res.json({auth: true, token: token, userData: userData})
//     }
//     else {
//       res.json({auth: false, message: "Not Found Pass!"})
//     }
//   } else {
//     res.json({auth: false, message: "Not Found User!"})
//   }

// });
