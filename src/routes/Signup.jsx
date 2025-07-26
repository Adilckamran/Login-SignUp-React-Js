import React, { useState } from 'react';
import second from '../assets/email.png';
import first from '../assets/password.png';
import third from '../assets/person.png';
import './Signup.css';
import { useNavigate } from 'react-router';

export default function Signup() {
  const navigate = useNavigate()
  const [action, setAction] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Called on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", data);
    localStorage.setItem(data.name + data.email , JSON.stringify(data))
    navigate("/login")
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit} className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={third} alt="" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="input">
          <img src={second} alt="" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <img src={first} alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className="submit-container">
          <button type="submit" className={action === "Login" ? "submit gray" : "submit"}>
            {action}
          </button>
        </div>
      </form>
    </div>
  );
}
