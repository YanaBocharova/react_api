import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";

const TopSignupBar = () => {
  const navigate = useNavigate();

  return (
    <div className="top-signup-bar">
      {/* LEFT */}
      <span className="top-signup-text">
        Sign up for our news
      </span>

      {/* CENTER MENU */}
      <nav className="top-signup-menu">
        <span>AI</span>
        <span>Developer Tools</span>
        <span>Team Tools</span>
        <span>Education</span>
        <span>Solutions</span>
        <span>Support</span>
        <span>Store</span>
        <span>Products</span>
      </nav>

      {/* RIGHT */}
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
