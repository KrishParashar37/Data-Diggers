import "../styles/dashboard.css";
import "../styles/parent.css";

export default function ParentDashboard() {
  const child = {
    name: "Aarav Sharma",
    dob: "12 Feb 2023",
    gender: "Male",
    blood: "O+",
    age: "1 year 2 months",
  };

  const vaccinationsDone = [
    { name: "BCG", date: "15 Feb 2023" },
    { name: "Hepatitis B", date: "15 Feb 2023" },
    { name: "OPV-1", date: "20 Mar 2023" },
  ];

  const ageWiseVaccines = [
    {
      age: "At Birth",
      vaccines: ["BCG", "Hepatitis B", "OPV-0"],
    },
    {
      age: "6 Weeks",
      vaccines: ["DPT-1", "OPV-1", "Hib-1"],
    },
    {
      age: "10 Weeks",
      vaccines: ["DPT-2", "OPV-2", "Hib-2"],
    },
    {
      age: "14 Weeks",
      vaccines: ["DPT-3", "OPV-3", "Hib-3"],
    },
    {
      age: "9 Months",
      vaccines: ["Measles"],
    },
  ];

  const upcoming = {
    name: "DPT-1",
    dueDate: "20 April 2024",
    daysLeft: 5,
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">Parent Dashboard</div>
      </div>

      <div className="dashboard-content">
        {/* CHILD INFO */}
        <div className="section-title">Child Details</div>
        <div className="card child-card">
          <p><strong>Name:</strong> {child.name}</p>
          <p><strong>Date of Birth:</strong> {child.dob}</p>
          <p><strong>Age:</strong> {child.age}</p>
          <p><strong>Gender:</strong> {child.gender}</p>
          <p><strong>Blood Group:</strong> {child.blood}</p>
        </div>

        {/* VACCINATIONS DONE */}
        <div className="section-title">Vaccinations Completed</div>
        <div className="card">
          <ul className="list">
            {vaccinationsDone.map((v, i) => (
              <li key={i}>
                {v.name} — <span className="status-done">Done</span> ({v.date})
              </li>
            ))}
          </ul>
        </div>

        {/* AGE-WISE REQUIRED */}
        <div className="section-title">Vaccinations Required (Age-wise)</div>
        <div className="card-grid">
          {ageWiseVaccines.map((group, i) => (
            <div className="card" key={i}>
              <h3>{group.age}</h3>
              <ul className="list">
                {group.vaccines.map((v, j) => (
                  <li key={j}>
                    {v} — <span className="status-upcoming">Pending</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* UPCOMING */}
        <div className="section-title">Upcoming Vaccination</div>
        <div className="card">
          <p>
            <strong>{upcoming.name}</strong> due on{" "}
            <strong>{upcoming.dueDate}</strong>
          </p>
          <p>{upcoming.daysLeft} days remaining</p>
          <button className="primary-btn">
            Schedule Vaccination
          </button>
        </div>

        {/* REMINDER */}
        <div className="section-title">Reminders</div>
        <div className="card">
          <p>
            📩 SMS reminder is <strong>enabled</strong> for upcoming
            vaccinations.
          </p>
          <p className="muted">
            You will receive a message before the due date.
          </p>
        </div>
      </div>
    </div>
  );
}
