import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function CreateAccountParent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/parent");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="w-full max-w-md bg-slate-800 p-6 rounded-lg">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Parent Registration
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-slate-700"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-slate-700"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 py-2 rounded"
        >
          Create Parent Account
        </button>
      </div>
    </div>
  );
}
