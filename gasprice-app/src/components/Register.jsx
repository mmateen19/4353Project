import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [users, setUsers] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [reEnterPasswordInput, setReEnterPasswordInput] = useState("");
  
  const navigate = useNavigate();

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password",
    reenterpass: "Passwords don't match",
  };

  //handles submitting the registered username and password
  const handleSubmit = (event) => {
    event.preventDefault();
    //throws error if they try to submit empty string
    if (usernameInput == "") {
      setErrorMessages({ name: "uname", message: errors.uname });
    } else if (passwordInput == "") {
      setErrorMessages({ name: "pass", message: errors.pass });
    } else if (passwordInput !== reEnterPasswordInput) {
      setErrorMessages({ name: "reenterpass", message: errors.reenterpass });
    } else {
      setUsers([
        ...users,
        { username: usernameInput, password: passwordInput },
      ]);
      setPasswordInput("");
      setReEnterPasswordInput("");
      setUsernameInput("");
      setErrorMessages({});
      navigate('/login');
    }
  };

  const inputUserHandler = (event) => {
    event.preventDefault();
    //console.log(event.target.value);
    setUsernameInput(event.target.value);
  };

  const inputPasswordHandler = (event) => {
    event.preventDefault();
    //console.log(event.target.value);
    setPasswordInput(event.target.value);
  };

  const inputReEnterPasswordHandler = (event) => {
    event.preventDefault();
    //console.log(event.target.value);
    setReEnterPasswordInput(event.target.value);
  };

  //handles errors
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className = "App">
      <div className="display-container">
        <div className="title">Register</div>
        <form>
          <div className="input-container">
            <label>Username </label>
            <input
              value={usernameInput}
              onChange={inputUserHandler}
              type="text"
              name="uname"
              required
            />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              value={passwordInput}
              onChange={inputPasswordHandler}
              type="password"
              name="pass"
              required
            />
            {renderErrorMessage("pass")}
          </div>
          <div className="input-container">
            <label>Re-Enter Password </label>
            <input
              value={reEnterPasswordInput}
              onChange={inputReEnterPasswordHandler}
              type="password"
              name="pass"
              required
            />
            {renderErrorMessage("reenterpass")}
          </div>
          <div className = "button-container"><input onClick = {handleSubmit} type = 'submit' value='Create Account'/> </div>
        </form>
      </div>
    </div>
  );
};

export default Register;