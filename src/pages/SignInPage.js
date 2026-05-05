import React, { useState } from "react";
import axios from "axios";
import "../styles/SignInPage.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // fixed import

const SignInPage = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [mode, setMode] = useState(null); // "login" or "create"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Show login form
  const handleLoginWithEmail = () => {
    setMode("login");
    setShowEmailForm(true);
  };

  // Show create account form
  const handleCreateAccount = () => {
    setMode("create");
    setShowEmailForm(true);
  };

  // Go back to default view
  const handleBack = () => {
    setShowEmailForm(false);
    setMode(null);
    setEmail("");
    setPassword("");
  };

  // Submit email/password login or account creation
  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    if (mode === "login") {
      try {
        const resp = await axios.post(
          "http://localhost:5106/api/v1/Accounts/signin",
          { email, password }
        );

        if (resp.status === 200) {
          navigate("/usersignin");
        } else {
          alert("Login failed. Check console for details.");
          console.log("Login failed:", resp);
        }
      } catch (error) {
        console.log(error.response || error);
      }
    } else if (mode === "create") {
      try {
        const response = await axios.post(
          "http://localhost:5106/api/v1/Accounts",
          { email, password }
        );

        if (response.status === 200) {
          console.log("Account created:", response.data);
          alert("Account created successfully!");
          navigate("/usersignin");
        } else {
          alert("Account creation failed. Check console for details.");
          console.log("Account creation failed:", response);
        }
      } catch (error) {
        console.error("Error creating account:", error.response || error);
        alert("Failed to create account. Check console for details.");
      }
    }
  };

  // Google login success
  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential); // fixed usage
    console.log("Google user:", decoded);

    // Send token to backend for login / registration
    axios
      .post("http://localhost:5106/api/v1/Accounts/google", {
        token: credentialResponse.credential,
      })
      .then((res) => {
        console.log("Google login success:", res.data);
        navigate("/usersignin");
      })
      .catch((err) => {
        console.error("Google login error:", err.response || err);
        alert("Google login failed. Check console for details.");
      });
  };

  // Google login failure
  const handleGoogleError = () => {
    console.log("Google login failed");
    alert("Google login failed. Try again.");
  };

  return (
    <div className="signin-page">
      <main className="card">
        <h1 className="title">Dream Team Account</h1>

        {/* BACK LINK */}
        {showEmailForm && (
          <p className="back-link" onClick={handleBack}>
            ← All login options
          </p>
        )}

        {/* DEFAULT VIEW */}
        {!showEmailForm && (
          <>
            <p className="subtitle">
              Log in to manage all your products and services
            </p>

            {/* Google Login */}
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              width="350"
            />

            {/* GitHub login placeholder */}
            <button className="btn btn-github"> Continue with GitHub</button>

            <div className="or-separator">or</div>

            <button className="btn-email" onClick={handleLoginWithEmail}>
              Continue with email
            </button>

            <p className="new-here">
              New here?{" "}
              <span className="link" onClick={handleCreateAccount}>
                Create an account
              </span>
            </p>
          </>
        )}

        {/* EMAIL FORM */}
        {showEmailForm && (
          <>
            <p className="subtitle">
              {mode === "login"
                ? "Log in to manage all your products and services"
                : "Create an account to manage all your products and services"}
            </p>

            <input
              className="email-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="email-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn-submit" onClick={handleSubmit}>
              {mode === "login" ? "Log in" : "Create account"}
            </button>
          </>
        )}

        <hr />

        <p className="agreement">
          By continuing, you agree to the{" "}
          <a href="/agreement">Dream Account Agreement</a>
        </p>
      </main>
    </div>
  );
};

export default SignInPage;
