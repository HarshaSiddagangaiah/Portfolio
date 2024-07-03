import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="education--section" id="MyEducation">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="section--title">Get To Know About</p>
          <h2 className="skills--section--heading">My Education</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="education--section--card">
            <h2>{item.college}</h2>
            <div className="education--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md education--author--name">{item.degree}</p>
                <p className="text-md education--author--designation">
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
