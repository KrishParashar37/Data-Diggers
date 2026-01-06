import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/asha.css";

export default function AshaDashboard() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          JANM SETU – Vaccinator Dashboard
        </div>
        <button className="logout-btn" onClick={logout}>
          Sign Out
        </button>
      </div>

      <div className="dashboard-content">
        <div className="section-title">Quick Actions</div>

        <div className="card-grid">
          <div className="card">
            <h3>Scan Child QR</h3>
            <p>
              Scan a child’s QR code to access their health history.
            </p>
            <button className="primary-btn">Scan QR</button>
          </div>

          <div className="card">
            <h3>Enter Child ID</h3>
            <p>
              Manually enter a Child Health ID to view records.
            </p>
            <button className="primary-btn">Enter ID</button>
          </div>
        </div>

        <div className="section-title" style={{ marginTop: "40px" }}>
          Recent Visits
        </div>

        <div className="card">
          <p>No recent visits recorded.</p>
        </div>
      </div>
    </div>
  );
}
