//this is where we will make components to add to the main app
import React from "react";
import "./Login.css";

const Login = ({
  errorMessages,
  setErrorMessages,
  isSubmitted,
  setIsSubmitted,
}) => {
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = (event) => {
    //prevent page reload
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    //find user login info
    const userData = database.find((user) => user.username === uname.value);
    //compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        //invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      //username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  return (
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
        <div onClick={handleSubmit} className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
