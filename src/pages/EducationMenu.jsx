import { Link } from "react-router-dom";
import "../styles/EducationMenu.css";

const EducationMenu = ({ onClose }) => {
  return (
    <div className="mega-menu">

      {/* close only for mobile via CSS visibility */}
      <div className="mobile-close" onClick={onClose}>
        ✕
      </div>

      <div className="mega-column">
        <h4>DevOps</h4>

        <Link to="/commandLine" className="menu-link" onClick={onClose}>
          Introduction to Command line
        </Link>

        <Link to="/gitguide" className="menu-link" onClick={onClose}>
          Introduction to Git
        </Link>

        <Link to="/docker" className="menu-link" onClick={onClose}>
          Introduction to Docker
        </Link>

        <Link to="/devops" className="menu-link" onClick={onClose}>
          DevOps Engineer
        </Link>
      </div>

      <div className="mega-column">
        <h4>AI Engineering</h4>
        <p onClick={onClose}>Prompting Techniques</p>
        <p onClick={onClose}>Coding with AI Assistant</p>
        <p onClick={onClose}>Agents for Software Development</p>
      </div>

      <div className="mega-column">
        <h4>Web Development</h4>

        <Link to="/javascript" className="menu-link" onClick={onClose}>
          Javascript Course
        </Link>

        <p onClick={onClose}>.NET Course</p>
        <p onClick={onClose}>Typescript Course</p>
      </div>

    </div>
  );
};

export default EducationMenu;