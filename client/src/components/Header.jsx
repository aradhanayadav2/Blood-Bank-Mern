// import { useState } from "react";

// export default function Header() {

//   const [notifications] = useState(3);

//   return (
//     <header className="bg-gradient-to-r from-red-800 via-red-700 to-red-900 shadow-lg">

//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo / Title */}

//         <div className="flex items-center gap-3">
//           <h1 className="text-2xl font-bold text-white">
//             🩸 Blood Bank
//           </h1>

//           <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
//             Donor Portal
//           </span>
//         </div>


//         {/* Search */}

//         <div className="hidden md:block w-1/3">
//           <input
//             type="text"
//             placeholder="Search hospitals..."
//             className="w-full px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-yellow-400 outline-none"
//           />
//         </div>


//         {/* Right Section */}

//         <div className="flex items-center gap-6">

//           {/* Notification */}

//           <div className="relative cursor-pointer">
//             <span className="text-2xl text-white">🔔</span>

//             <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
//               {notifications}
//             </span>
//           </div>


//           {/* Profile */}

//           <div className="flex items-center gap-3 cursor-pointer">

//             <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
//               A
//             </div>

//             <div className="hidden md:block">
//               <p className="text-white font-semibold">Aradhana</p>
//               <p className="text-gray-200 text-sm">Donor</p>
//             </div>

//           </div>

//         </div>

//       </div>

//     </header>
//   );
// }