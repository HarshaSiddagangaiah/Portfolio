import data from "../../data/index.json";

export default function MyExperience() {
  return (
    <section className="portfolio--section" id="MyExperience">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="section--title">Explore</p>
          <h2 className="skills--section--heading">My Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div
            key={index}
            className="portfolio--section--card"
            onClick={() =>
              window.open(item.link, "_blank", "noopener,noreferrer")
            }
          >
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h2 className="portfolio--section--title">{item.title}</h2>
                <br />
                <h3 className="portfolio--section--title">
                  {item.description}
                </h3>
                <br />

                <p className="portfolio--section--title">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
