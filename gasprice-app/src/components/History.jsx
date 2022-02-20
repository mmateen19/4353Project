import React from "react";
import CustNav from "./CustNav";
import "./History.css"


const renderForm2 = () =>

{
    return(
        <div className = "display-container">
            <h1>this is where we're displaying the history</h1>
        </div>

    );
};

const History = () => {
    return (
        <div className = "App">
            <div className="navbar">
                <CustNav />
            </div>
            <div>{renderForm2()}</div>

        </div>
    );
};

export default History;