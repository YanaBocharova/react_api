import React, { useState } from "react";
import "../styles/SignInPage.css";

const SignInPage = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [mode, setMode] = useState(null); // login | create
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginWithEmail = () => {
    setMode("login");
    setShowEmailForm(true);
  };

  const handleCreateAccount = () => {
    setMode("create");
    setShowEmailForm(true);
  };

  const handleBack = () => {
    setShowEmailForm(false);
    setMode(null);
    setEmail("");
    setPassword("");
  };

  const handleSubmit = () => {
    if (mode === "login") {
      console.log("Log in:", { email, password });
    } else {
      console.log("Create account:", { email, password });
    }
  };

  return (
    <div className="signin-page">
      <main className="card">
        <h1 className="title">Dream Team Account</h1>

        {/* BACK LINK (FOR LOGIN & CREATE) */}
        {showEmailForm && (
          <p className="back-link" onClick={handleBack}>
            ← All login options
          </p>
        )}

        {/* ================= DEFAULT VIEW ================= */}
        {!showEmailForm && (
          <>
            <p className="subtitle">
              Log in to manage all your products and services
            </p>

            <button className="btn btn-google">🔴 Continue with Google</button>
            <button className="btn btn-github">🐙 Continue with GitHub</button>

            <div className="social-row">
              <button className="btn btn-social">🦊</button>
              <button className="btn btn-social">🟩</button>
              <button className="btn btn-social">🔵</button>
            </div>

            <div className="or-separator">or</div>

            <button
              className="btn-email"
              onClick={handleLoginWithEmail}
            >
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

        {/* ================= EMAIL FORM ================= */}
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
