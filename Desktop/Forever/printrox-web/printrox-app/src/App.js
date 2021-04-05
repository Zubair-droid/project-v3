import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/pages/Home";
import Signin from  "./components/pages/Signin";
import Cases from "./components/pages/Cases"
import KYC from "./components/pages/KYC"
const App = () => {
  return (
    <Router>
     <div className = "App">
       <Switch>
      <Route path = "/kyc">
      <Navbar />
      <KYC />
      </Route>

      <Route path = "/signup">
      <Cases />
      </Route>
      
      <Route path = "/signin">
      <Signin />
      </Route>
       
        <Route path = "/">
         <Navbar />
         <Home />
         
        </Route>
       </Switch>
    </div>
    </Router>
  );
};

export default App;
