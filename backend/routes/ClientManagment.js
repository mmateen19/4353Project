let { database } = require("../database/database");

const editInfo = (req, res, next) => {
  console.log(req.body.userData);
  console.log(req.body.userData.username);
  let oldData = database.find(
    (user) => user.username === req.body.userData.username
  );
  console.log(oldData);
  //   oldData.fullName = req.body.userData.fullName;
  //   oldData.company = req.body.userData.company;
  //   oldData.address1 = req.body.userData.address1;
  //   oldData.address2 = req.body.userData.address2;
  //   oldData.city = req.body.userData.city;
  //   oldData.state = req.body.userData.state;
  //   oldData.zipcode = req.body.userData.zipcode;
  //   oldData.firstTime = req.body.userData.firstTime;
  anotherTest = database.find(
    (user) => user.username === req.body.userData.username
  );
  console.log(anotherTest);
  //database.push(data);
};

module.exports = {
  editInfo,
};
