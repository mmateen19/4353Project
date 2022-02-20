import React from "react";
import CustNav from "./CustNav";
import "./AccountInfoForm.css";
import States from "./resources/states"

const AccountInfoForm = ({
  fullNameInput,
  addy1Input,
  cityInput,
  stateInput,
  zipCodeInput,
  setErrorMessages,
}) => {
  const errors = {
    f_name: "required",
    address1: "required",
    city_: "required",
    state_: "required",
    zip_: "required",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((fullNameInput = "")) {
      setErrorMessages({ name: "f_name", message: errors.f_name });
    } else if ((addy1Input = "")) {
      setErrorMessages({ name: "address1", message: errors.address1 });
    } else if ((cityInput = "")) {
      setErrorMessages({ name: "city_", message: errors.city_ });
    } else if ((stateInput = "")) {
      setErrorMessages({ name: "state_", message: errors.state_ });
    } else if ((zipCodeInput = "")) {
      setErrorMessages({ name: "zip_", message: errors.zip_ });
    } else {
      //gonna navigate to home
    }
  };

  const renderForm = () => {
    return (
      <div className="display-container">
        <h1>Account Information</h1>
        <div className="form-sections">
          <section className="input-sections">
            <label for="FullName">Full Name: </label>
            <input name="FullName" type="text"></input>

            <label for="CompanyName">Company Name: </label>
            <input name="CompanyName" type="text"></input>
          </section>
          <section className="input-sections">
            <label for="Addy1">Address 1: </label>
            <input name="Addy1" type="text"></input>

            <label for="Addy2">Address 2: </label>
            <input name="Addy2" type="text"></input>
          </section>
          <section className="input-sections">
            <label for="City">City: </label>
            <input name="City" type="text"></input>

            <label for="Zip">Zip Code: </label>
            <input name="Zip" type="text"></input>

          </section>
          <section>
            <label for="State">State: </label>
            <States className = "input-selections" />
          </section>
        </div>
        <button></button>
        <input type="submit" onSubmit={handleSubmit} />
      </div>
    );
  };

  return (
    <div className="App">
      <div className="navbar">
        <CustNav />
      </div>
      <div>{renderForm()}</div>
    </div>
  );
};

export default AccountInfoForm;
