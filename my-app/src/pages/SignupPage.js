import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      console.error("All fields must be filled out!");
      return;
    }

    console.log("Signup data:", {
      name: name,
      email: email,
      password: password,
    });

    try {
      const response = await fetch("http://localhost:8080/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        console.error("Registration failed");
        return;
      }

      navigate("/");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="signup bg-black h-screen pt-12">
      <div className="signup-container ">
        <h1 className="signup-heading">Signup Page</h1>

        <div className="signup-box">
          <form className="signup-form" onSubmit={handleSignup}>
            <label className="input-label">
              Name:
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="signup-input"
                required
              />
            </label>
            <label className="input-label">
              Email:
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signup-input"
                required
              />
            </label>
            <label className="input-label">
              Password:
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-input"
                required
              />
            </label>
            <button type="submit" className="signup-button">
              Sign up
            </button>
          </form>
        </div>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/" className="login-link-text">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
