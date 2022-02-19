import React from "react";
import CustNav from "./CustNav";

const History = () => {
    return (
        <div className = "App">
            <div className="navbar">
                <CustNav />
            </div>
            <h1>This is where we display fuel quote history.</h1>
        </div>
    );
};

export default History;