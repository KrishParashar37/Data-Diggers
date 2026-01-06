// import { useParams, useLocation } from "react-router-dom";
// import "../styles/dashboard.css";
// import "../styles/asha.css";
// import { isWithin15Days } from "../utils/dateUtils";
// import { useState } from "react";

// export default function AshaChildView() {
//   const { childId } = useParams();
//   const location = useLocation();
//   const scanDate = location.state?.scanDate;

//   const canSchedule = scanDate ? isWithin15Days(scanDate) : false;

//   const [scheduledDate, setScheduledDate] = useState("");

//   const handleSchedule = () => {
//     alert(`Vaccination scheduled on ${scheduledDate}`);
//   };

//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <div className="dashboard-title">Child Record</div>
//       </div>

//       <div className="dashboard-content">
//         <div className="card">
//           <p><strong>Child ID:</strong> {childId}</p>
//           <p><strong>Name:</strong> Aarav Sharma</p>
//           <p><strong>Age:</strong> 1 year 2 months</p>
//         </div>

//         <div className="section-title">Schedule Vaccination</div>

//         <div className="card">
//           {canSchedule ? (
//             <>
//               <p className="status-ok">
//                 ✅ Vaccination can be scheduled (within 15 days of scan)
//               </p>

//               <input
//                 type="date"
//                 className="date-input"
//                 onChange={(e) => setScheduledDate(e.target.value)}
//               />

//               <button
//                 className="primary-btn"
//                 onClick={handleSchedule}
//                 disabled={!scheduledDate}
//               >
//                 Confirm Schedule
//               </button>
//             </>
//           ) : (
//             <p className="status-error">
//               ❌ Scheduling not allowed. QR scan expired (15 days exceeded).
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import { markCompleted } from "../data/appointmentData";
import { childData } from "../data/childData";

export default function AshaChildView() {
  const { childId } = useParams();

  return (
    <div className="dashboard">
      <h2>Child Record</h2>

      <p>ID: {childId}</p>
      <p>Name: {childData.name}</p>

      <button
        onClick={() => {
          markCompleted(childId);
          alert("Vaccination marked completed");
        }}
      >
        Mark Vaccination Done
      </button>
    </div>
  );
}