import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 tracking-wide">
        JANM SETU
      </h1>

      <p className="text-slate-400 mb-10">
        Digital Child Health Identity Platform
      </p>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/signup?role=parent")}
          className="bg-blue-600 px-8 py-4 rounded text-lg"
        >
          Parent
        </button>

        <button
          onClick={() => navigate("/signup?role=asha")}
          className="bg-green-600 px-8 py-4 rounded text-lg"
        >
          Vaccinator
        </button>
      </div>

      <p
        className="mt-10 text-sm text-blue-400 cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Already have an account? Login
      </p>
    </div>
  );
}
