import React from "react";
import CustNav from "./CustNav";
import "./History.css"





const History = () => {
    const renderForm2 = () =>

    {   
    return(
        <div className = "display-container">
            <h2 >Previous Fuel Quotes:</h2>
            <h3>University of Houston</h3>
            <h5>4800 Calhoun Rd, Houston, TX 77004</h5>

            <table>
                <tr>
                    <th></th>
                    <th>08/10/20</th>
                    <th>10/05/21</th>
                    <th>02/20/22</th>

                </tr>
            
               <tr>
                   <th>Gallons</th>
                   <td>15,000</td>
                   <td>30,000</td>
                   <td>40,000</td>
                </tr>
                <tr>
                   <th>Price:</th>
                   <td>$7,500</td>
                   <td>$15,000</td>
                   <td>$20,000</td>
                </tr>                   
            </table>

        </div>
        );

    };
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