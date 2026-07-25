// import React from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";


// const AdminView = () => {

    
//   const [leads, setLeads] = useState([]);

//   const fetchLeads = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3000/api/notes"
//       );

//       setLeads(res.data);

//     } catch (error) {
//       console.log("Error fetching leads:", error);
//     }
//   };


//   useEffect(() => {
//     fetchLeads();
//   }, []);


  

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8">

//       {/* Heading */}
//       <div className="mb-10">
//         <h1 className="text-5xl font-bold text-white">
//           Admin Dashboard
//         </h1>

//         <p className="mt-2 text-slate-400">
//           Manage all your client leads in one place.
//         </p>
//       </div>

//       {/* Search */}

//       <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

//         <div className="flex items-center gap-3">

//           <Search className="text-slate-400" />

//           <input
//             type="text"
//             placeholder="Search by Name or Email..."
//             className="w-full bg-transparent text-white outline-none"
//           />

//         </div>

//       </div>

//       {/* Leads */}

//       <div className="grid gap-8 lg:grid-cols-2">

//         {leads.map((lead) => (

//           <div
//             key={lead_id}
//             className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
//           >

//             {/* User */}

//             <div className="flex items-center gap-4">

//               <div className="rounded-full bg-indigo-600 p-4">
//                 <User className="text-white" />
//               </div>

//               <div>
//                 <h2 className="text-xl font-bold text-white">
//                   {lead.name}
//                 </h2>

//                 <p className="text-slate-400">
//                   {lead.email}
//                 </p>
//               </div>

//             </div>

//             {/* Budget */}

//             <div className="mt-6 flex items-center gap-3 text-slate-300">
//               <IndianRupee size={18} />
//               {lead.budget}
//             </div>

//             {/* Message */}

//             <div className="mt-4 flex items-start gap-3 text-slate-300">
//               <MessageSquare size={18} />
//               <p>{lead.message}</p>
//             </div>

//             {/* Status */}

//             <div className="mt-6">

//               <label className="text-slate-400">
//                 Lead Status
//               </label>

//               <select
//                 className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none"
//               >
//                 <option>New</option>
//                 <option>Contacted</option>
//                 <option>Closed</option>
//               </select>

//             </div>

//             {/* Buttons */}

//             <div className="mt-6 flex gap-4">

//               <button className="flex-1 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
//                 Update
//               </button>

//               <button className="rounded-xl bg-red-600 p-3 text-white transition hover:bg-red-700">
//                 <Trash2 size={20} />
//               </button>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };

// export default AdminView;

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  User,
  IndianRupee,
  MessageSquare,
  Trash2,
} from "lucide-react";

const AdminView = () => {

  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/notes"
      );

      setLeads(res.data);

    } catch (error) {
      console.log("Error fetching leads:", error);
    }
  };


  useEffect(() => {
    fetchLeads();
  }, []);


  const deleteLead = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/notes/${id}`
      );

      fetchLeads();

    } catch (error) {
      console.log("Delete error:", error);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Manage all your client leads in one place.
        </p>
      </div>


      {/* Search */}
      <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="Search by Name or Email..."
            className="w-full bg-transparent text-white outline-none"
          />

        </div>

      </div>


      {/* Leads */}
      <div className="grid gap-8 lg:grid-cols-2">

        {leads.map((lead) => (

          <div
            key={lead._id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
          >


            {/* User */}
            <div className="flex items-center gap-4">

              <div className="rounded-full bg-indigo-600 p-4">
                <User className="text-white" />
              </div>


              <div>
                <h2 className="text-xl font-bold text-white">
                  {lead.name}
                </h2>

                <p className="text-slate-400">
                  {lead.email}
                </p>
              </div>

            </div>


            {/* Budget */}
            <div className="mt-6 flex items-center gap-3 text-slate-300">

              <IndianRupee size={18} />

              {lead.budget}

            </div>


            {/* Message */}
            <div className="mt-4 flex items-start gap-3 text-slate-300">

              <MessageSquare size={18} />

              <p>
                {lead.message}
              </p>

            </div>


            {/* Status */}
            <div className="mt-6">

              <label className="text-slate-400">
                Lead Status
              </label>


              <select
                value={lead.status}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none"
              >

                <option value="New">
                  New
                </option>

                <option value="Contacted">
                  Contacted
                </option>

                <option value="Closed">
                  Closed
                </option>

              </select>

            </div>


            {/* Buttons */}
            <div className="mt-6 flex gap-4">

              <button
                className="flex-1 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Update
              </button>


              <button
                onClick={() => deleteLead(lead._id)}
                className="rounded-xl bg-red-600 p-3 text-white transition hover:bg-red-700"
              >

                <Trash2 size={20} />

              </button>

            </div>


          </div>

        ))}

      </div>

    </div>
  );
};


export default AdminView;
