/* eslint-disable no-tabs */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import logo from "./img/logo.png";

class Welcome extends Component {
  render() {
    return (
      <div className="welcomePage">
        <img src={logo} alt="" />
        <div>
          <Link className="welcomeBtn" to="/signup">
            Sign up
          </Link>
          <Link className="welcomeBtn" to="/signin">
            Sign in
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
