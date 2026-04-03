const Support = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Support Center</h1>

        {/* FAQ Section */}
        <div style={styles.section}>
          <h2 style={styles.subTitle}>Frequently Asked Questions</h2>

          <div style={styles.faqItem}>
            <h4 style={styles.question}>How do I start with DevOps?</h4>
            <p style={styles.answer}>
              Begin with Git, CI/CD basics, and containerization using Docker.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h4 style={styles.question}>Why is CI/CD important?</h4>
            <p style={styles.answer}>
              It automates testing and deployment, improving speed and reliability.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h4 style={styles.question}>How do I deploy my app?</h4>
            <p style={styles.answer}>
              Use pipelines to build, test, and deploy to cloud environments.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.section}>
          <h2 style={styles.subTitle}>Contact Support</h2>

          <form style={styles.form}>
            <input style={styles.input} type="text" placeholder="Your Name" />
            <input style={styles.input} type="email" placeholder="Your Email" />
            <textarea
              style={styles.textarea}
              placeholder="Describe your issue..."
            />
            <button style={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(180deg, #8A2BE2, #00008B, #000000)",
    minHeight: "100vh",
    padding: "30px 15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#f9f9fb", // 🤍 almost white
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#111",
  },
  section: {
    marginBottom: "30px",
  },
  subTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#222",
  },
  faqItem: {
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #ddd",
  },
  question: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111",
    marginBottom: "5px",
  },
  answer: {
    fontSize: "15px",
    color: "#444",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "100px",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#8A2BE2",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Support;
