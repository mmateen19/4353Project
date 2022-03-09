import React, { useState } from "react";
import "./FuelQuoteForm.css";
import CustNav from "./CustNav";

const FuelQuoteForm = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [numGallons, setNumGallons] = useState(0);
  const [date, setDate] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const pricePerGall = 3.5; //will use pricing module later

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const errors = {
    gallons: "Invalid number",
    date: "Invalid date",
  };

  const handleGallons = (event) => {
    event.preventDefault();
    setNumGallons(event.target.value);
  };
  const handleDate = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };

  const validGallons = (num) => {
    return !isNaN(num) && num > 0;
  };
  const validDate = (date) => {
    const today = new Date(); //makes a new date object with current date & time
    const cur = new Date(date);
    //need to check if date is today or before, & if validDate
    return (
      cur !== "Invalid Date" && !isNaN(cur) && cur.getTime() > today.getTime()
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //if gallons is not a valid integer
    if (!validGallons(numGallons)) {
      setErrorMessages({ name: "gallons", message: errors.gallons });
    }
    //if date input is not valid
    else if (!validDate(date)) {
      setErrorMessages({ name: "date", message: errors.date });
    } else {
      //both inputs are valid
      //render the quote,
      setErrorMessages({});
      setSubmit(true);
      //and then store the quote as history in the backend
    }
  };

  const handleOk = (event) => {
    event.preventDefault();
    setNumGallons(0);
    setDate("");
    setSubmit(false);
  };

  //create render of for quote and button that can send us back to quote form display
  const renderQuote = () => {
    //we can get a quote from the pricing module, (will get request from backend and PricingModule later)
    const total = pricePerGall * numGallons;

    let formatDate = new Date(date);
    const dd = String(formatDate.getDate()).padStart(2, "0");
    const mm = String(formatDate.getMonth() + 1).padStart(2, "0"); //January is 0
    const yyyy = formatDate.getFullYear();
    formatDate = mm + "/" + dd + "/" + yyyy;

    //will prob post the quote to history in backend right here, but need authenticate first

    //render
    return (
      <div className="display-container">
        <h2>Your Quote:</h2>
        <form>
          <div className="input-container">
            <label># of Gallons requested: {numGallons}</label>
          </div>
          <div className="input-container">
            <label>Estimated Price: ${total.toFixed(2)}</label>
          </div>
          <div className="input-container">
            <label>Delivery Address:</label>
            <p>4800 Calhoun Rd, Houston, TX 77004</p>
            <p> Projected Delivery Date: {formatDate}</p>
          </div>
          <div onClick={handleOk} className="button-container">
            <input type="submit" value="OK" />
          </div>
        </form>
      </div>
    );
  };

  //render form
  const renderForm = () => {
    return (
      <div className="display-container">
        <h2>Get Your Fuel Quote</h2>
        <form>
          <div className="input-container">
            <label>Enter the # of Gallons desired</label>
            <input type="number" name="gallons" onChange={handleGallons} />
            {renderErrorMessage("gallons")}
          </div>
          <div className="input-container">
            <label>Delivery Address:</label>
            <p>4800 Calhoun Rd, Houston, TX 77004</p>
            <p>Estimate Price per Gallon: ${pricePerGall.toFixed(2)}</p>
          </div>
          <div className="input-container">
            <label>Delivery Date</label>
            <input type="date" name="date" onChange={handleDate} />
            {renderErrorMessage("date")}
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
      {isSubmit ? renderQuote() : renderForm()}
    </div>
  );
};

export default FuelQuoteForm;
