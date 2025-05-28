import { isEmpty } from "./functions";
import Timeline from "./Timeline";

const Trainings = ({ trainings }) =>
  isEmpty(trainings) ? null : (
    <section style={{ marginTop: "0.5em" }} className="training">
      <h2 style={{ marginBottom: "0.5em" }}>Trainings</h2>
      {trainings.map((training, k) => (
        <article key={k} style={{ position: "relative" }}>
          {training.length === 1 ? null : (
            <Timeline isLast={k === training.length - 1} />
          )}
          <h3 style={{ marginBottom: 0 }}>
            {training.name}
            <span className="name">
              {" "}
              {training.organization ? "at" : null} {training.organization}
            </span>
          </h3>
          <h5
            style={{
              margin: "2px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a href={training.website} target="_blank" rel="noreferrer">
              {training.website}
            </a>
          </h5>
          <p
            dangerouslySetInnerHTML={{ __html: training.summary }}
            style={{ listStyleType: "none" }}
          />
        </article>
      ))}
    </section>
  );

export default Trainings;
