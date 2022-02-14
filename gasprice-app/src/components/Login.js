//this is where we will make components to add to the main app
import React from 'react';

const Login = () => {
    //todo
    const loginButtonHandler = (e) => {
        console.log(e);
    };

    return (
        <div className='Login'>
            <div>
                <h1 className = 'Login-words'>Username</h1>
                <input className='Login-input' type='text'/>
            </div>
            <div>
                <h1 className = 'Login-words'>Password</h1>
                <input className='Login-input' type='text'/>
            </div>
        </div>
    );
};

export default Login;
