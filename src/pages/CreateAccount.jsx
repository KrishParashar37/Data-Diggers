import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function CreateAccount() {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get("role"); // parent | asha

  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!role) navigate("/");
  }, [role, navigate]);

//   const handleSignup = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate(role === "parent" ? "/parent" : "/asha");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

  const handleSignup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    if (role === "parent") {
      window.location.replace("/parent");
    } else {
      window.location.replace("/asha");
    }
  } catch (err) {
    alert(err.message);
  }
};


  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-800 p-6 rounded-lg">

        <h1 className="text-xl font-semibold mb-4 text-center">
          {role === "parent" ? "Parent Registration" : "Vaccinator Registration"}
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-slate-700"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password (min 6 characters)"
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

