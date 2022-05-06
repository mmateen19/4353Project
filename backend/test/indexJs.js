const chai = require("chai");
const chaiHttp = require("chai-http");
const { rows } = require("pg/lib/defaults");
const server = require("../server.js");
var expect = chai.expect;

//assertion tools
chai.use(chaiHttp);

describe("task api", () => {


  //Connecting to the Server!
  describe("GET /api", () => {
    it("should connect to server", (done) => {
      chai
        .request("http://localhost:4000")
        .get("/api")
        .end((err, res) => {
          expect(res.body.status).to.equals("success");
          expect(res.body.message).to.equals("This is to test the API");
          done();
        });
    });
  });


  //Registering a User
  describe("POST /api/user", () => {
    it("should register user", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user")
        .end((err, res)=>{
          expect(res.body.reg).to.equals(true);
          done();
        });
    });
  });


  //Logging a user in
  describe("POST /api/user/authentication", () => {
    it("should login user", (done) => {
      const user = {
        username: "test",
        password: "test",
      };
      chai
        .request("http://localhost:4000")
        .post("/api/user/authentication ")
        .send(user)
        .end((err, res) => {
          expect(res.body.auth).to.equals(true);
          done();
        });
    });

    it("should not login user due to incorrect password", (done) => {
      const user = {
        username: "test",
        password: "wrongPassword",
      };
      chai
        .request("http://localhost:4000")
        .post("/api/user/authentication ")
        .send(user)
        .end((err, res) => {
          expect(res.body.auth).to.equals(false);
          done();
        });
    });

    it("should not login user due to incorrect useranme", (done) => {
      const user = {
        username: "wrongUsername",
        password: "test",
      };
      chai
        .request("http://localhost:4000")
        .post("/api/user/authentication ")
        .send(user)
        .end((err, res) => {
          expect(res.body.auth).to.equals(false);
          done();
        });
    });
    
  });

  //Retreive first time login status
  describe("POST /api/user/home", () => {
    it("should send user to home page", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/home")
        .send({id: 67})
        .end((err, res)=>{
          expect(res.body.exists).to.equals(true);
          done();
        });
    });

    it("should not send user to home page", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/home")
        .send({id: 999})
        .end((err, res)=>{
          expect(res.body.exists).to.equals(false);
          done();
        });
    });
  });


  //Edit the account info and update it
  describe("POST /api/user/accountInfo/edit", () => {
    it("should update client info", (done) => {
      const user = {
        id : 67,
        fullName : "test",
        company : "test",
        address1 : "test",
        address2 : "test",
        city : "test",
        zipcode : 12345,
        state : "TX",
        firstTime : "FALSE",
      };
      chai
        .request("http://localhost:4000")
        .post("/api/user/accountInfo/edit")
        .send(user)
        .end((err, res) => {
          expect(res.body.status).to.equals(true);
          done();
        });
    });

    it("should not update client info", (done) => {
      const user = {
        id : 9999999,
        fullName : "test",
        company : "test",
        address1 : "test",
        address2 : "test",
        city : "test",
        zipcode : 12345,
        state : "TX",
        firstTime : "FALSE",
      };
      chai
        .request("http://localhost:4000")
        .post("/api/user/accountInfo/edit")
        .send(user)
        .end((err, res) => {
          expect(res.body.status).to.equals(false);
          done();
        });
    });
  });


  //It should retrieve the account info
  describe("POST /api/user/accountInfo/get", () => {
    it("should retreive account info", (done) => {
      const user = {
        id: 67,
      }

      chai
        .request("http://localhost:4000")
        .post("/api/user/accountInfo/get ")
        .send(user)
        .end((err, res)=>{
          expect(res.body.auth).to.equals(true);
          done();
        })
    });


    it("should not retreive account info", (done) => {
      const user = {
        id: 99999,
      };

      chai
        .request("http://localhost:4000")
        .post("/api/user/accountInfo/get ")
        .send(user)
        .end((err, res)=>{
          expect(res.body.auth).to.equals(false);
          done();
        })
    });


  });


  //It should save a quote to history
  describe("POST /api/user/quote/save", () => {
    it("should save quote", (done) => {
      
      const user = {
        id: 67,
        date: "5/6/2023",
        numGallons: 100,
        ppg: 1.73,
        totalPrice: 172.50,
      };

      chai
        .request("http://localhost:4000")
        .post("/api/user/quote/save")
        .send(user)
        .end((err, res) => {
          expect(res.body.status).to.equals(true);
          done();
        })
    });

  });

});
  