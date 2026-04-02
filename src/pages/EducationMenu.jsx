import { Link } from "react-router-dom";
import "../styles/EducationMenu.css";

const EducationMenu = () => {
  return (
    <div className="mega-menu">

      <div className="mega-column">
        <h4>DevOps</h4>
        <Link to="/commandLine" className="menu-link">Introduction to Command line</Link>
        <p>Introduction to Git</p>
        <p>Docker</p>
        <p>DevOps Engineer CI/CD pipelines</p>
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
