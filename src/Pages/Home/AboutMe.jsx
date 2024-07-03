export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="././portfolio/img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Get To Know More</p>
          <h1 className="skills-section--heading">About Me</h1>
          <div class="section-container">
            <div class="about-details-container">
              <div class="about-containers">
                <div class="details-container">
                  <img
                    src="././portfolio/img/experience.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <h3>Experience</h3>
                  <p>
                    4+ years <br />
                    Full Stack Development
                  </p>
                </div>
                <div class="details-container">
                  <img
                    src="././portfolio/img/education.png"
                    alt="Education icon"
                    class="icon"
                  />
                  <h3>Education</h3>
                  <p>
                    M.S. Computer Science
                    <br />
                    B.E. Information Science
                  </p>
                </div>
              </div>
              <div class="btn-container">
                <button
                  className="btn btn-color-2"
                  onClick={() =>
                    window.open(
                      "././portfolio/img/resume.pdf",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
