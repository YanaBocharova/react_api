import { Link } from "react-router-dom";
import "../styles/EducationMenu.css";

const EducationMenu = () => {
  return (
    <div className="mega-menu">

      <div className="mega-column">
        <h4>DevOps</h4>
        <Link to="/commandLine" className="menu-link">Introduction to Command line</Link>
        <Link to="/gitguide" className="menu-link">Introduction to Git</Link>
        <Link to="/docker" className="menu-link">Introduction to Docker</Link>
        <Link to="/devops" className="menu-link">DevOps Engineer</Link>
      </div>

      <div className="mega-column">
        <h4>AI Engineering</h4>
        <p>Prompting Techniques</p>
        <p>Coding with AI Assistant</p>
        <p>Agents for Software Development</p>
      </div>

      <div className="mega-column">
        <h4>Web Development</h4>

        <Link to="/javascript" className="menu-link">
          Javascript Course
        </Link>

        <p>.NET Course</p>
        <p>Typescript Course</p>
      </div>

    </div>
  );
};

export default EducationMenu;
