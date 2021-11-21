import { isEmpty } from "./functions";
import Period from "./Period";
import Timeline from "./Timeline";

const Education = ({ education }) =>
  isEmpty(education) ? null : (
    <section style={{ marginTop: "0.5em" }} className="education">
      <h3 style={{ marginBottom: "0.5em" }}>Education</h3>
      {education.map((item, k) => (
        <article key={k} style={{ position: "relative" }}>
          {education.length === 1 ? null : <Timeline isLast={k === education.length - 1} />}
          <h3 style={{ marginBottom: 0 }}>{item.institution}</h3>
          <h5
            style={{
              margin: "2px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a href={item.website} target="_blank" rel="noreferrer">
              {item.website}
            </a>
            <Period startDate={item.startDate} endDate={item.endDate} />
          </h5>
          <p>{item.area}</p>
        </article>
      ))}
    </section>
  );

export default Education;
