import React from 'react';
import "./KYC.css";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MainBackground from "../../static/img/pages/undraw_authentication_fsn5.svg";

function KYC() {
    return (
        <div className="kycPage"> 
            <div className  ="container">
                <div className = "row">
                <h3 className = "kyc-text">Please complete your KYC to set up your stall</h3>
                <img className = "bg-img"src = {MainBackground}alt = "img" />
                
                </div>
                
                <div className  ="complete-kyc">
                <h5 className="line1">One stop KYC is just as simple as verifying the authorised documents in a go.</h5>
                <h5 className ="line2">Click the button below and get it done.  <CheckCircleIcon fontSize = "large" color = "disabled"/></h5>
                <button type = "submit" className = "kyc-btn">Complete KYC</button>
                </div>
                </div>
            </div>
        
        
    )
}

export default KYC
