import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App data={backendData} setData={setBackendData} />}
        />
        <Route
          path="login"
          element={<Login data={backendData} setData={setBackendData} />}
        />
        <Route
          path="register"
          element={<Register data={backendData} setData={setBackendData} />}
        />
        <Route
          path="home"
          element={<Home data={backendData} setData={setBackendData} />}
        />
        <Route
          path="home/accountinfo"
          element={
            <AccountInfoForm data={backendData} setData={setBackendData} />
          }
        />
        <Route
          path="home/pricing"
          element={
            <FuelQuoteForm data={backendData} setData={setBackendData} />
          }
        />
        <Route
          path="home/history"
          element={<History data={backendData} setData={setBackendData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
