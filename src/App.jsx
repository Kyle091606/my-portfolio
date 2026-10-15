import "./style.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Business Analytics",
    "Problem Solving",
  ];

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-button">
            Contact Me
          </a>
        </nav>
      </header>

      <main>
        <section className="home" id="home">
          <div className="home-content">
            <p className="greeting">HELLO, WORLD! 👋</p>

            <h1>
              Hi, I'm <span>Kyle Bibat</span>
            </h1>

            <h2>
              An Enthusiastic Student
              <br />
              <span className="gradient-text">
                Learning Web Development
              </span>
            </h2>

            <p className="description">
              I'm a BSIT student majoring in Business Analytics
              at Batangas State University. I'm passionate about
              technology, creating websites, and continuously
              learning new skills.
            </p>

            <div className="home-buttons">
              <a href="#about" className="btn primary-btn">
                Discover More ↗
              </a>

              <a href="#contact" className="btn outline-btn">
                Get in Touch
              </a>
            </div>

            <div className="socials">
              <span>STUDENT</span>
              <span className="dot">•</span>
              <span>ASPIRING WEB DEVELOPER</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <div className="profile-card">
              <div className="profile-icon">KB</div>
              <p className="card-label">STUDENT DEVELOPER</p>
              <h3>Kyle Bibat</h3>
              <p className="card-description">
                Turning curiosity into code.
              </p>

              <div className="code-snippet">
                <span>const</span> future = <span>"developer"</span>;
                <br />
                <span>console.log</span>(future);
              </div>
            </div>

            <div className="floating-badge badge-one">{"</>"}</div>
            <div className="floating-badge badge-two">✦</div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
          </div>

          <div className="about-card">
            <div className="about-icon">✧</div>

            <div>
              <h3>A Student with a Passion for Technology</h3>

              <p>
                I'm currently pursuing a Bachelor of Science in
                Information Technology, majoring in Business
                Analytics, at Batangas State University.
                I'm interested in web development, technology,
                and data-driven solutions.
              </p>

              <p>
                As I continue my journey, I'm working to improve
                my programming skills and build useful,
                responsive, and user-friendly applications.
                Every project is an opportunity to learn,
                experiment, and grow.
              </p>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I'M LEARNING</p>
            <h2>My <span>Skills</span></h2>
            <p className="section-description">
              Technologies and skills I'm exploring on my journey
              as a student developer.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{skill}</h3>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Let's learn and build <span>together.</span></h2>
            <p>
              I'm always looking for opportunities to learn,
              collaborate, and grow as a developer.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="btn primary-btn"
            >
              Contact Me ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
        </a>

        <p>Designed and built by Kyle Bibat.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;