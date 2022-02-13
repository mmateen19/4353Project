//this is where we will make components to add to the main app
import React from 'react';

const Login = () => {
    //todo
    const loginButtonHandler = (e) => {
        console.log(e);
    };

    return (
        <div className = 'Login'>
            <h1>Username</h1>
            <input type = 'text' name = 'Password' />
        </div>
    );
};

export default Login;
