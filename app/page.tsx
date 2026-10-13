import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <header>
        <div className="brand-block">
          <span className="brand-mark">CP</span>
          <span>Cheyenne Portfolio</span>
        </div>
      </header>

      <nav>
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Student • Front-End Developer • Tech Enthusiast</p>
          <h1>CHEYENNE</h1>
          <p className="lead">
            I am a student with a strong interest in technology, programming, and web development.
            I enjoy building meaningful digital experiences and continuously improving my skills.
          </p>
          <div className="hero-tags">
            <span>Web Development</span>
            <span>UI/UX</span>
            <span>Programming</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-shell">
            <Image
              src="/profile.jpe"
              alt="Profile Picture"
              width={220}
              height={220}
              className="profile-image"
              priority
            />
          </div>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div className="education-header">
          <Image src="/cite-logo.webp" alt="CITE Logo" width={70} height={70} className="edu-logo" />
          <h3>Nueva Vizcaya State University</h3>
        </div>
        <p>Course: Bachelor of Science in Information Technology</p>
        <p>Year Level: 3rd Year</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>

        <div className="project">
          <h3>Project 1: BMI Calculator</h3>
          <p><strong>Phase:</strong> Completed</p>
          <p><strong>Tech Stack:</strong> MIT App Inventor</p>
        </div>

        <div className="project">
          <h3>Project 2: Web-Based Enrollment System</h3>
          <p><strong>Phase:</strong> Development</p>
          <p><strong>Tech Stack:</strong> HTML, CSS, PHP, MySQL</p>
        </div>

        <div className="project">
          <h3>Project 3: Portfolio Website</h3>
          <p><strong>Phase:</strong> Ongoing</p>
          <p><strong>Tech Stack:</strong> HTML, CSS, GitHub</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Cheyenne Portfolio | All Rights Reserved</p>
      </footer>
    </main>
  );
}
