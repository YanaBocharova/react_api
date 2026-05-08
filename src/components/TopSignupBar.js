import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import EducationMenu from "../pages/EducationMenu";

const TopSignupBar = () => {

  const navigate = useNavigate();
  const educationRef = useRef(null);

  const [showEducation, setShowEducation] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Close education dropdown when clicking outside
  useEffect(() => 
  {
    const handleClickOutside = (e) => {
      if ( educationRef.current && !educationRef.current.contains(e.target)) 
      {
        setShowEducation(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAllMenus = () =>
  {
    setShowEducation(false);
    setShowMobileMenu(false);
  };

  return (
    <div className="top-signup-bar">

      {/* Burger button (mobile only via CSS) */}
      <button
        className="burger-btn"
        onClick={() => setShowMobileMenu((prev) => !prev)}
        >
      
        <div className={`burger-line ${showMobileMenu ? "open" : ""}`} />
        <div className={`burger-line ${showMobileMenu ? "open" : ""}`} />
        <div className={`burger-line ${showMobileMenu ? "open" : ""}`} />
        <div className={`burger-line ${showMobileMenu ? "open" : ""}`} />
      </button>

      {/* NAV MENU */}
      <nav className={`top-signup-menu ${showMobileMenu ? "mobile-open" : ""}`}>

        <span className="top-signup-text">
          Sign up for our news
        </span>

        <span>AI</span>

        <span onClick={closeAllMenus}>
          <Link to="/" className="nav-link-reset">Home</Link>
        </span>

        <span>Developer Tools</span>

        {/* EDUCATION DROPDOWN */}
        <span
          ref={educationRef}
          className={`menu-item has-caret ${showEducation ? "active" : ""}`}
          onClick={() => setShowEducation((prev) => !prev)}
        >
          Education

          {showEducation && (
            <EducationMenu onClose={closeAllMenus} />
          )}
        </span>

        <span>Solutions</span>

        <span onClick={closeAllMenus}>
          <Link to="/support" className="nav-link-reset">
            Support
          </Link>
        </span>

        <span>Community</span>
      </nav>

      {/* LOGIN BUTTON */}
      <button
        className="top-signup-login"
        onClick={() => navigate("/signin")}
      >
        <img src={userIcon} alt="User Icon" height="15" width="15" />
      </button>

    </div>
  );
};

export default TopSignupBar;