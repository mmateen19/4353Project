const dotenv = require("dotenv");
const client = require("../database/database");
dotenv.config();


const calculate = (req, res) => {
  id = req.body.id;
  numgallons = req.body.numgallons;

  let locationfactor = 0;
  let ratehistoryfactor = 0;
  let gallonsreqfactor = 0;
  const companyprofitfactor = .1;

  //console.log(queries(id, callback));

  if(numgallons > 1000){
    gallonsreqfactor = .02;
  }
  else{
    gallonsreqfactor = .03;
  }

  //need to request db for location as well
  client.query("SELECT state FROM clientinfo WHERE id = $1", [id], (err, dbres) => {
    if (err) {
      console.log("Could not query DB!")
    } else {
      console.log(dbres.rows[0].state === 'TX');
      if(dbres.rows[0].state === 'TX'){
        locationfactor = .02;
      }
      else{
        locationfactor = .04;
      }
    }
  });
  //need to request db for num of rows in fuelquotes to know if has history
  client.query("SELECT * FROM fuelquotes WHERE id = $1", [id], (err, dbres) => {
    if (err) {
      console.log("Could not query DB!")
    } else if (dbres.rowCount > 0) {
      ratehistoryfactor = .01;
    } else {
      ratehistoryfactor = 0;
    }
  })

  const margin = (locationfactor - ratehistoryfactor + gallonsreqfactor + companyprofitfactor) * 1.5;

  console.log("locationfactor = " + locationfactor);
  console.log("ratehistoryfactor = " + ratehistoryfactor);
  console.log("gallonnsreqfactor = " + gallonsreqfactor);
  console.log((locationfactor - ratehistoryfactor + gallonsreqfactor + companyprofitfactor));
  console.log("margin = " + margin);

  const estpricepergall = margin + 1.5;
  const totalPrice = numgallons * estpricepergall;

  //sends back up the ppg and the totalPrice after calculating it
  res.json({ price: totalPrice, ppg: estpricepergall });
};


module.exports = {
  calculate,
};
