//this is where we will make components to add to the main app
import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./Login.css";
import { useNavigate } from 'react-router-dom';
const axios = require("axios");


const Login = () => {

  //States
  const [errorMessages, setErrorMessages] = useState({});

  
  //Variables
  const navigate = useNavigate();
 
 
  //Error Messages
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };


  //Function to render error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  //Function to handle the login event
  const handleLogin = (event) => {
    //prevent page reload
    event.preventDefault();
    const { uname, pass } = document.forms[0];

  

    //axios.request(options).
    
    // console.log( uname.value + " sdgsfg " + pass.value);

    // axios.get('/api/users/authentication', {
      
    //   username: uname.value,
    //   password: pass.value,

    // })

    //this is the the request to the API for the password after passing the username down. 
    const options = {
      method: "POST",
      url: "/api/users/authentication",
      data: {username: uname.value, password:pass.value}
    };

    axios.request(options).then((response) => {
      console.log(response.data)
      if (!response.data.auth){
        if (response.data.message === "Not Found User!") {
          //username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
        else if (response.data.message == "Not Found Pass!") {
          //invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        }
      }
      else {
        //need to get from the db if this user has logged in before
        const firstTime = false;
        if(firstTime){
          navigate("/home/accountinfo");
        }
        else {
          navigate("/home"); //send to homepage
        }
      }
    }, (error) => {
      console.log(error);
    });
  };


  //HTML
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
