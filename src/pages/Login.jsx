import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("parent");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(role === "parent" ? "/parent" : "/asha");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="w-full max-w-md bg-slate-800 p-6 rounded-lg">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Login
        </h1>

        {/* Role Selection */}
        <div className="flex gap-2 mb-4">
          {/* <button
            className={`flex-1 py-2 rounded ${
              role === "parent" ? "bg-blue-600" : "bg-slate-700"
            }`}
            onClick={() => setRole("parent")}
          >
            Parent
          </button>
          <button
            className={`flex-1 py-2 rounded ${
              role === "asha" ? "bg-blue-600" : "bg-slate-700"
            }`}
            onClick={() => setRole("asha")}
          >
            Vaccine Worker
          </button> */}
        </div>

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
          onClick={handleLogin}
          className="w-full bg-green-600 py-2 rounded"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() =>
              navigate("/login")
            }
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}
