import "./style.css";
import kyle from "./kyle.jpg";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Business Analytics",
  "Problem Solving",
];

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
];

const about = [
  `I'm currently pursuing a Bachelor of Science in Information Technology,
   majoring in Business Analytics, at Batangas State University. I'm
   interested in web development, technology, and data-driven solutions.`,
  `As I continue my journey, I'm working to improve my programming skills and
   build useful, responsive, and user-friendly applications. Every project is
   an opportunity to learn, experiment, and grow.`,
];

const Logo = () => (
  <a href="#home" className="logo" aria-label="Back to top">
    KB<span>.</span>
  </a>
);

const Heading = ({ eyebrow, children, text }) => (
  <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{children}</h2>
    {text && <p className="section-description">{text}</p>}
  </div>
);

export default function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <Logo />
        <nav aria-label="Main">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-button">
            Contact Me
          </a>
        </nav>
      </header>

      <main>
        <section className="home" id="home">
          <div className="home-content">
            <p className="eyebrow">HELLO, WORLD! 👋</p>

            <h1>
              Hi, I'm <span className="gradient-text">Kyle Bibat</span>
            </h1>

            <h2>
              An Enthusiastic Student
              <br />
              <span className="gradient-text">Learning Web Development</span>
            </h2>

            <p className="description">
              I'm a BSIT student majoring in Business Analytics at Batangas
              State University. I'm passionate about technology, creating
              websites, and continuously learning new skills.
            </p>

            <div className="home-buttons">
              <a href="#about" className="btn primary-btn">
                Discover More ↗
              </a>
              <a href="#contact" className="btn outline-btn">
                Get in Touch
              </a>
            </div>

            <p className="socials">
              STUDENT <span className="dot">•</span> ASPIRING WEB DEVELOPER
            </p>
          </div>

          <div className="hero-visual">
            <div className="glow" />

            <div className="profile-card">
              <div className="profile-icon">
                <img src={kyle} alt="Kyle Bibat" />
              </div>
              <p className="eyebrow">STUDENT DEVELOPER</p>
              <h3>Kyle Bibat</h3>
              <p className="card-description">Turning curiosity into code.</p>

              <code className="code-snippet">
                <span>const</span> future = <span>"developer"</span>;
                <br />
                <span>console.log</span>(future);
              </code>
            </div>

            <div className="floating-badge badge-one" aria-hidden="true">
              {"</>"}
            </div>
            <div className="floating-badge badge-two" aria-hidden="true">
              ✦
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <Heading eyebrow="GET TO KNOW ME">
            About <span>Me</span>
          </Heading>

          <div className="about-card">
            <div className="about-icon">✧</div>
            <div>
              <h3>A Student with a Passion for Technology</h3>
              {about.map((text) => (
                <p key={text.slice(0, 20)}>{text}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <Heading
            eyebrow="WHAT I'M LEARNING"
            text="Technologies and skills I'm exploring on my journey as a student developer."
          >
            My <span>Skills</span>
          </Heading>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{skill}</h3>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-card">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>
              Let's learn and build <span>together.</span>
            </h2>
            <p>
              I'm always looking for opportunities to learn, collaborate, and
              grow as a developer.
            </p>
            <a href="mailto:your-email@example.com" className="btn primary-btn">
              Contact Me ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Logo />
        <p>Designed and built by Kyle Bibat.</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}