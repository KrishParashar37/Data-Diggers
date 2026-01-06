import { useState } from "react";

export default function ScheduleVaccination({ onSchedule }) {
  const [vaccine, setVaccine] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="card">
      <h3>Schedule Vaccination</h3>

      <input
        placeholder="Vaccine Name"
        onChange={(e) => setVaccine(e.target.value)}
      />

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        disabled={!vaccine || !date}
        onClick={() => onSchedule(vaccine, date)}
      >
        Schedule
      </button>
    </div>
  );
}