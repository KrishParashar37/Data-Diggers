import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function AshaDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
navigate("/");

  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          ASHA / Vaccine Worker Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

