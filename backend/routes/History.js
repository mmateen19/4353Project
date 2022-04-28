const dotenv = require("dotenv");
const client = require("../database/database");

dotenv.config();

const getHistory = (req, res) => {
    id = req.body.id; 

    client.query(
        "SELECT * FROM users WHERE id = $1",
        [id],
        (err, dbres) => {
            if (err){
                res.json({history: false, message:"could not query DB"});
            } else if (dbres.rowCount > 0){
                res.json({history: true, result:dbres.rows});
            } else {
                res.json({history:false, message:"no quotes found in DB"});
            }
        }
    )
};

module.exports = {
  getHistory,
};


