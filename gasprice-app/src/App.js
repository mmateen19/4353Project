import React, { useState } from "react";
import "./App.css";
//import components here
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

function App() {
  //these are states to handle the invalid sign in
  const [errorMessages, setErrorMessages] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);
  const [goToRegistered, setGoToRegister] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [reEnterPasswordInput, setReEnterPasswordInput] = useState("");

  return (
    <div className="App">
      {goToRegistered ? (
        <Register
          users={users}
          setUsers={setUsers}
          usernameInput={usernameInput}
          passwordInput={passwordInput}
          setUsernameInput={setUsernameInput}
          setPasswordInput={setPasswordInput}
          errorMessages={errorMessages}
          setErrorMessages={setErrorMessages}
          setGoToRegister={setGoToRegister}
          reEnterPasswordInput={reEnterPasswordInput}
          setReEnterPasswordInput={setReEnterPasswordInput}
        />
      ) : (
        <div>
          {isLogin ? (
            <Profile />
          ) : (
            <Login
              errorMessages={errorMessages}
              setErrorMessages={setErrorMessages}
              setIsLogin={setIsLogin}
              users={users}
              setGoToRegister={setGoToRegister}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
