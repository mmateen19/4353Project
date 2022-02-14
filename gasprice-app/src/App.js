import React, { useState } from "react";
import "./App.css";
//import components here
import Login from "./components/Login";

function App() {
  //these are states to handle the invalid sign in
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="App">
      <Login
        errorMessages={errorMessages}
        setErrorMessages={setErrorMessages}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
    </div>
  );
}

export default App;
