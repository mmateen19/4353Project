import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
//import components here

//import { Outlet, Link } from "react-router-dom";
import Login from "./components/Login";
//import Profile from "./components/Profile";
//import Register from "./components/Register";
//import FuelQuoteForm from "./components/FuelQuoteForm";

function App({ data, setData }) {
  //these are states to handle the invalid sign in
  const navigate = useNavigate();
  navigate("/login");
  return <Login data={data} setData={setData} />;
}

export default App;
