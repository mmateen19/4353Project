import React, { useState } from "react";
import "./App.css";
//import components here
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  //these are states to handle the invalid sign in
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="App">
      <div className="display-container">
        {isSubmitted ? (
          <Profile />
        ) : (
          <Login
            errorMessages={errorMessages}
            setErrorMessages={setErrorMessages}
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
          />
        )}
      </div>
    </div>
  );
}

export default App;
