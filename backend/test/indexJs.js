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
     * although we have this test set up, 
     * it won't be function properly until the database it set up
     * if we run the tests now, they will display inaccurate results 
     * so instead we are choosing to wait until we can run them properly
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
                company: "a",
                address1: "a",
                address2: "a",
                city: "a",
                zipcode: "a",
                state: "a",
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
                .request('http://localhost:4000') 
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
         describe("POST /quote", ()=>{
            it("it should get quote", (done)=>{
                const quote = {
                    location:"a",
                    gallons: 1,
                    userId: 1,
                };
                chai
                    .request('http://localhost:4000') //
                    .post("/quote/user")
                    .send(quote)
                    .end((err, res)=> {
                        expect(res.status).to.be.eq(200); 
                       // expect(res.userId).to.be.above(0); 
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
            it("should fail to get quote", (done)=>{
                const quote ={
                    location: "aaa", 
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
            it("should fail to get quote", (done)=>{
                const quote ={
                    gallons: 2, 
                    location: "aaa",
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

        /**
         * save quote history
         */
        describe("POST /quote/user/save", ()=>{
            it("it should save quote history",(done)=>{
                const user = {
                    "location": "a",
                    "gallons": 1,
                    "userId": 1,
                    "quote": 1
                  };
                chai
                    .request('http://localhost:4000')
                    .post("/quote/user/save")
                    .send(user)
                    .end((err, res)=>{
                        expect(res.status).to.be.eq(200);
                        done();
                    })

            });
            it("it should not save", (done)=>{
                const user = {
                    "location": "a",
                    "gallons": 1,
                    "userId": 1,
                  };
                chai
                    .request('http://localhost:4000')
                    .post("/quote/user/save")
                    .send(user)
                    .end((err, res)=>{
                        expect(res.status).to.be.eq(400);
                        done();
                    })
            })
            it("it should not save", (done)=>{
                const user = {
                    "location": "a",
                    "gallons": 1,
                    "quote": 1
                  };
                chai
                    .request('http://localhost:4000')
                    .post("/quote/user/save")
                    .send(user)
                    .end((err, res)=>{
                        expect(res.status).to.be.eq(400);
                        done();
                    })
            })
            it("it should not save", (done)=>{
                const user = {
                    "gallons": 1,
                    "quote": 1,
                    "userId":1, 
                  };
                chai
                    .request('http://localhost:4000')
                    .post("/quote/user/save")
                    .send(user)
                    .end((err, res)=>{
                        expect(res.status).to.be.eq(400);
                        done();
                    })
            })
            
        });
        /**
         * get history
         */
        describe("POST /quote/user/history", ()=>{
            it("it should get history", (done)=>{
                const user = {
                    "userId":1, 
                  };
            chai
                .request('http://localhost:4000')
                .post("/quote/user/history")
                .send(user)
                .end((err, res) => {
                    expect(res.status).to.be.eq(200);
                    done();
                });
            });

            it("it should not get history", (done)=>{
                const user = {};
                chai
                    .request('http://localhost:4000')
                    .post("/quote/user/history")
                    .send(user)
                    .end((err, res)=>{
                        expect(res.status).to.be.eq(400);
                        done();
                    })

                
            })



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
//           .request("http://localhost:4000")
//           .post("/api/users")
//           .send(user)
//           .end((err, res) => {
                //expect(res.status).to.be.eq(200)
//             //expect(res.body).authentication.should.be.eq(true);
//             done();
//           });
//          it("it should authenticate login", (done) => {
    //         const user = {
    //           username: "aaaa",
    //           password: "aaaa",
    //         };
    //         chai
    //           .request("http://localhost:4000")
    //           .post("/api/users")
    //           .send(user)
    //           .end((err, res) => {
                    //expect(res.status).to.be.eq(200)
    //             //expect(res.body).authentication.should.be.eq(false);
    //             done();
    //           });    
//       });
