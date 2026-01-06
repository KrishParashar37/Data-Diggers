import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ParentDashboard from "./pages/ParentDashboard";
import AshaDashboard from "./pages/AshaDashboard";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <CreateAccount /> : <Navigate to="/" />} />
        <Route path="/parent" element={user ? <ParentDashboard /> : <Navigate to="/" />} />
        <Route path="/asha" element={user ? <AshaDashboard /> : <Navigate to="/" />} />
        <Route
          path="/"
          element={!user ? <Landing /> : <Navigate to="/parent" />}
        />

      </Routes>
    </BrowserRouter>
  );
}
