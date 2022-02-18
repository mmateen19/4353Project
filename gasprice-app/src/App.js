import React, { useState } from "react";
import "./App.css";
//import components here
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

function App() {
  //these are states to handle the invalid sign in
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  const [clickedRegistered, setRegisterClick] = useState(false);

  return (
    <div className="App">
      {clickedRegistered ? (
        <Register users={users} setUsers={setUsers} />
      ) : (
        <div>
          {isSubmitted ? (
            <Profile />
          ) : (
            <Login
              errorMessages={errorMessages}
              setErrorMessages={setErrorMessages}
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
              users={users}
              setUsers={setUsers}
              setRegisterClick={setRegisterClick}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
