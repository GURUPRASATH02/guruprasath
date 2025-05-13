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
        <a href="projects.html">Projects</a>
        <a href="GURUPRASATH N java developer.pdf">Download Resume</a>
      </div>
    </nav>
  );
}


function BoxTitle() {
    return <div className="title">Projects</div>;
  }

  function Box({ image, title, description, link }) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '180px',
          borderRadius: '8px 8px 0 0'
        }}
      ></div>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Visit Project</a>
    </div>
  );
}


  const projectData = [
    {
      image: "img/CAL.png",
      title: "Simple Calculator",
      description: "Simple Calculator application to compute Addition, subtraction, Multiplication and Division using HTML, CSS and Java Script",
      link: "https://guruprasath02.github.io/Simple-Calculator/"
    },
    {
      image: "img/numberApp.png",
      title: "Guess Number App",
      description: "Number guessing application using HTML,CSS,JS.",
      link: "https://guruprasath02.github.io/Guess-number-App/"
    },
    {
      image: "img/chatApp.png",
      title: "Chat App using Java",
      description: "Our project is designed to provide a seamless chat experience between clients and administrators. It aims to enhance communication efficiency and improve customer service. This project built as java web application using jsp. the message send and view by session object.",
      link: "https://github.com/GURUPRASATH02/Chat-App"
    },
    {
      image: "img/Portfolio.png",
      title: "Portfolio Website",
      description: "My Official website and my portfolio which developed by using HTML,CSS,JS,PHP,MYSQL in login secured validation data fetch from database to login and then admin can post their project,certification,blog,also view message from user(CRUD).",
      link: "https://guruprasath02.github.io/portfolio/"
    },
    {
      image: "img/DA.jpeg",
      title: "Doctor Anywhere clone app",
      description: "simple mobile using flutter to booking appointment for doctor and can purchase medicine in online",
      link: "https://github.com/GURUPRASATH02/Doctor-AnyWhere-MobileApp"
    },
    {
      image: "img/Diary.jpeg",
      title: "Diary App - Flutter",
      description: "Hey all, Today I'm create a new diary app that build using flutter. This app to you add your todo manage your daily works and access with your personal works. All your data stored your personal device by using shared preferences to manage data securely. And You can enter daily like diary writing and you add you photos too.",
      link: "https://github.com/GURUPRASATH02/Diary-app"
    },
    {
      image: "img/pic.png",
      title: "Flutter-PicturesApp",
      description: "Random and User can search beased images generate using GET API form pixelsAPI platform",
      link: "https://github.com/GURUPRASATH02/Flutter-PicturesApp"
    },
    {
      image: "img/quiz.png",
      title: "Flutter Quiz Application",
      description: "A mini Quiz application i made for my Hackthon competition on my acadmics",
      link: "https://github.com/GURUPRASATH02/Flutter-QuizApp"
    },
    {
      image: "img/DQC.png",
      title: "Distributed Quantum Communication channel via Quantum Teleportation",
      description: "I'm excited to share my latest project that combines quantum computing and secure communication through a Measurement-Based Quantum Teleportation (MBQT) protocol, developed using Python and Qiskit!",
      link: "https://github.com/GURUPRASATH02/Distributed-Quantum-Communication-channel-via-Quantum-Teleportation"
    }
  ];

  function App() {
    return (
      <div>
        <NaviBar />
        <BoxTitle />
        <div className="card-grid">
          {projectData.map((project, index) => (
            <Box
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("container"));
  root.render(<App />);