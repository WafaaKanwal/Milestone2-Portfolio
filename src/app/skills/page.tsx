export default function Skills() {
  return (
    <div>
      <section id="skills" className="skills-section">
        <div className="container mx-auto text-center px-4 lg:px-8">
          <h2 className="skills-heading">My Skills</h2>
          <div className="skill-item-container">
            <div className="skill-item">
              <img src="/images/html.png" alt="HTML" className="skill-icon" />
              <h3>HTML</h3>
              <p>90%</p>
            </div>
            <div className="skill-item">
              <img src="/images/css.webp" alt="CSS" className="skill-icon" />
              <h3>CSS</h3>
              <p>80%</p>
            </div>
            <div className="skill-item">
              <img
                src="/images/js.png"
                alt="JavaScript"
                className="skill-icon"
              />
              <h3>JavaScript</h3>
              <p>70%</p>
            </div>
            <div className="skill-item">
              <img
                src="/images/1ts.png"
                alt="TypeScript"
                className="skill-icon"
              />
              <h3>TypeScript</h3>
              <p>80%</p>
            </div>
            <div className="skill-item">
              <img
                src="/images/next.png"
                alt="Next.js"
                className="skill-icon"
              />
              <h3>Next.js</h3>
              <p>20%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
