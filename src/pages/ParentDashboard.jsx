


// import { childData } from "../data/childData";
// import {
//   vaccinationsDone,
//   vaccinationsPending,
// } from "../data/vaccinationData";
// import { addAppointment } from "../data/appointmentData";
// import { useState } from "react";
// import ChildQRCode from "../components/ChildQRCode";

// export default function ParentDashboard() {
//   const [selectedVaccine, setSelectedVaccine] = useState(null);
//   const [scheduledDate, setScheduledDate] = useState("");
//   const [appointmentToken, setAppointmentToken] = useState(null);

//   const handleSchedule = () => {
//     const token = `APT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

//     addAppointment({
//       token,
//       childId: childData.childId,
//       childName: childData.name,
//       vaccine: selectedVaccine,
//       date: scheduledDate,
//       status: "Scheduled",
//     });

//     setAppointmentToken(token);
//     alert("Vaccination scheduled successfully");
//   };

//   return (
//     <div className="dashboard">
//       <h2>Parent Dashboard</h2>

//       {/* CHILD INFO */}
//       <div className="card">
//         <p><strong>Name:</strong> {childData.name}</p>
//         <p><strong>Age:</strong> {childData.age}</p>
//       </div>

//       {/* DONE */}
//       <h3>Vaccinations Done</h3>
//       {vaccinationsDone.map((v, i) => (
//         <p key={i}>✅ {v.name}</p>
//       ))}

//       {/* PENDING */}
//       <h3>Vaccinations Pending</h3>
//       {vaccinationsPending.map((group, i) => (
//         <div key={i} className="card">
//           <strong>{group.age}</strong>
//           {group.vaccines.map((v, j) => (
//             <div key={j} style={{ marginTop: "6px" }}>
//               <span>⏳ {v}</span>
//               <button
//                 style={{ marginLeft: "10px" }}
//                 onClick={() => setSelectedVaccine(v)}
//               >
//                 Schedule
//               </button>
//             </div>
//           ))}
//         </div>
//       ))}

//       {/* SCHEDULING FORM */}
//       {selectedVaccine && (
//         <div className="card">
//           <h3>Schedule {selectedVaccine}</h3>

//           <input
//             type="date"
//             onChange={(e) => setScheduledDate(e.target.value)}
//           />

//           <button
//             disabled={!scheduledDate}
//             onClick={handleSchedule}
//           >
//             Confirm Appointment
//           </button>
//         </div>
//       )}

//       {/* QR AFTER SCHEDULING */}
//       {appointmentToken && (
//         <div className="card">
//           <h3>Appointment QR</h3>
//           <p>Show this QR at vaccination center</p>
//           <ChildQRCode childId={appointmentToken} />
//         </div>
//       )}
//     </div>
//   );
// }
import ashaImg from "../assets/asha.jpeg";

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
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>JANM SETU</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Vaccination History</li>
          <li>Settings</li>
        </ul>

          <div className="sidebar-profile">
    <img src={ashaImg} alt="Healthcare Worker" />
    <p className="profile-name"></p>
  </div>
      </aside>

      {/* MAIN */}
      <div className="main-area">
        {/* TOP BAR */}
        <div className="topbar">
          <h3>Parent Dashboard</h3>
          <div className="avatar"></div>
        </div>

        {/* CONTENT */}
        <div className="content">
          {/* CHILD INFO */}
          <div className="card child-summary">
            <h4>Child Details</h4>
            <p><strong>Name:</strong> {childData.name}</p>
            <p><strong>Age:</strong> {childData.age}</p>
          </div>

          <div className="grid-2">
            {/* DONE */}
            <div className="card">
              <h4>Vaccinations Done</h4>
              {vaccinationsDone.map((v, i) => (
                <div key={i} className="vaccine-row">
                  <span>{v.name}</span>
                  <span className="badge done">Done</span>
                </div>
              ))}
            </div>

            {/* PENDING */}
            <div className="card">
              <h4>Vaccinations Pending</h4>
              {vaccinationsPending.map((group, i) => (
                <div key={i}>
                  <p className="age-group">{group.age}</p>
                  {group.vaccines.map((v, j) => (
                    <div key={j} className="vaccine-row">
                      <span>{v}</span>
                      <button
                        className="secondary"
                        onClick={() => setSelectedVaccine(v)}
                      >
                        Schedule
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* SCHEDULING */}
          {selectedVaccine && (
            <div className="card schedule-box">
              <h4>Schedule {selectedVaccine}</h4>
              <input
                type="date"
                onChange={(e) => setScheduledDate(e.target.value)}
              />
              <button
                className="primary"
                disabled={!scheduledDate}
                onClick={handleSchedule}
              >
                Confirm Appointment
              </button>
            </div>
          )}

          {/* QR */}
          {appointmentToken && (
            <div className="card">
              <h4>Appointment QR</h4>
              <p>Show this QR at vaccination center</p>
              <div className="qr-box">
                <ChildQRCode childId={appointmentToken} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
