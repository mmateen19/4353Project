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
        <form>
        <div className="form-sections">
          <section className="input-sections">
            <label className = "Box" for="FullName">Full Name: </label>
            <input className = "Box" name="FullName" type="text"></input>

            <label className = "Box" for="CompanyName">Company Name: </label>
            <input className = "Box" name="CompanyName" type="text"></input>
          </section>
          <section className="input-sections">
            <label className = "Box" for="Addy1">Address 1: </label>
            <input className = "Box" name="Addy1" type="text"></input>

            <label className = "Box" for="Addy2">Address 2: </label>
            <input className = "Box" name="Addy2" type="text"></input>
          </section>
          <section className="input-sections">
            <label className = "Box" className = "Left-Box"for="City">City: </label>
            <input className = "Box"name="City" type="text"></input>

            <label className = "Box" for="Zip">Zip Code: </label>
            <input className = "Box" name="Zip" type="text"></input>

          </section>
          <section>
            <label className = "Box" for="State">State: </label>
            <States className = "input-selections" />
          </section>
        </div>
        <input type="submit" onSubmit={handleSubmit} />
      </form>
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
