import React from "react";
import "./Form.css";

const Form = () => (
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
  </div>
);

export default Form;
