import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SlamBook</h3>
          <span className="loginDesc">
            Connect with the world around you on SlamBook
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" type="text" />
            <input placeholder="email" className="loginInput" type="text" />

            <input placeholder="password" className="loginInput" type="text" />
            <input placeholder="password again" className="loginInput " />
            <button className="loginButton">Sign up</button>

            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
