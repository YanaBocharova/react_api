import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import EducationMenu from "../pages/EducationMenu";
import { Link } from "react-router-dom";

const TopSignupBar = () => {
  const navigate = useNavigate();
  const [showEducation, setShowEducation] = useState(false);
  const educationRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (educationRef.current && !educationRef.current.contains(e.target)) {
        setShowEducation(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="top-signup-bar">
      <span className="top-signup-text">Sign up for our news</span>

      <nav className="top-signup-menu">
        <span>AI</span>

        <span>
          <Link to="/" className="nav-link-reset">Home</Link>
        </span>

        <span>Developer Tools</span>

        {/* EDUCATION */}
        <span
          ref={educationRef}
          className={`menu-item has-caret ${showEducation ? "active" : ""}`}
          onClick={() => setShowEducation(prev => !prev)}
        >
          Education

          {showEducation && <EducationMenu />}
        </span>

        <span>Solutions</span>
        <span>Support</span>
        <span>Community</span>
      </nav>

      <button
        className="top-signup-login"
        onClick={() => navigate("/signin")}
      >
        <img src={userIcon} alt="User Icon" height="18" />
      </button>
    </div>
  );
};

export default TopSignupBar;
