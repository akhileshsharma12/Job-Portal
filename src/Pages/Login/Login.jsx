import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChnage = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const email = loginData.email.trim();
    // const password = loginData.password.trim();

    try {
      const response = await fetch(`http://localhost:3000/users`);

      if (!response.ok) {
        throw new Error("Unable to contact the server");
      }

      const users = await response.json();

      const user = users.find((user) =>  user.email === loginData.email && user.password === loginData.password);

      if (!user) {
        alert("invalid password or email");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      window.dispatchEvent(new Event("login"));

      alert("Login successfull");

      navigate("/jobs");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <h2> Welcome to my redstand </h2>
      </div>
      <div>
        <div className="login-main">
          <form action="" onSubmit={handleSubmit}>
            <div className="login-field-1">
              <label htmlFor=""> Email : </label>
              <input
                type="email"
                placeholder="Enter Email "
                name="email"
                value={loginData.email}
                onChange={handleChnage}
              />
            </div>
            <div className="login-field-2">
              <label htmlFor=""> Password : </label>
              <input
                type="text"
                placeholder="Enter Password "
                name="password"
                value={loginData.password}
                onChange={handleChnage}
              />
            </div>

            <div className="remember">
              <div className="remember-field">
                <input type="checkbox" name="" id="" />
                <p> Remember me </p>
              </div>
              <div className="submit">
                <button type="submit"> Login </button>
              </div>
            </div>
          </form>

          <div className="no-acc-sec">
            <p>
              {" "}
              No account ? <Link to="/register"> Register as new Account </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
