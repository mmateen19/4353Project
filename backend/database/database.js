const pg = require('pg');




let client = new pg.Client(process.env.CONSTRING);

client.connect( function(err) {
  if (err) {
    return res.json({message: "Failed to connect to DB", err:err});
  }})


module.exports = client;
