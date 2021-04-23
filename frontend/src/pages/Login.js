import React, { useState } from "react";
import "../stylesheets/module.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    const user = { email, password };
    debugger;
  }
  return (
    <div className="login-container">
      <div>
        <p>
          <span>Sign in to your</span>
          <span> account.</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="login-input">
            <div>
              <label>Email</label>
              <input
                type="email"
                onChange={({ target }) => setEmail(target.value)}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                type="Password"
                onChange={({ target }) => setPassword(target.value)}
              ></input>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
