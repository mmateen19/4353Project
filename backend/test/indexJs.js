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

  describe("POST /api/user/home", () => {
    it("should send user to home page", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/home ")
      done();
    });
  });

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

  describe("POST /api/user/quote/save", () => {
    it("should save quote", (done) => {
      chai
        .request("http://localhost:4000")
        .post("/api/user/authentication ")
      done();
    });
  });

});
  