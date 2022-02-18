import React from "react";
import "./FuelQuoteForm.css";
//need to display calendar to select date
//<select> <option> <select/> for drop down select

//need input for gallons requested as a numeric type
//display the delivery address (non-editable) pulled from client information
//delivery date, calendar drop down selecter
//suggested price per gallon, numeric non-editable (we will do pricing calculation later)
//display total amount due (calculated by price per gallon * gallons)
const FuelQuoteForm = () => {
  return (
    <div className="display-container">
      <div>This is where the FuelQuoteForm will be.</div>
      <form>
        <div className="input-container">
          <label>Enter the # of Gallons desired</label>
          <input type="number" name="gallons" />
        </div>
        <div className="input-container">
          <label>Delivery Address</label>
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

const handleSubmit = () => {};

export default FuelQuoteForm;
