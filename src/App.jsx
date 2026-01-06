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


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './pages/Landing'
import JanmSetuLogin from './pages/JanmSetuLogin'
import ParentDashboard from './pages/ParentDashboard'
import AshaDashboard from './pages/AshaDashboard'
import AshaScan from './pages/AshaScan'
import AshaChildView from './pages/AshaChildView'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JanmSetuLogin />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<JanmSetuLogin />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/parent/create" element={<ParentDashboard />} />
        <Route path="/parent/child/:id" element={<ParentDashboard />} />
        <Route path="/asha" element={<AshaDashboard />} />
        <Route path="/asha/scan" element={<AshaScan />} />
        <Route path="/asha/child/:childId" element={<AshaChildView />} />
      </Routes>
    </BrowserRouter>
  );
}

