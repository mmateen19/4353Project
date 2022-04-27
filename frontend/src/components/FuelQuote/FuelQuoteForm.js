import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FuelQuoteForm.css";
import CustNav from "../NavBar/CustNav";
const axios = require("axios");

const FuelQuoteForm = ({ userLogin, setUserLogin }) => {
  const [errorMessages, setErrorMessages] = useState({});
  const [numGallons, setNumGallons] = useState(0);
  const [date, setDate] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const navigate = useNavigate();

  //TODO: GET Estimate Price Per Gal & Total from Pricing module
  const pricePerGall = 3.5;
  const totalPrice = pricePerGall * numGallons;

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

  const handleGetQuote = (event) => {
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
      //axios post, send down id and numGallons

      //render the quote,
      setErrorMessages({});
      setSubmit(true);
    }
  };

  const handleSubmitQuote = (event) => {
    event.preventDefault();
    //TODO: POST the quote as history in the backend, need to send down:
    const options = {
      method: "POST",
      url: "/api/user/quote/save",
      data: {
        id: userLogin.id,
        date: date,
        numGallons: numGallons,
        ppg: pricePerGall,
        totalPrice: totalPrice,
      },
    };

    axios.request(options).then(
      (response) => {
        //console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );

    setErrorMessages({});
    setNumGallons(0);
    setDate("");
    setSubmit(false);

    navigate("/home/history");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setErrorMessages({});
    setNumGallons(0);
    setDate("");
    setSubmit(false);
  };

  const renderQuote = () => {
    let formatDate = new Date(date);
    const dd = String(formatDate.getDate()).padStart(2, "0");
    const mm = String(formatDate.getMonth() + 1).padStart(2, "0"); //January is 0
    const yyyy = formatDate.getFullYear();
    formatDate = mm + "/" + dd + "/" + yyyy;

    //render
    return (
      <div className="display-container">
        <h2>Your Quote:</h2>
        <form>
          <div className="input-container">
            <label># of Gallons requested: {numGallons}</label>
          </div>
          <div className="input-container">
            <label>
              Estimated Price per Gallon: ${pricePerGall.toFixed(2)}
            </label>
            <label>Total Price: ${totalPrice.toFixed(2)}</label>
          </div>
          <div onClick={handleCancel} className="button-container">
            <input type="submit" value="Cancel" />
          </div>
          <div onClick={handleSubmitQuote} className="button-container">
            <input type="submit" value="Submit Quote" />
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
            <label>Delivery Date</label>
            <input type="date" name="date" onChange={handleDate} />
            {renderErrorMessage("date")}
          </div>
          <div onClick={handleGetQuote} className="button-container">
            <input type="submit" value="Get Quote" />
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
