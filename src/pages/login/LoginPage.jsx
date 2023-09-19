import React from "react";
import "./login.css";

const LoginPage = () => {
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
            <input placeholder="email" className="loginInput" type="text" />
            <input placeholder="password" className="loginInput " />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
