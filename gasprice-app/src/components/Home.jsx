import React from "react";
import CustNav from "./CustNav";

const Home = () => {
    return (
        <div className = "App">
            <div className="navbar">
                <CustNav />
            </div>
            <h1>This is the homepage!</h1>
        </div>
    );
};

export default Home;
