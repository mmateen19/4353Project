const chai = require("chai");
const chaiHttp = require("chai-http");
const { rows } = require("pg/lib/defaults");
const server = require("../server.js");
var expect = chai.expect;

//assertion tools
chai.use(chaiHttp);

describe("task api", () => {
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

  describe("POST /api/user/authentication", () => {
    it("should login user", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/authentication ")
      done();
    });
  });

  //NOT working
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

  describe("POST /api/user/accountInfo/edit", () => {
    it("should update account info", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/accountInfo/edit ")
      done();
    });
  });

  describe("POST /api/user/accountInfo/get", () => {
    it("should update account info", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/accountInfo/get ")
        .end((err, res)=>{

        })
      done();
    });
  });

  describe("POST /api/user/quote/save", () => {
    it("should save quote", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/authentication ")
      done();
    });
  });

});
  