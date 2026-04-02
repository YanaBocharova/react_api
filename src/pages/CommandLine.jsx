import terminalImg from "../assets/terminal.png";

const CommandLine = () => {
  return (
    <div style={styles.page}>
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

        <div style={styles.container}>
            <h1 style={styles.title}>What does the terminal look like?</h1>
            <p style={styles.paragraph}>
                Below you can see some of the different flavors of programs that are available that can get you to a terminal.
                The next images show the command prompts available in Windows — there's a good range of options from the "cmd" 
                program to "powershell" — which can be run from the start menu by typing the program name.    
            </p>
             <img style={styles.img}
                src={terminalImg}
                alt="Windows command prompt and PowerShell"
            />
        </div>
    </div>
  );
};

const styles = {

  img: {
    maxWidth: "100%   ",
    height: "auto",
    display: "block",
    },  
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
};

export default CommandLine;

































