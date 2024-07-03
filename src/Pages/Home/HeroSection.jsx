import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Harsha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I find endless fascination and inspiration, driven by a
            <br /> relentless curiosity to explore and innovate.
            <br />
            Each breakthrough fuels my passion, pushing me to
            <br />
            delve deeper into the limitless possibilities of the digital realm.
          </p>
        </div>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="AboutMe"
          className="btn btn-primary"
          style={{ marginTop: "21.333px" }}
        >
          Explore More
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="././portfolio/img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
