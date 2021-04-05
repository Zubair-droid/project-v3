import React from 'react';
import "./Signin.css";
import Logo from "../../static/img/layout/logo.png"
import {Link} from "react-router-dom";

function Signin() {
    return (
    
    <div className = "Signin">
        
        <Link to = "/">
        <img className = "brand-logo" src = {Logo} alt = "brand-logo" />
        </Link>
             
        <div className = "login-form">
        <form className="login">
        <h1>Sign in</h1>
        <div className ="sign-in-div">
        <div className ="inputfield">
        <p className = "input-p">Enter your mail address</p>
        <input className = "input" type="text" />
        </div>
        <div className = "inputfield">
        <p className = "input-p">Enter your password</p>
        <input className = "input" type="password" />
        </div>
        
        <button className ="input-btn btn-block"><p className = "btn-text">Login</p></button>
        </div>
         <hr></hr>
         <Link to = "/signup">
         <span className="span">New user?</span>
        <button className ="input-signup-btn btn-block"><h3 className = "btn-text">Sign up</h3></button>
         </Link>
        </form>
        </div>  
    
     </div>
    )
}

export default Signin
