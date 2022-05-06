const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
var expect = chai.expect;

//assertion tools
chai.use(chaiHttp);

describe("task api", () => {
  describe("GET /api", () => {
    it("should connect to backend", (done) => {
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
      done();
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

  describe("POST /api/user/home", () => {
    it("should send user to home page", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/home ")
      done();
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

  describe("POST /api/user/quote/save", () => {
    it("should save quote", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/authentication ")
      done();
    });
  });

});
  