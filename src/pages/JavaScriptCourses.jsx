import "../styles/JavaScriptCourses.css";

const JavaScriptCourses = () => {
  return (
    <div className="js-page">
      <h1>JavaScript</h1>

      <div className="course-grid">
        <div className="course-card">
          <h3>Frontend Developer</h3>
          <p>Master HTML, CSS, and JavaScript to build modern web apps.</p>
        </div>

        <div className="course-card">
          <h3>Introduction to JavaScript</h3>
          <p>Learn JavaScript basics by building hands-on projects.</p>
        </div>

        <div className="course-card">
          <h3>JavaScript Core</h3>
          <p>Deep dive into core JavaScript concepts.</p>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptCourses;
