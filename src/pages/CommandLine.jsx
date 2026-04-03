import terminalImg from "../assets/terminal.png";

const CommandLine = () => {
  return (
    <div style={styles.page}>
      {/* Intro Section */}
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to the terminal</h1>

        <p style={styles.paragraph}>
          In your development process, you'll undoubtedly be required 
          to run some commands in the terminal (or on the "command line" — these are effectively the same thing). 
          This article provides an introduction to the terminal, the essential commands you'll need to enter into it, 
          how to chain commands together, and how to add your own command line interface (CLI) tools.
        </p>

        <p style={styles.paragraph}>
          The terminal is a text interface for executing text-based programs. If
          you're running any tooling for web development there's a near-guaranteed
          chance that you'll have to pop open the command line and run some
          commands to use your chosen tools (you'll often see such tools referred
          to as <strong>CLI tools</strong> — command line interface tools).
        </p>

        <p style={styles.paragraph}>
          A large number of tools can be used by typing commands into the command
          line; many come pre-installed on your system, and a huge number of
          others are installable from package registries. Package registries are
          like app stores, but (mostly) for command line based tools and software.
          We'll see how to install some tools later on in this chapter, and we'll
          learn more about package registries in the next chapter.
        </p>

        <p style={styles.paragraph}>
          One of the biggest criticisms of the command line is that it lacks hugely
          in user experience. Viewing the command line for the first time can be a
          daunting experience: a blank screen and a blinking cursor, with very
          little obvious help available on what to do.
        </p>

        <p style={styles.paragraph}>
          On the surface, they're far from welcoming but there's a lot you can do
          with them, and we promise that, with a bit of guidance and practice,
          using them will get easier! This is why we are providing this chapter — 
          to help you get started in this seemingly unfriendly environment.
        </p>
      </div>

      {/* Terminal Image Section */}
      <div style={styles.container}>
        <h1 style={styles.title}>What does the terminal look like?</h1>
        <p style={styles.paragraph}>
          Below you can see some of the different flavors of programs that are available that can get you to a terminal.
          The next images show the command prompts available in Windows — there's a good range of options from the "cmd" 
          program to "powershell" — which can be run from the start menu by typing the program name.    
        </p>
        <img
          style={styles.img}
          src={terminalImg}
          alt="Windows command prompt and PowerShell"
        />
      </div>

      {/* CMD vs PowerShell Table */}
      <div style={styles.container}>
        <h1 style={styles.title}>CMD vs PowerShell Commands</h1>
        <p style={styles.paragraph}>
          Here’s a quick comparison of common commands in CMD and PowerShell, including short aliases for PowerShell.
        </p>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.tableHeader}>Action</th>
                <th style={styles.tableHeader}>CMD</th>
                <th style={styles.tableHeader}>PowerShell (Full)</th>
                <th style={styles.tableHeader}>PowerShell (Alias)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["List files", "dir", "Get-ChildItem", "ls, dir, gci"],
                ["Change directory", "cd folder", "Set-Location folder", "cd, sl"],
                ["Show current directory", "cd", "Get-Location", "pwd, gl"],
                ["Clear screen", "cls", "Clear-Host", "cls, clear"],
                ["Create folder", "mkdir folder", "New-Item -ItemType Directory", "mkdir, md"],
                ["Create file", "echo. > file.txt", "New-Item -ItemType File", "ni"],
                ["Delete file", "del file.txt", "Remove-Item file.txt", "rm, del"],
                ["Copy file/folder", "copy file.txt dest", "Copy-Item file.txt dest", "cp, copy"],
                ["Move file/folder", "move file.txt dest", "Move-Item file.txt dest", "mv, move"],
                ["View file content", "type file.txt", "Get-Content file.txt", "cat, type"],
                ["List processes", "tasklist", "Get-Process", "ps, gps"],
                ["Kill process", "taskkill /IM app.exe /F", "Stop-Process -Name app", "kill"],
                ["Ping", "ping google.com", "Test-Connection google.com", "ping"],
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

export default CommandLine;
