import React from "react";
import "./Register.css";

const Register = ({
  users,
  setUsers,
  usernameInput,
  passwordInput,
  setUsernameInput,
  setPasswordInput,
  errorMessages,
  setErrorMessages,
  setGoToRegister,
}) => {
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  //handles submitting the registered username and password
  const handleSubmit = (event) => {
    event.preventDefault();
    //throws error if they try to submit empty string
    if (usernameInput == "") {
      setErrorMessages({ name: "uname", message: errors.uname });
    } else if (passwordInput == "") {
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setUsers([
        ...users,
        { username: usernameInput, password: passwordInput },
      ]);
      setPasswordInput("");
      setUsernameInput("");
      setGoToRegister(false);
      setErrorMessages({});
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

  //handles errors
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div>
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
              type="text"
              name="pass"
              required
            />
            {renderErrorMessage("pass")}
          </div>
          <div onClick={handleSubmit} className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
