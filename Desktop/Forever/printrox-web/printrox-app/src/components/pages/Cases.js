import React from 'react'
import "./Cases.css"
import {Link} from "react-router-dom"
function Cases() {
    return (
        <div className = "Signup">
        <div className = "heading">
         <h2 className = "Case-header">Sign up as</h2>
        </div>

            <div className = "signup-column">
              {/* User sign up */}
               <div className = "row forms">
                <div className = "signup-form">
                    <form className = "signup-form1">
                        <h2>User</h2>
                        <div className = "input-data">
                        <h5 className = "h5">Name</h5>
                        <input className = "inputField"  type = "name"></input>
                        </div>
                        <div className = "input-data">
                        <h5 className = "h5">Mail address</h5>
                        <input className = "inputField"  type = "text" required = "true"></input>
                        </div>
                        <div className = "input-data">
                        <h5 className = "h5">Contact Number</h5>
                        <input className = "inputField"  type = "integer"></input>
                        </div>
                        <div className = "input-data">
                        <h5 className = "h5">Password</h5>
                        <input className = "inputField"  type = "password"></input>
                        </div>
                        <Link to = "/">
                        <div className = "signup-btn">
                        <button className = "sign-up-btn">Sign up</button>
                        </div>
                        </Link>
                        <hr></hr>
                    </form>
              
                 </div>
              
              
              
              {/* Vendor sign up */}

              <div className = "signup-form">
                    <form className = "signup-form1">
                        <h2>Vendor</h2>
                        <div className = "input-data">
                        <h5 className = "h5">Name</h5>
                        <input className = "inputField"  type = "name"></input>
                        </div>
                        <div className = "input-data">
                        <h5 className = "h5">Mail address</h5>
                        <input className = "inputField" type = "text" required = "true"></input>
                        </div>
                        <div className = "input-data">
                        <h5 className = "h5">Contact Number</h5>
                        <input className = "inputField"  type = "integer"></input>
                        </div>
                        <div className = "input-data">
                        <h5 className = "h5">Password</h5>
                        <input className = "inputField" type = "password"></input>
                        </div>
                        
                        <Link to = "/kyc">
                        <div className = "signup-btn">
                        <button className = "sign-up-btn">Sign up</button>
                        </div>
                        </Link>

                        <hr></hr>
                      
                    </form> 
                </div>
            </div>
            
           </div>
        </div>
        

        
    )
}

export default Cases
