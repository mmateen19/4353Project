const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
var expect = chai.expect;


//assertion tools
chai.use(chaiHttp);


describe("task api", () =>{
    /**
     *  log in 
     * 
     * 
     * although we have this test set up, we need to wait until the database is set up in order to utilize it. 
     * 
     * reference code below
     */
    //---------------------------------------------------------------------------------------------------------------
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

    /**
     * QUOTE
     */

    // get quote
         describe("POST quote", ()=>{
            it("it should get quote", (done)=>{
                const quote = {
                    location:"x",
                    gallons: 1,
                    userId: 1,
                };
                chai
                    .request('http://localhost:4000') //
                    .post("/quote/user")
                    .send(quote)
                    .end((err, res)=> {
                        expect(res.status).to.be.eq(200);   
                        //expect(res.total).to.be.eq(1);  
                        //expect(res.quote).to.be.eq(1);   
                        this.timeout(15000);
                        setTimeout(done, 15000);
                        done();                    
                    });

            });

            it("should fail to get quote", (done)=>{
                const quote ={
                    gallons: 2, 
                    userId: 2,
                };
                chai   
                    .request('http://localhost:4000')
                    .post("/quote/user")
                    .send(quote)
                    .end((err, res)=>{
                        expect(res.status).to.be.eq(400);
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