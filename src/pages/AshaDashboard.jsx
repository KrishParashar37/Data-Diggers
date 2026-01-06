

// import { appointments } from "../data/appointmentData";
// import { useNavigate } from "react-router-dom";

// export default function AshaDashboard() {
//   const navigate = useNavigate();

//   return (
//     <div className="dashboard">
//       <h2>ASHA Dashboard</h2>

//       {appointments.length === 0 && <p>No appointments</p>}

//       {appointments.map((a, i) => (
//         <div className="card" key={i}>
//           <p>{a.childName}</p>
//           <p>{a.vaccine}</p>
//           <p>{a.date}</p>
//           <button onClick={() => navigate("/asha/scan")}>
//             Scan QR
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

import { appointments } from "../data/appointmentData";
import { useNavigate } from "react-router-dom";

export default function AshaDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>JANM SETU</h2>
        <ul>
          <li className="active">Appointments</li>
          <li>Scan QR</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* MAIN */}
      <div className="main-area">
        {/* TOP BAR */}
        <div className="topbar">
          <h3>ASHA Dashboard</h3>
          <div className="avatar"></div>
        </div>

        {/* CONTENT */}
        <div className="content">
          <div className="card">
            <h4>Scheduled Appointments</h4>

            {appointments.length === 0 && (
              <p>No appointments scheduled</p>
            )}

            {appointments.map((a, i) => (
              <div key={i} className="appointment-row">
                <div className="appointment-info">
                  <p><strong>{a.childName}</strong></p>
                  <p>{a.vaccine}</p>
                  <p>{a.date}</p>
                </div>

                <div>
                  <span className="badge scheduled">Scheduled</span>
                  <br />
                  <button
                    className="primary"
                    onClick={() => navigate("/asha/scan")}
                  >
                    Scan QR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
