const pg = require('pg');




let client = new pg.Client(process.env.CONSTRING);

client.connect( function(err) {
  if (err) {
    return res.json({message: "Failed to connect to DB", err:err});
  }})


module.exports = client;

// exports.database = [{
//     username: 'a',
//     password: 'a',
//     history: [], //an array of json objects
//     fullName: "",
//     company: "",
//     address1: "",
//     address2: "",
//     city: "",
//     zipcode: "",
//     state: "",
//     firstTime: false,
//     date:"", 
//     time:"", 
//     userId:1, 
//     location:"a", 
//     gallons:1,
//     quote:1, 
//     total:1, 
//   },
//   {
//     id: 2,
//     token: "",
//     username: "admin",
//     password: "default",
//     history: [], //an array of json objects
//     fullName: "",
//     company: "",
//     address1: "",
//     address2: "",
//     city: "",
//     zipcode: "",
//     state: "",
//     firstTime: false,    
//     date:"", 
//     time:"", 
//     userId:1, 
//     location:"a", 
//     gallons:1,
//     quote:1, 
//     total:1, 
//   },
// ];

