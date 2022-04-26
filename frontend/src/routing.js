import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register";
import Home from "./components/Home/Home";
import AccountInfoForm from "./components/AccountInfo/AccountInfoForm";
import FuelQuoteForm from "./components/FuelQuote/FuelQuoteForm";
import History from "./components/FuelQuote/History";

const Routing = () => {
  //this is where we access the api
  const [userLogin, setUserLogin] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="login"
          element={<Login userLogin={userLogin} setUserLogin={setUserLogin} />}
        />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route
          path="home/accountinfo"
          element={
            <AccountInfoForm
              userLogin={userLogin}
              setUserLogin={setUserLogin}
            />
          }
        />
        <Route path="home/pricing" element={<FuelQuoteForm />} />
        <Route path="home/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
