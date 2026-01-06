// import { useNavigate } from "react-router-dom";

// export default function Landing() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold mb-6">JANM SETU</h1>
//       <p className="text-slate-400 mb-10">
//         Digital Child Health Identity Platform
//       </p>

//       <div className="flex gap-6 mb-8">
//         <button
//           onClick={() => navigate("/signup?role=parent")}
//           className="bg-blue-600 px-8 py-4 rounded"
//         >
//           Parent
//         </button>

//         <button
//           onClick={() => navigate("/signup?role=asha")}
//           className="bg-green-600 px-8 py-4 rounded"
//         >
//           Vaccinator
//         </button>
//       </div>

//       <button
//         onClick={() => navigate("/login")}
//         className="text-blue-400 underline"
//       >
//         I already have an account
//       </button>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import logo from '../assets/janmsetu.svg'

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <img src={logo} alt="JANM SETU" className="w-48 mb-4" />
      <h1 className="text-4xl font-bold mb-2">JANM SETU</h1>
      <p className="text-slate-400 mb-8">Digital Child Vaccination Platform</p>

      <div className="flex gap-6 mb-6">
        <button onClick={() => navigate('/login?role=parent')} className="bg-teal-600 px-6 py-3 rounded-md">Parent</button>
        <button onClick={() => navigate('/login?role=asha')} className="bg-sky-700 px-6 py-3 rounded-md">Vaccinator (ASHA)</button>
      </div>

      <button onClick={() => navigate('/login')} className="text-slate-400 underline">I already have an account</button>
    </div>
  )
}

