import React, { useState } from "react";
import "../stylesheets/module.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-container">
      <div>
        <p>
          <span>Sign in to your</span>
          <span> account.</span>
        </p>
        <div className="login-input">
          <div>
            <label>Email</label>
            <input label="Email"></input>
          </div>
          <div>
            <label>Password</label>
            <input label="Password"></input>
          </div>
        </div>
      </div>
    </div>
  );
}
