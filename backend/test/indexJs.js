const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
var expect = chai.expect;


//assertion tools
chai.use(chaiHttp);


describe("task api", () =>{
    /**
     * quote
     */
    describe("POST quote")

    /**
     * updating profile
     */
    describe("POST /user/api", ()=>{
        it("it should update profile", (done)=>{
            const user = {
                username: 'a',
                password: 'a',
                fullName: "a",
                company: "aaa",
                address1: "aaa",
                address2: "aaa",
                city: "aaa",
                zipcode: "aaa",
                state: "TX",
            };
            chai
                .request('http://localhost:4000') // right now, we can't use server so we're using the address instead
                .post("/api/users")
                .send(user)
                .end((err, res)=>{
                    expect(res.status).to.be.eq(200);
                    done();
                });
        });
    });

    /**
     * registration testing 
     */
    describe("POST /api/users", () =>{
        it("it should register", (done)=>{
            const user = {
                username:"a",
                password: "a",
            };
            chai
                .request('http://localhost:4000') // right now, we can't use server so we're using the address instead
                .post("/api/users")
                .send(user)
                .end((err, res)=>{
                    expect(res.status).to.be.eq(200);
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