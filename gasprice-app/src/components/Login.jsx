//this is where we will make components to add to the main app
import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./Login.css";


import {useNavigate} from 'react-router-dom';

const Login = () => {

  const [errorMessages, setErrorMessages] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);
  const [goToRegistered, setGoToRegister] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [reEnterPasswordInput, setReEnterPasswordInput] = useState("");

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
    {
      username: "a",
      password: "a",
    }
  ];

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
    var { uname, pass } = document.forms[0];
    //change "users.find" to "database.find" to test with local input. still implementing
    const userData = users.find((user) => user.username === uname.value);
    //compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        //invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsLogin(true);
        navigate("/Profile")
      }
    } else {
      //username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  //should take us to a register page
  const handleRegister = (event) => {
    event.preventDefault();
    setErrorMessages({});
    setGoToRegister(true);
  };

  return (
    <div>
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
          <div className = "button-container"><input onClick = {handleLogin} type = 'submit' value='Create Account'/> </div>
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
