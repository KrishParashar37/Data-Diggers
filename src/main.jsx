import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// ✅ GLOBAL CSS IMPORTS
import "./styles/app.css";
import "./styles/dashboard.css";
import "./styles/parent.css";
import "./styles/asha.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);


