import React from "react";
import CustNav from "../NavBar/CustNav";
import "./Home.css"

const Home = () => {
    const render = () =>{
        return(
            <div className = "display-container">
                <h1>Welcome back, University of Houston!</h1>
                <h2>Here is your previous calculation:</h2>

                <h3>You calculated that 40,000 gallons of fuel would be $20,000.</h3>
            </div>

        );

    };
    return (
        <div className = "App">
            <div className="navbar">
                <CustNav />
            </div>
            <div>{render()}</div>

        </div>
    );
};

export default Home;
