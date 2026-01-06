import { useNavigate } from "react-router-dom";

export default function AshaScan() {
  const navigate = useNavigate();

  const simulateScan = () => {
    navigate("/asha/child/JANMSETU-CH-DEMO01");
  };

  return (
    <div className="dashboard">
      <h2>Scan Child QR</h2>
      <p style={{ color: "#94a3b8" }}>
        (QR scan simulated for prototype)
      </p>

      <button onClick={simulateScan}>
        Simulate QR Scan
      </button>
    </div>
  );
}

      

