import React from "react";
import "./Form.css";




const Form = ({
    firstName, 
    lastName,
    addy1,
    addy2,
    city,
    state,
    zipCode,
    companyName,
    firstNameInput, lastNameInput, 
    addy1Input, addy2Input,
    cityInput, stateInput, zipCodeInput,
    companyNameInput,
    setFirstName, setLastName,
    setAddy1, setAddy2, 
    setCity, setState,setZipCode,
    setCompanyName,
    setGoToProfile,
    setErrorMessages,
  
  }) => {
        const errors={
         f_name: "required",
         l_name: "required",
         address1: "required",
         city_: "required",
         state_: "required",
         zip_: "required",
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstNameInput=""){
      setErrorMessages({name: "f_name", message:errors.f_name});
    }else if (lastNameInput=""){
      setErrorMessages({name: "l_name", message:errors.l_name});
    } else if (addy1Input=""){
      setErrorMessages({name: "address1", message:errors.address1});
    }else if (cityInput=""){
      setErrorMessages({name: "city_", message:errors.city_});
    }else if (stateInput=""){
      setErrorMessages({name: "state_", message:errors.state_});
    }else if (zipCodeInput=""){
      setErrorMessages({name: "zip_", message:errors.zip_});
    }

  };

return(
  <div className="display-container">
    <h1>Form</h1>

    <section className="Input-Sections">
      <label for="FirstName">First Name: </label>
      <input name="FirstName" type="text" className="Left-Box"></input>

      <label for="LastName">Last Name: </label>
      <input name="LastName" type="text"></input>
    </section>

    <section className="Input-Sections">
      <label for="Addy1">Address 1: </label>
      <input name="Addy1" type="text" className="Left-Box"></input>

      <label for="Addy2">Address 2: </label>
      <input name="Addy2" type="text"></input>
    </section>

    <section className="Input-Sections">
      <label for="City">City: </label>
      <input name="City" type="text" className="small-input"></input>

      <label for="State">State: </label>
      <select name="State" className="small-input"></select>

      <label for="Zip">Zip Code: </label>
      <input name="Zip" type="text" className="small-input"></input>

     
    </section>

    <section className="Input-Sections">
      <label for="CompanyName">Comapny Name: </label>
      <input name="CompanyName" type="text" className="small-input"></input>

    </section>

    <button>onClick{handleSubmit}</button>
      <input type="submit"/>



  </div>
);

};

export default Form;
