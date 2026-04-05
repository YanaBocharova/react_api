import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import EducationMenu from "../pages/EducationMenu";
import { Link } from "react-router-dom";

const TopSignupBar = () => {
  const navigate = useNavigate();
  const [showEducation, setShowEducation] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const educationRef = useRef(null);

  // Close education menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (educationRef.current && !educationRef.current.contains(e.target)) {
        setShowEducation(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on window resize (desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setShowMobileMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="top-signup-bar">
      {/* Desktop: Sign up text is part of menu; Mobile: move inside nav */}
      <button
        className="burger-btn"
        onClick={() => setShowMobileMenu((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <div className={`burger-line ${showMobileMenu ? "open" : ""}`}></div>
        <div className={`burger-line ${showMobileMenu ? "open" : ""}`}></div>
        <div className={`burger-line ${showMobileMenu ? "open" : ""}`}></div>
      </button>

      {/* Menu */}
      <nav className={`top-signup-menu ${showMobileMenu ? "mobile-open" : ""}`}>
        {/* Optional: sign up text for mobile only */}
        <span className="top-signup-text">Sign up for our news</span>

        <span>AI</span>

          <span onClick={() => setShowMobileMenu(false)}>
          <Link to="/" className="nav-link-reset">Home</Link>
        </span>

        <span>Developer Tools</span>

        <span
          ref={educationRef}
          className={`menu-item has-caret ${showEducation ? "active" : ""}`}
          onClick={() => setShowEducation((prev) => !prev)}
        >
          Education
          {showEducation && <EducationMenu />}
        </span>

        <span>Solutions</span>

          <span onClick={() => setShowMobileMenu(false)}>
          <Link to="/support" className="nav-link-reset">Support</Link>
        </span>

        <span>Community</span>
      </nav>

      <button className="top-signup-login" onClick={() => navigate("/signin")}>
        <img src={userIcon} alt="User Icon" height="18" />
      </button>
    </div>
  );
};

export default TopSignupBar;