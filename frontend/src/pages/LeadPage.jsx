
import React from "react";
import { useNavigate } from "react-router-dom";
import { leads } from "../asserts/data";
import {
  IndianRupee,
  MessageSquare,
  User,
  Clock,
} from "lucide-react";

const LeadPage = () => {
  const navigate = useNavigate();

  return (
    <div 
     className="min-h-screen bg-gradient-to-bl from-slate-950 to-indigo-950 p-8">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Lead Management
        </h1>
        <p className="mt-2 text-slate-400">
          Manage and track all your client inquiries.
        </p>
      </div>

      {/* Lead Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {leads.map((lead) => (
          <div
            key={lead.id}
            onClick={() => navigate(`/note/${lead.id}`)}
            className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20"
          >
            {/* Profile */}
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <User size={28} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">
                  {lead.name}
                </h2>
                <p className="text-sm text-slate-400">{lead.email}</p>
              </div>
            </div>

            {/* Budget */}
            <div className="mb-4 flex items-center gap-2 text-slate-300">
              <IndianRupee size={18} />
              <span>{lead.budget}</span>
            </div>

            {/* Message */}
            <div className="mb-5 flex gap-2 text-slate-300">
              <MessageSquare size={18} />
              <p className="text-sm">{lead.message}</p>
            </div>

            {/* Status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-400">
                <Clock size={16} />
                <span className="text-sm">Lead Status</span>
              </div>

              <span
                className={`rounded-full px-4 py-1 text-sm font-semibold ${
                  lead.status === "New"
                    ? "bg-blue-500/20 text-blue-400"
                    : lead.status === "Contacted"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {lead.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadPage;