import React from "react";
import { useNavigate } from "react-router-dom";
import "./CustNav.css";

const CustNav = () => {
  const navigate = useNavigate();
  const homeClick = (event) => {
    navigate("/home");
  };
  const formClick = (event) => {
    navigate("/home/accountinfo");
  };
  const pricingClick = (event) => {
    navigate("/home/pricing");
  };
  const historyClick = (event) => {
    navigate("/home/history");
  };

  const LogoutClick = (event) => {
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a onClick={homeClick}>Home</a>
          </li>
          <li>
            <a onClick={formClick}>Account Info</a>
          </li>
          <li>
            <a onClick={pricingClick}>Pricing</a>
          </li>
          <li>
            <a onClick={historyClick}>History</a>
          </li>
          <li>
            <a onClick={LogoutClick}>Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CustNav;
