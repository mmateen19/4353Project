import React, { useState, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  });

  //this is just to handle the default route "/". By default out app opens to login so we send route to login

  //navigate("/login");
  return <div></div>;
}

export default App;
