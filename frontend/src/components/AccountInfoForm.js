import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustNav from "./CustNav";
import "./AccountInfoForm.css";
import States from "./resources/states";

const AccountInfoForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  const [address1Input, setAddress1Input] = useState("");
  const [address2Input, setAddress2Input] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [zipCodeInput, setZipCodeInput] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  //get request to backend to see if its the users first time logging in
  const firstTime = true;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameInput === "") {
      setErrorMessages({ name: "f_name", message: errors.required });
    } else if (companyInput === "") {
      setErrorMessages({ name: "company_name", message: errors.required });
    } else if (address1Input === "") {
      setErrorMessages({ name: "address1", message: errors.required });
    } else if (cityInput === "") {
      setErrorMessages({ name: "city_", message: errors.required });
    } else if (stateInput === "test") {
      setErrorMessages({ name: "state_", message: errors.required });
    } else if (zipCodeInput === "") {
      setErrorMessages({ name: "zip_", message: errors.required });
    } else if(stateInput === ""){
      setErrorMessages({ name: "state_", message: errors.required });
    } else if(invalidLengths()) { 
    
    } else {
      //post data right here
      //also set firstTime flag to be false now bc they have successfully registered
      setNameInput("");
      setCompanyInput("");
      setAddress1Input("");
      setAddress2Input("");
      setCityInput("");
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
  const invalidLengths = () => {
    if(nameInput.length > 50){
      setErrorMessages({ name: "f_name", message: errors.tooLong })
    }
    else if(companyInput.length > 50){
      setErrorMessages({ name: "company_name", message: errors.tooLong })
    }
    else if(address1Input.length > 100){
      setErrorMessages({ name: "address1", message: errors.tooLong })
    }
    else if(address2Input.length > 100){
      setErrorMessages({ name: "address2", message: errors.tooLong })
    }
    else if(cityInput.length > 100){
      setErrorMessages({ name: "city_", message: errors.tooLong })
    }
    else if(zipCodeInput.length > 9){
      setErrorMessages({ name: "zip_", message: errors.tooLong })
    }
    else if(zipCodeInput.length < 5){
      setErrorMessages({ name: "zip_", message: errors.tooShort })
    }
    else{
      return false;
    }
    return true;
  };
  //handles errors
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const errors = {
      required: "Required",
      tooLong: "Over character limit",
      tooShort: "Invalid Zip Code"
    };


    const setStates = () =>{
      setErrorMessages({});
      if(!firstTime){
        //get request to API for the user info
        //set each state to display whatever is already inputted
        setNameInput("Matthew Philip");
        setCompanyInput("USAA");
        setAddress1Input("14826 Whispy Green Ct");
        setAddress2Input("");
        setCityInput("Cypress");
        //setStateInput("TX"); //not doing this because we need them to re enter state input regardless
        setZipCodeInput("77433");
        //so when the form first loads in, it will just default display what is already in the backend
        //but the form will work exactly the same
      } 
      else {
        setNameInput("");
        setCompanyInput("");
        setAddress1Input("");
        setAddress2Input("");
        setCityInput("");
        setStateInput("");
        setZipCodeInput("");
      }
    }

    
  const renderForm = () => {
    return (
      <div className="display-container">
        {firstTime? <section><h2>Complete Registration</h2><h1>Account Information</h1></section> :  <h1>Edit Account Information</h1>}
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
              {renderErrorMessage("address2")}
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
            <section className = "input-sections">
              <label className="Box" for="State">
                State:{" "}
              </label>
              <States setStateInput = {setStateInput} className="input-selections" />
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

  //this checks if its the first time we have ever logged in to know how to render the page
  useEffect(() => { setStates() }, [])

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
