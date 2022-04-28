import React, {useState} from "react";
import CustNav from "../NavBar/CustNav";
import "./Home.css"
const axios = require("axios");


const Home = ({ userLogin, setUserLogin }) => {
    const [fullName, setName] = useState("");
    const firstTime = userLogin.firsttime;
    //console.log("FirstTime:" + firstTime);

    const render = () => {
        const options = {
            method: "POST",
            url: "/api/user/home",
            data: {
              id: userLogin.id,
            },
          };
    
          axios.request(options).then(
              (response) => {
                  if (response.data.exists) {
                    setName(response.data.info.fullname);
                  }
                  else {
                    setName("ADMIN");
                  }
            },
            (error) => {
              console.log(error);
            }
          );

        return(
            <div className = "display-container">
                <h1>Welcome back, {fullName}!</h1>
            </div>

        );
    };
    //<h2>Here is your previous calculation:</h2>
    //<h3>You calculated that 40,000 gallons of fuel would be $20,000.</h3>

    const redirect = () => {
        return(
            <div className = "display-container">
                <h1>Please enter account information first!</h1>
            </div>
        );
    }
    return (
        <div className = "App">
            <div className="navbar">
                <CustNav />
            </div>
            <div>{firstTime? redirect(): render()}</div>

        </div>
    );
};

export default Home;
