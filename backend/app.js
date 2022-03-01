const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(process.env.PORT || "5000", () => {
  console.log(`Server is running on port: ${process.env.PORT || "5000"}`);
});
