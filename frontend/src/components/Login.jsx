//this is where we will make components to add to the main app
import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./Login.css";
import { useNavigate } from 'react-router-dom';
const axios = require("axios");

const Login = () => {

  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const navigate = useNavigate();

  const handleLogin = (event) => {
    //prevent page reload
    event.preventDefault();
    const { uname, pass } = document.forms[0];

    //this is the the request to the API for the password after passing the username down. 
    const options = {
      method: "GET",
      url: "/api/users/authentication",
      params: {username: uname.value}
    };

    axios.request(options).then((response) => {
      if (response.data === "Not Found") {
        //username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
      else if (response.data !== pass.value) {
        //invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      }
      else {
        navigate("/home"); //send to homepage
      }
    }, (error) => {
      console.log(error);
    });
  };

  return (
    <div className = "App">
      <div className="display-container">
        <div className="title">Sign In</div>
        <form>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className = "button-container"><input onClick = {handleLogin} type = 'submit' value='Login'/> </div>
        </form>
      </div>
      <div className="display-container">
        <div>Haven't created an account yet?</div>
        <div className = "button-container"><Link to ='/register'><input type = 'submit' value='Register'/></Link> </div>
      </div>
    </div>
  );
};

export default Login;
