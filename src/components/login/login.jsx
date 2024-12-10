import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between Login and Register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (isRegistering && password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (isRegistering) {
      console.log("Registering with:", email, password);
      setErrorMessage(""); // Clear error message
    } else {
      console.log("Logging in with:", email, password);
      setErrorMessage(""); // Clear error message
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {isRegistering && (
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" className="login-button">
          {isRegistering ? "Register" : "Login"}
        </button>
        <p className="toggle-message">
          {isRegistering ? "Already have an account?" : "New here?"}{" "}
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
