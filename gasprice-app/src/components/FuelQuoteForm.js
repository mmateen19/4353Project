import React from "react";
import "./FuelQuoteForm.css";
import CustNav from "./CustNav";

//need to display calendar to select date
//<select> <option> <select/> for drop down select

//need input for gallons requested as a numeric type
//display the delivery address (non-editable) pulled from client information
//delivery date, calendar drop down selecter
//suggested price per gallon, numeric non-editable (we will do pricing calculation later)
//display total amount due (calculated by price per gallon * gallons)

const FuelQuoteForm = () => {
  const renderForm = () => {
    return (
      <div className="display-container">
        <h2>Get Your Fuel Quote</h2>
        <form>
          <div className="input-container">
            <label>Enter the # of Gallons desired</label>
            <input type="number" name="gallons" />
          </div>
          <div className="input-container">
            <label>
              Delivery Address: *Fake Address here from DB account info*
            </label>
          </div>
          <div className="input-container">
            <label>Delivery Date</label>
            <input type="date" name="date" />
          </div>
          <div onClick={handleSubmit} className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="navbar">
        <CustNav />
      </div>
      {renderForm()}
    </div>
  );
};

const handleSubmit = () => {};

export default FuelQuoteForm;
