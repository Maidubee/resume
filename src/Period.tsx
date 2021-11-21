import { DateTime } from "luxon";

const Period = ({ startDate, endDate }) => (
  <span className="period">
    <span>{DateTime.fromFormat(startDate, "yyyy").toFormat("yyyy")}</span>
    {DateTime.fromFormat(startDate, "yyyy").toFormat("yyyy") ===
    (endDate && DateTime.fromFormat(endDate, "yyyy").toFormat("yyyy")) ? null : (
      <>
        <span>&nbsp;-&nbsp;</span>
        <span>{endDate ? DateTime.fromFormat(endDate, "yyyy").toFormat("yyyy") : "now"}</span>
      </>
    )}
  </span>
);

export default Period;
