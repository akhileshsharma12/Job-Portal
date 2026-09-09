import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert("Registration successful!");
        navigate('/login')
      }
      else {
        alert("Registration failed");
      }
    }catch(err) {
      alert('Something went wrong');
      console.log(err);
    }
  }

  return (
    <div className="register-container">
      <div className="register-title">
        <h2> Welcome to my redstand </h2>
      </div>
      <div className="register-main">
        <div className="register-main-1">
          <h2>fill in your details </h2>
          <p>
            Sign up for your free Randstad account to find and apply for jobs
            faster. Benefits include personalized recommendations, quick
            application saving, tracking your job applications, and instant job
            alerts.
          </p>
        </div>
        <div className="register-main-2">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor=""> Name : </label>
              <input type="text" placeholder="Full Name " name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor=""> Email : </label>
              <input type="email" placeholder="Enter Email " name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor=""> Gender : </label>
              <input type="text" placeholder="Male / Female " name="gender" value={formData.gender} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor=""> Password : </label>
              <input type="text" placeholder="Enter Password " name="password" value={formData.password} onChange={handleChange} />
            </div>
          

          <div className="terms">
            <div>
              <input type="checkbox" name="" id="" />
              <p>I accept the Terms and Condition and Privacy policy</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <p>
                I am happy to receive email communications from Randstad for
                purposes of marketing. It's optional. You can unsubscribe at any
                time.
              </p>
            </div>
            <div className="already-acc-sec">
              <p className="login-class">
                {" "}
                Already have an account ? <Link to="/login"> Login </Link>{" "}
              </p>
            </div>
            <div>
              <button type="submit"> Register </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
