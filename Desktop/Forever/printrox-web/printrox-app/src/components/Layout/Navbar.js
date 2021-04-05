import React from "react";
import "./Navbar.css";
import "../../static/style/layout/navbar.css";
import printroxLogo from "../../static/img/layout/logo.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar-sec">
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <div class="container-fluid">
          {/* eslint-disable-next-line  */}
          <Link to = "/">
          <a class="navbar-brand" href="/">
            <img className="brand-logo" src={printroxLogo} alt="Printrox" />
          </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
            {/*  eslint-disable-next-line  */}
              <a class="nav-link active" aria-current="page" href="#">
                Printrox
              </a>
               {/* eslint-disable-next-line  */}
              <a class="nav-link" href="#">
                How it works
              </a>
               {/* eslint-disable-next-line  */}
              <a class="nav-link" href="#">
                Shops and offers
              </a>
               {/* eslint-disable-next-line  */}
              <Link to = "/signin">
              <a class="nav-link" href = "Signin">
                Sign up/Sign in
              </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
