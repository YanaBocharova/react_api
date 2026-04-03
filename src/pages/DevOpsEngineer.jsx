import { useState } from "react";

const DevOpsOverview = () => {
  const [openTopics, setOpenTopics] = useState({
    topic1: false,
    topic2: false,
    topic3: false,
  });

  const toggle = (key) => {
    setOpenTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div style={styles.page}>
      <div style={styles.layout}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Contents</h2>

          <ul style={styles.treeList}>
            {/* Introduction */}
            <li>
              <div style={styles.treeItem} onClick={() => toggle("topic1")}>
                Introduction
              </div>
              {openTopics.topic1 && (
                <ul style={styles.subList}>
                  <li style={styles.subItem}>What is CI/CD?</li>
                  <li style={styles.subItem}>CI/CD Tools </li>
                </ul>
              )}
            </li>

            {/* Topic 2 */}
            <li>
              <div style={styles.treeItem} onClick={() => toggle("topic2")}>
                Project Setup & CI/CD
              </div>
              {openTopics.topic2 && (
                <ul style={styles.subList}>
                  <li style={styles.subItem}>How to Create a GitHub Repository to Host Your Codebase</li>
                  <li style={styles.subItem}>How to Set Up the CI and CD Workflows Within Your Project

</li>
                </ul>
              )}
            </li>

            {/* Topic 3 */}
            <li>
              <div style={styles.treeItem} onClick={() => toggle("topic3")}>
                Monitoring System Health
              </div>
              {openTopics.topic3 && (
                <ul style={styles.subList}>
                  <li style={styles.subItem}>Subtopic 3.1</li>
                </ul>
              )}
            </li>

            {/* Static Topics */}
            <li><div style={styles.treeItem}>Artifact Repositories</div></li>
            <li><div style={styles.treeItem}>Understanding Deployment Strategies</div></li>
            <li><div style={styles.treeItem}>Working with Multiple Environments</div></li>
            <li><div style={styles.treeItem}>Cloud Deployment (AWS, Azure, GCP)</div></li>
            <li><div style={styles.treeItem}>Secrets and Credentials Management</div></li>
            <li><div style={styles.treeItem}>Environment Management (Dev, Staging, Prod)</div></li>
            <li><div style={styles.treeItem}>Best Practices for CI/CD</div></li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={styles.container}>
          <h1 style={styles.title}>Introduction to DevOps</h1>
          <p style={styles.paragraph}>
            DevOps is a set of cultural practices, principles, and tools that
            bridge the gap between software development and IT operations.
            Its goal is to shorten the software development lifecycle while
            delivering features, fixes, and updates quickly and reliably.
          </p>

          <h2 style={styles.subTitle}>Continuous Integration & Delivery (CI/CD)</h2>
          <p style={styles.paragraph}>
            CI/CD is one of the core practices of DevOps. Together, Continuous
            Integration and Continuous Delivery/Deployment help teams build,
            test, and release software in small, frequent, and automated steps.
          </p>
          <ul style={styles.list}>
            <li>CI ensures code changes are automatically tested and merged.</li>
            <li>CD automates deployment to production or staging.</li>
            <li>Improves reliability and speeds up delivery.</li>
          </ul>

          <h2 style={styles.subTitle}>Benefits of DevOps</h2>
          <ul style={styles.list}>
            <li>Faster time to market</li>
            <li>Better collaboration</li>
            <li>Higher reliability</li>
            <li>Automation of workflows</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(180deg, #8A2BE2, #00008B, #000000)",
    minHeight: "100vh",
    padding: "20px 15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  layout: {
    display: "flex",
    gap: "20px",
  },
  sidebar: {
    width: "240px",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "20px",
    borderRadius: "8px",
    color: "#E0E0FF",
    flexShrink: 0,
    height: "80vh",
    overflowY: "auto",
  },
  sidebarTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#F0E6FF",
  },
  treeList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  treeItem: {
    padding: "6px 0",
    cursor: "pointer",
    fontSize: "15px",
  },
  subList: {
    listStyle: "none",
    paddingLeft: "15px",
    marginTop: "4px",
  },
  subItem: {
    padding: "4px 0",
    fontSize: "14px",
    color: "#C8C8FF",
    cursor: "pointer",
  },
  container: {
    flex: 1,
    maxWidth: "900px",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "25px 30px",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#F0E6FF",
  },
  subTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "15px",
    marginBottom: "8px",
    color: "#C8C8FF",
  },
  paragraph: {
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#E0E0FF",
    marginBottom: "12px",
  },
  list: {
    marginLeft: "15px",
    marginBottom: "12px",
    color: "#E0E0FF",
  },
};

export default DevOpsOverview;
