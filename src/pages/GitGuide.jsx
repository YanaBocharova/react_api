import gitImg from "../assets/git.png";

const GitGuide = () => {
  return (
    <div style={styles.page}>
      {/* Intro Section */}
      <div style={styles.container}>
        <h1 style={styles.title}>Getting Started with Git & GitHub</h1>
        <p style={styles.paragraph}>
          Git is a <strong>version control system</strong> that helps you track changes in your codebase, collaborate with others, and manage multiple versions of your projects. GitHub is a platform that hosts Git repositories online, making collaboration easier.
        </p>

        <p style={styles.paragraph}>
          In this guide, we'll cover the essential steps to get comfortable with Git: setting up a repository, making changes, opening a <strong>pull request (PR)</strong>, and merging code into the <strong>main branch</strong>. Key Git and GitHub concepts will be highlighted in <strong>bold</strong>.
        </p>
      </div>

      {/* Git Image Section */}
      <div style={styles.container}>
        <h1 style={styles.title}>What Does Git Look Like?</h1>
        <p style={styles.paragraph}>
          Git primarily works from the <strong>command line</strong>, but there are graphical tools that can help visualize your repositories and commits. Here's a sample Git workflow using the terminal.
        </p>
        <img
          style={styles.img}
          src={gitImg}
          alt="Git command line interface"
        />
      </div>

      {/* Basic Git Commands Table */}
      <div style={styles.container}>
        <h1 style={styles.title}>Essential Git Commands</h1>
        <p style={styles.paragraph}>
          Here’s a quick overview of common Git commands you'll use frequently:
        </p>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.tableHeader}>Action</th>
                <th style={styles.tableHeader}>Command</th>
                <th style={styles.tableHeader}>Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Initialize repository", "git init", "Create a new Git repository in the current folder"],
                ["Clone repository", "git clone <url>", "Copy an existing repository from GitHub to your local machine"],
                ["Check status", "git status", "View changes in your working directory"],
                ["Add changes", "git add .", "Stage all changes for the next commit"],
                ["Commit changes", "git commit -m 'message'", "Record changes to the repository with a message"],
                ["View history", "git log", "See the history of commits in the repository"],
                ["Push changes", "git push origin main", "Send local commits to the remote repository"],
                ["Pull changes", "git pull", "Fetch and merge changes from the remote repository"],
                ["Create branch", "git branch <name>", "Create a new branch for development"],
                ["Switch branch", "git checkout <name>", "Move to another branch"],
                ["Merge branch", "git merge <branch>", "Combine changes from another branch into the current branch"],
              ].map((row, index) => (
                <tr key={index} style={styles.tableRow}>
                  {row.map((cell, i) => (
                    <td key={i} style={styles.tableCell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pull Request Section */}
      <div style={styles.container}>
        <h1 style={styles.title}>Opening a Pull Request (PR)</h1>
        <p style={styles.paragraph}>
          After committing your changes on a feature branch, you can open a <strong>pull request (PR)</strong> on GitHub. A PR is a request to merge your branch into another branch, typically the <strong>main branch</strong>. Reviewers can comment, suggest changes, and approve the merge.
        </p>
      </div>

      {/* Merge Section */}
      <div style={styles.container}>
        <h1 style={styles.title}>Merging Code into Main</h1>
        <p style={styles.paragraph}>
          Once your PR is approved, you can merge your changes. Merging incorporates your commits into the target branch. GitHub provides options like <strong>merge commit</strong>, <strong>squash and merge</strong>, and <strong>rebase and merge</strong>. After merging, make sure to pull the latest changes to keep your local repository up-to-date.
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#f5f6f8",
    minHeight: "100vh",
    padding: "60px 20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "40px 50px",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
    marginBottom: "40px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "25px",
    color: "#111",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#333",
    marginBottom: "18px",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
  },
  tableContainer: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableHeaderRow: {},
  tableHeader: {
    borderBottom: "2px solid #ddd",
    padding: "12px 15px",
    backgroundColor: "#f2f2f2",
    fontWeight: "700",
    textAlign: "left",
    color: "#111",
  },
  tableRow: {
    borderBottom: "1px solid #eee",
  },
  tableCell: {
    padding: "12px 15px",
    textAlign: "left",
    color: "#333",
  },
};

export default GitGuide;
