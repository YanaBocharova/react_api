import "../styles/EducationMenu.css";

const EducationMenu = () => {
  return (
    <div className="mega-menu">
      <div className="mega-column">
        <h4>For Students</h4>
        <p>Free IDEs</p>
        <p>Student Pack</p>
        <p>Learning Resources</p>
      </div>

      <div className="mega-column">
        <h4>For Teachers</h4>
        <p>Classroom Licenses</p>
        <p>Teaching Tools</p>
        <p>Course Materials</p>
      </div>

      <div className="mega-column">
        <h4>Programs</h4>
        <p>Academic Licenses</p>
        <p>Certification</p>
        <p>Workshops</p>
      </div>
    </div>
  );
};

export default EducationMenu;
