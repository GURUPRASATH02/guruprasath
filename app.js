function NaviBar() {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <img src="img/guruprasathn.jpg" alt="Profile" />
      <div id="menu-icon" onClick={toggleMenu}>☰</div>
      <div id="nav-links" className={showMenu ? "show" : ""}>
        <a href="index.html">Home</a>
        <a href="#about" onClick={(e) => {
  e.preventDefault();
  const section = document.querySelector(".more-about-p");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}}>About</a>
        <a href="projects.html">Projects</a>
        <a href="GURUPRASATH N java developer.pdf">Download Resume</a>
      </div>
    </nav>
  );
}

function MoreP() {
  return (
    <>
      <h1>About</h1>
      <p>👋 Hi there! I’m a motivated and detail-oriented recent graduate (anticipated April 2025) with a passion for building innovative software solutions. Equipped with certifications in Java, Python, and Flutter, I’m actively seeking opportunities as a Software Developer or Flutter App Developer to leverage my technical skills, creativity, and problem-solving mindset in delivering impactful digital experiences.</p>

      <p>💻 <strong>Technical Expertise:</strong></p>
      <ul>
        <li>Proficient in Java and Python, with hands-on experience in OOP, data structures, algorithms, and backend development.</li>
        <li>Skilled in Flutter framework for cross-platform mobile app development, including state management (Provider, Bloc), RESTful API integration, and Firebase.</li>
        <li>Familiar with frontend technologies (HTML, CSS, JavaScript) and tools like Git, Android Studio, and VS Code.</li>
        <li>Certified in Infosys Springboard’s Flutter Development, Advanced Java and Python Programming (Udemy).</li>
      </ul>

      <p>🚀 <strong>Projects & Impact:</strong></p>
      <p>I thrive on turning ideas into functional applications. Recently, I developed a Flutter-based todo list management app with collaborative task progress and real-time database integration. Another project involved building a Java chat app with data visualization. I also researched distributed Quantum Communication using Python & Qiskit.</p>

      <p>🌱 <strong>What Drives Me:</strong></p>
      <p>I’m passionate about solving real-world problems through code and staying ahead of tech trends. I enjoy collaborative environments and writing efficient, maintainable code.</p>

      <p>🔍 <strong>Looking For:</strong></p>
      <p>Entry-level roles in software or mobile app development where I can grow my expertise in Flutter, Java, or Python.</p>

      <p>📫 <strong>Let’s Connect!</strong></p>
      <p>Open to networking, full-time opportunities. Let’s discuss how I can bring value to your team!</p>

      <p>#OpenToWork #SoftwareDeveloper #FlutterDeveloper #Java #Python #NewGrad2025</p>
    </>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f1f1f1" }}>
      <h1>Guruprasath N</h1>
      <img
        src="img/guruprasathn.jpg"
        alt="Guruprasath"
        style={{ width: "120px", borderRadius: "50%" }}
      />

      <div style={{ marginTop: "1rem" }}>
        <a href="https://www.linkedin.com/in/guruprasath02/" target="_blank" rel="noopener noreferrer">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/GURUPRASATH02" target="_blank" rel="noopener noreferrer">
          🐙 GitHub
        </a>
        <a href="mailto:guruprasath2902@gmail.com" >
          ✉️ Email
        </a>
        <span>📞 +91 99658 41143</span>
        <br />
        <a href="GURUPRASATH N java developer.pdf" className="resume-button" download>
          📄 Download Resume
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} Guruprasath N. All rights reserved.
      </p>
    </footer>
  );
}

// Render NaviBar to #react-container
const rootNavbar = ReactDOM.createRoot(document.getElementById("react-container"));
rootNavbar.render(<NaviBar />);

// Render MoreP to .more-about-p
const moreAboutContainer = document.querySelector(".more-about-p");

  const rootMoreP = ReactDOM.createRoot(moreAboutContainer);
  rootMoreP.render(<MoreP />);
// Render Footer to .footer-container
const footerContainer = document.querySelector(".footer-container");
const rootFooter = ReactDOM.createRoot(footerContainer);
rootFooter.render(<Footer />);

