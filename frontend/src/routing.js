import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import App from "./App";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import AccountInfoForm from "./components/AccountInfoForm";
import FuelQuoteForm from "./components/FuelQuoteForm";
import History from "./components/History";

const Routing = () => {
  //this is where we access the api
  const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   setUserData({});
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="login"
          element={<Login userData={userData} setUserData={setUserData} />}
        />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route
          path="home/accountinfo"
          element={
            <AccountInfoForm userData={userData} setUserData={setUserData} />
          }
        />
        <Route path="home/pricing" element={<FuelQuoteForm />} />
        <Route path="home/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
