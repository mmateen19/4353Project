import React, { useState } from "react";
import "./App.css";
//import components here


import { Outlet, Link } from "react-router-dom"
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

function App() {
  //these are states to handle the invalid sign in

  return (
    <div className="App">
     <Login />
    </div>
  );
}

export default App;
