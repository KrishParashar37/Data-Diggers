// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import CreateAccount from "./pages/CreateAccount";
// import ParentDashboard from "./pages/ParentDashboard";
// import AshaDashboard from "./pages/AshaDashboard";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Landing */}
//         <Route path="/" element={<Landing />} />

//         {/* Auth */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<CreateAccount />} />

//         {/* Dashboards */}
//         <Route path="/parent" element={<ParentDashboard />} />
//         <Route path="/asha" element={<AshaDashboard />} />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import ParentDashboard from "./pages/ParentDashboard";
import AshaDashboard from "./pages/AshaDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Dashboards */}
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/asha" element={<AshaDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
