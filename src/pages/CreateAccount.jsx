import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function CreateAccount() {
  const [params] = useSearchParams();
  const role = params.get("role"); // parent | asha

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!role) navigate("/");
  }, [role, navigate]);

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.replace(role === "parent" ? "/parent" : "/asha");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {role === "parent" ? "Parent Registration" : "Vaccinator Registration"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-slate-700"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password (min 6 chars)"
          className="w-full mb-4 p-2 rounded bg-slate-700"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 py-2 rounded"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
