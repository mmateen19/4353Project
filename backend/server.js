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
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && "body" in err) {
    console.error(err);
    return res.sendStatus(400); // Bad request
  }
  next();
});

const Login = require("./routes/Login");
const { database } = require("./database/database.js");
const quote = require("./routes/FuelQuote");
const accountInfo = require("./routes/ClientManagment.js");
const PricingModule = require("./routes/PricingModule.js");

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

app.post("/api/user", Login.registerUser);
app.post("/api/user/authentication", Login.logUserIn);

app.get("/api/AuthUser", Login.authenticateToken, (req, res) => {
  console.log(req.userId);
  res.sendStatus(200);
});

app.post("/api/user/home", accountInfo.home);
app.post("/api/user/accountInfo/edit", accountInfo.updateInfo);
app.post("/api/user/accountInfo/get", accountInfo.retrieveInfo);

//app.post("/api/user/quote/get", quote.validate("getQuote"), quote.getQuote); //i dont understand what this is here for?
//app.get("/api/user/quote/history", quote.getHistory);

app.post("/api/user/quote/save", quote.saveQuote);
app.post("/api/user/fuelhistory", quote.getHistory);
app.post("/api/user/quote/pricingmodule", PricingModule.calculate);

app.post("/api/user/accountInfo/edit", accountInfo.updateInfo);
app.post("/api/user/accountInfo/get", accountInfo.retrieveInfo);
