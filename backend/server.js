const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.listen(port, () => console.log("Server started on port 4000"));

app.get("/api", (req, res) => res.json("This is to test the API"));

app.get("/api/users", (req, res) => {
  res.json(database);
});

//this is the get request called by login. it should take in the username and send back the password
app.get("/api/users/authorization", (req, res) => {
  console.log(req.query);
  const userData = database.find(
    (user) => user.username === req.query.username
  );
  let pass;
  if (userData) {
    pass = userData.password;
  } else {
    pass = "Not Found";
  }
  res.json(pass);
});

//testing post to the api now
app.post("/api/users", (req, res) => {
  //console.log(req.query);
  const data = {
    username: req.query.username,
    password: req.query.password,
  };
  res.json((database = [...database, data]));
});

//hardcoding backend currently.
let database = [{ username: "admin", password: "default" }];
