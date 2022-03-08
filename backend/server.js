const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.listen(port, () => console.log("Server started on port 4000"));

app.get("/api", (req, res) => res.json("This is to test the API"));

//testing this in postman
app.get("/usersData", (req, res) => {
  res.json(database);
});

//testing post to the api now
app.post("/usersData", (req, res) => {
  console.log(req.query);
  const data = {
    username: req.query.username,
    password: req.query.password,
  };
  res.json((database = [...database, data]));
});

//hardcoding backend currently.
let database = [];
