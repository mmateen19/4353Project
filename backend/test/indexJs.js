const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
var expect = chai.expect;


//assertion tools
chai.use(chaiHttp);


describe("task api", () =>{
    describe("POST /register", () =>{
        it("should register", (done)=>{
            const user = {
                username:"a",
                password: "a",
            };
            chai
                .request('http://localhost:4000')
                .post("/api/users")
                .send(user)
                .end((err, res)=>{
                    expect(res.status).to.be.eq(200);
                    //expect(res.body.authentication).to.be.eq(true);
                    done();
                });
        });
    });
});








// describe("task API", () => {
//     /**
//      * Login
//      */
//     describe("POST /auth/users", () => {
//       it("it should authenticate login", (done) => {
//         const user = {
//           username: "a",
//           password: "a",
//         };
//         chai
//           .request("http://localhost:4000/api/users")
//           .post("/users")
//           .send(user)
//           .end((err, res) => {
//             //res.body.authentication.should.be.eq(true);
//             done();
//           });
//       });
//         /**
//          * 
//          * next it statement
//          */
//          describe("POST /register", () => {
//             it("It should not register", (done) => {
//               const user = {
//                 username: "a",
//                 password: "a",
//               };
//               chai
//           .request("http://localhost:4000/api/users")
//                 .post("/api/users")
//                 .send(user)
//                 .end((err, res) => {
//                   res.should.have.status(400);
//                   done();
//                 });
//             });
//           });
//     });
// });