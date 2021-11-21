import { isEmpty } from "./functions";
import Period from "./Period";
import Timeline from "./Timeline";

const Experience = ({ items, header }) =>
  isEmpty(items) ? null : (
    <section style={{ marginTop: "0.5em" }} className="experience">
      <h3 style={{ marginBottom: "0.5em" }}>{header}</h3>
      {items.map((item, k) => (
        <article key={k} style={{ position: "relative" }}>
          {items.length === 1 ? null : <Timeline isLast={k === items.length - 1} />}
          <h3 style={{ marginBottom: 0 }}>
            {item.position || item.title}{" "}
            <span className="employer">at {item.name || item.awarder}</span>
          </h3>
          <h5
            style={{
              margin: "2px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="subline"
          >
            {item.website ? (
              <a href={item.website} target="_blank" rel="noreferrer">
                {item.company || item.organization}
              </a>
            ) : (
              item.company || item.organization
            )}
            <Period startDate={item.startDate} endDate={item.endDate} />
          </h5>
          <p>{item.summary}</p>
        </article>
      ))}
    </section>
  );

export default Experience;
