import React from "react";
import "./Profile.css";
import CustNav from "./CustNav";
import Form from "./Form";

const Profile = () => (
  <div className="Profile">
    <div className="navbar">
      <CustNav />
    </div>
    <Form />
  </div>
);
export default Profile;
