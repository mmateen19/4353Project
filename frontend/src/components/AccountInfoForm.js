import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustNav from "./CustNav";
import "./AccountInfoForm.css";
import States from "./resources/states";

const AccountInfoForm = ({ data, setData }) => {
  const [nameInput, setNameInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  const [address1Input, setAddress1Input] = useState("");
  const [address2Input, setAddress2Input] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [zipCodeInput, setZipCodeInput] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const navigate = useNavigate();

  const errors = {
    f_name: "required",
    company_name: "required",
    address1: "required",
    city_: "required",
    state_: "required",
    zip_: "required",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameInput === "") {
      setErrorMessages({ name: "f_name", message: errors.f_name });
    } else if (companyInput === "") {
      setErrorMessages({ name: "company_name", message: errors.address1 });
    } else if (address1Input === "") {
      setErrorMessages({ name: "address1", message: errors.address1 });
    } else if (cityInput === "") {
      setErrorMessages({ name: "city_", message: errors.city_ });
    } else if (stateInput === "test") {
      setErrorMessages({ name: "state_", message: errors.state_ });
    } else if (zipCodeInput === "") {
      setErrorMessages({ name: "zip_", message: errors.zip_ });
    } else {
      setNameInput("");
      setCompanyInput("");
      setAddress1Input("");
      setAddress2Input("");
      setCityInput("");
      //state input?
      setStateInput("");
      setZipCodeInput("");
      setErrorMessages({});

      navigate("/home");
    }
  };

  //these handle form input text fields
  const nameInputHandler = (event) => {
    event.preventDefault();
    setNameInput(event.target.value);
  };
  const companyInputHandler = (event) => {
    event.preventDefault();
    setCompanyInput(event.target.value);
  };
  const address1InputHandler = (event) => {
    event.preventDefault();
    setAddress1Input(event.target.value);
  };
  const address2InputHandler = (event) => {
    event.preventDefault();
    setAddress2Input(event.target.value);
  };
  const cityInputHandler = (event) => {
    event.preventDefault();
    setCityInput(event.target.value);
  };
  const zipCodeInputHandler = (event) => {
    event.preventDefault();
    setZipCodeInput(event.target.value);
  };

  //handles errors
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = () => {
    return (
      <div className="display-container">
        <h1>Account Information</h1>
        <form>
          <div className="form-sections">
            <section className="input-sections">
              <label className="Box" for="name">
                Full Name:
              </label>
              <input
                className="Box"
                name="name"
                type="text"
                value={nameInput}
                onChange={nameInputHandler}
              ></input>
              {renderErrorMessage("f_name")}

              <label className="Box" for="CompanyName">
                Company Name:
              </label>
              <input
                className="Box"
                name="CompanyName"
                type="text"
                value={companyInput}
                onChange={companyInputHandler}
              ></input>
              {renderErrorMessage("company_name")}
            </section>
            <section className="input-sections">
              <label className="Box" for="Addy1">
                Address 1:{" "}
              </label>
              <input
                className="Box"
                name="Addy1"
                type="text"
                value={address1Input}
                onChange={address1InputHandler}
              ></input>
              {renderErrorMessage("address1")}

              <label className="Box" for="Addy2">
                Address 2:{" "}
              </label>
              <input
                className="Box"
                name="Addy2"
                type="text"
                value={address2Input}
                onChange={address2InputHandler}
              ></input>
            </section>
            <section className="input-sections">
              <label className="Box" className="Left-Box" for="City">
                City:{" "}
              </label>
              <input
                className="Box"
                name="City"
                type="text"
                value={cityInput}
                onChange={cityInputHandler}
              ></input>
              {renderErrorMessage("city_")}

              <label className="Box" for="Zip">
                Zip Code:{" "}
              </label>
              <input
                className="Box"
                name="Zip"
                type="text"
                value={zipCodeInput}
                onChange={zipCodeInputHandler}
              ></input>
              {renderErrorMessage("zip_")}
            </section>
            <section>
              <label className="Box" for="State">
                State:{" "}
              </label>
              <States className="input-selections" />
              {renderErrorMessage("state_")}
            </section>
          </div>
          <div className="button-container">
            <input onClick={handleSubmit} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="Form">
      <div className="navbar">
        <CustNav />
      </div>
      <div>{renderForm()}</div>
    </div>
  );
};

export default AccountInfoForm;
