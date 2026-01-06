// import "../styles/dashboard.css";
// import "../styles/parent.css";

// export default function ParentDashboard() {
//   const child = {
//     name: "Aarav Sharma",
//     dob: "12 Feb 2023",
//     gender: "Male",
//     blood: "O+",
//     age: "1 year 2 months",
//   };

//   const vaccinationsDone = [
//     { name: "BCG", date: "15 Feb 2023" },
//     { name: "Hepatitis B", date: "15 Feb 2023" },
//     { name: "OPV-1", date: "20 Mar 2023" },
//   ];

//   const ageWiseVaccines = [
//     {
//       age: "At Birth",
//       vaccines: ["BCG", "Hepatitis B", "OPV-0"],
//     },
//     {
//       age: "6 Weeks",
//       vaccines: ["DPT-1", "OPV-1", "Hib-1"],
//     },
//     {
//       age: "10 Weeks",
//       vaccines: ["DPT-2", "OPV-2", "Hib-2"],
//     },
//     {
//       age: "14 Weeks",
//       vaccines: ["DPT-3", "OPV-3", "Hib-3"],
//     },
//     {
//       age: "9 Months",
//       vaccines: ["Measles"],
//     },
//   ];

//   const upcoming = {
//     name: "DPT-1",
//     dueDate: "20 April 2024",
//     daysLeft: 5,
//   };

//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <div className="dashboard-title">Parent Dashboard</div>
//       </div>

//       <div className="dashboard-content">
//         {/* CHILD INFO */}
//         <div className="section-title">Child Details</div>
//         <div className="card child-card">
//           <p><strong>Name:</strong> {child.name}</p>
//           <p><strong>Date of Birth:</strong> {child.dob}</p>
//           <p><strong>Age:</strong> {child.age}</p>
//           <p><strong>Gender:</strong> {child.gender}</p>
//           <p><strong>Blood Group:</strong> {child.blood}</p>
//         </div>

//         {/* VACCINATIONS DONE */}
//         <div className="section-title">Vaccinations Completed</div>
//         <div className="card">
//           <ul className="list">
//             {vaccinationsDone.map((v, i) => (
//               <li key={i}>
//                 {v.name} — <span className="status-done">Done</span> ({v.date})
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* AGE-WISE REQUIRED */}
//         <div className="section-title">Vaccinations Required (Age-wise)</div>
//         <div className="card-grid">
//           {ageWiseVaccines.map((group, i) => (
//             <div className="card" key={i}>
//               <h3>{group.age}</h3>
//               <ul className="list">
//                 {group.vaccines.map((v, j) => (
//                   <li key={j}>
//                     {v} — <span className="status-upcoming">Pending</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* UPCOMING */}
//         <div className="section-title">Upcoming Vaccination</div>
//         <div className="card">
//           <p>
//             <strong>{upcoming.name}</strong> due on{" "}
//             <strong>{upcoming.dueDate}</strong>
//           </p>
//           <p>{upcoming.daysLeft} days remaining</p>
//           <button className="primary-btn">
//             Schedule Vaccination
//           </button>
//         </div>

//         {/* REMINDER */}
//         <div className="section-title">Reminders</div>
//         <div className="card">
//           <p>
//             📩 SMS reminder is <strong>enabled</strong> for upcoming
//             vaccinations.
//           </p>
//           <p className="muted">
//             You will receive a message before the due date.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { childData } from "../data/childData";
import {
  vaccinationsDone,
  vaccinationsPending,
} from "../data/vaccinationData";
import { addAppointment } from "../data/appointmentData";
import { useState } from "react";
import ChildQRCode from "../components/ChildQRCode";

export default function ParentDashboard() {
  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const [scheduledDate, setScheduledDate] = useState("");
  const [appointmentToken, setAppointmentToken] = useState(null);

  const handleSchedule = () => {
    const token = `APT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    addAppointment({
      token,
      childId: childData.childId,
      childName: childData.name,
      vaccine: selectedVaccine,
      date: scheduledDate,
      status: "Scheduled",
    });

    setAppointmentToken(token);
    alert("Vaccination scheduled successfully");
  };

  return (
    <div className="dashboard">
      <h2>Parent Dashboard</h2>

      {/* CHILD INFO */}
      <div className="card">
        <p><strong>Name:</strong> {childData.name}</p>
        <p><strong>Age:</strong> {childData.age}</p>
      </div>

      {/* DONE */}
      <h3>Vaccinations Done</h3>
      {vaccinationsDone.map((v, i) => (
        <p key={i}>✅ {v.name}</p>
      ))}

      {/* PENDING */}
      <h3>Vaccinations Pending</h3>
      {vaccinationsPending.map((group, i) => (
        <div key={i} className="card">
          <strong>{group.age}</strong>
          {group.vaccines.map((v, j) => (
            <div key={j} style={{ marginTop: "6px" }}>
              <span>⏳ {v}</span>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => setSelectedVaccine(v)}
              >
                Schedule
              </button>
            </div>
          ))}
        </div>
      ))}

      {/* SCHEDULING FORM */}
      {selectedVaccine && (
        <div className="card">
          <h3>Schedule {selectedVaccine}</h3>

          <input
            type="date"
            onChange={(e) => setScheduledDate(e.target.value)}
          />

          <button
            disabled={!scheduledDate}
            onClick={handleSchedule}
          >
            Confirm Appointment
          </button>
        </div>
      )}

      {/* QR AFTER SCHEDULING */}
      {appointmentToken && (
        <div className="card">
          <h3>Appointment QR</h3>
          <p>Show this QR at vaccination center</p>
          <ChildQRCode childId={appointmentToken} />
        </div>
      )}
    </div>
  );
}
