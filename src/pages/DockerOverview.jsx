const DockerOverview = () => {
  return (
    <div style={styles.page}>
      {/* Intro Section */}
      <div style={styles.container}>
        <h1 style={styles.title}>Docker Overview</h1>
        <p style={styles.paragraph}>
          Docker is an open platform for developing, shipping, and running applications.
          It separates your applications from infrastructure so you can deliver software quickly.
        </p>
      </div>

      {/* Docker Platform */}
      <div style={styles.container}>
        <h1 style={styles.title}>The Docker Platform</h1>
        <p style={styles.paragraph}>
          Docker packages applications in <strong>containers</strong>, bundling code, runtime, and system libraries so they run predictably everywhere.
        </p>
      </div>

      {/* Use Cases */}
      <div style={styles.container}>
        <h1 style={styles.title}>What Can I Use Docker For?</h1>
        <ul style={styles.list}>
          <li>Fast, consistent delivery of applications</li>
          <li>Responsive deployment and scaling</li>
          <li>Running more workloads on less infrastructure</li>
        </ul>
      </div>

      {/* Architecture */}
      <div style={styles.container}>
        <h1 style={styles.title}>Docker Architecture</h1>
        <p style={styles.paragraph}>
          Docker uses a <strong>client-server architecture</strong>.
        </p>
        <h2 style={styles.subTitle}>Docker Daemon</h2>
        <p style={styles.paragraph}>
          The <strong>daemon</strong> manages images, containers, networks, and volumes in the background.
        </p>
        <h2 style={styles.subTitle}>Docker Client</h2>
        <p style={styles.paragraph}>
          The <strong>client</strong> sends commands (like <code>docker run</code>) to the daemon.
        </p>
        <h2 style={styles.subTitle}>Docker Desktop</h2>
        <p style={styles.paragraph}>
          <strong>Docker Desktop</strong> includes the daemon, client, Compose, and other tools for Mac, Windows, and Linux.
        </p>
      </div>

      {/* Containers */}
      <div style={styles.container}>
        <h1 style={styles.title}>What Is a Container?</h1>
        <p style={styles.paragraph}>
          Containers are lightweight, isolated instances of images that share the host OS kernel.
        </p>
      </div>

      {/* Docker Objects */}
      <div style={styles.container}>
        <h1 style={styles.title}>Docker Objects</h1>
        <ul style={styles.list}>
          <li><strong>Images</strong> — read-only templates</li>
          <li><strong>Containers</strong> — running instances of images</li>
          <li><strong>Networks</strong> — communication links between containers</li>
          <li><strong>Volumes</strong> — persistent storage for containers</li>
        </ul>
      </div>

      {/* Underlying Technology */}
      <div style={styles.container}>
        <h1 style={styles.title}>The Underlying Technology</h1>
        <p style={styles.paragraph}>
          Docker uses Linux kernel features like namespaces and cgroups to isolate containers with minimal overhead.
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    // Gradient background from violet → dark blue → black
    background: "linear-gradient(180deg, #8A2BE2, #00008B, #000000)",
    minHeight: "100vh",
    padding: "30px 15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto 20px auto",
    backgroundColor: "rgba(0,0,0,0.6)", // semi-transparent dark container
    padding: "20px 30px",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#F0E6FF", // light violet text
  },
  subTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "15px",
    marginBottom: "8px",
    color: "#C8C8FF", // lighter violet
  },
  paragraph: {
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#E0E0FF", // pale text for dark background
    marginBottom: "12px",
  },
  list: {
    marginLeft: "15px",
    marginBottom: "12px",
    color: "#E0E0FF",
  },
};

export default DockerOverview;
