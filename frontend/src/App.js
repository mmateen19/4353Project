import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  //this is just to handle the default route "/". By default out app opens to login so we send route to login
  const navigate = useNavigate();
  navigate("/login");
  //return <div></div>;
}

export default App;
