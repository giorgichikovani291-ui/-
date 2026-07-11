import type { PeopleProps } from "../types";

export default function People({ people, setPeople, peopleError }: PeopleProps) {
  return (
    <div className="input-group">
      <div className="people-label-row">
        <label htmlFor="people">Number of People</label>
        {peopleError && <span className="error-text">Can't be zero</span>}
      </div>
      <div className={peopleError ? "input-wrapper input-error" : "input-wrapper"}>
        <span className="icon">👤</span>
        <input
          type="number"
          id="people"
          placeholder="0"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>
    </div>
  );
}
