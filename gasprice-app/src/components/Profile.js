import React from "react";
import "./Profile.css";
import CustNav from "./CustNav";
import Form from "./Form";
import "./Form.css";

const Profile = () => (
  <div className="Profile">
    <div className="navbar">
      <CustNav />
    </div>
    <div className="Form">
      <Form />
    </div>
  </div>
);
export default Profile;
