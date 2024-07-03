export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src="././portfolio/img/email.png"
              alt="Email icon"
              class="icon contact-icon email-icon"
            />
            <p>
              <a
                href="mailto:harshasiddagangaiah@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </p>
          </div>
          <div class="contact-info-container">
            <img
              src="././portfolio/img/linkedin.png"
              alt="LinkedIn icon"
              class="icon contact-icon linkedin-icon"
            />
            <p>
              <a
                href="https://www.linkedin.com/in/harshasidd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
