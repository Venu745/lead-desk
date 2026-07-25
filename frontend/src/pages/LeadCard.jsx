import React from "react";
import { useParams } from "react-router-dom";
import { leads } from "../asserts/data.js";
import {
  User,
  IndianRupee,
  MessageSquare,
  Clock,
} from "lucide-react";

const LeadCard = () => {
  const { id } = useParams();

  const lead = leads.find((item) => item.id === Number(id));

  if (!lead) {
    return (
      <h1 className="text-center text-white text-2xl">
        Lead Not Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-bl from-slate-950 to-indigo-950 p-8 flex items-center justify-center">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg shadow-2xl">

        {/* Profile */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <User size={30} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              {lead.name}
            </h2>
            <p className="text-slate-400">{lead.email}</p>
          </div>
        </div>

        {/* Budget */}
        <div className="mb-4 flex items-center gap-2 text-slate-300">
          <IndianRupee size={20} />
          <span className="text-lg">{lead.budget}</span>
        </div>

        {/* Message */}
        <div className="mb-6 flex gap-2 text-slate-300">
          <MessageSquare size={20} />
          <p>{lead.message}</p>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock size={18} />
            <span>Lead Status</span>
          </div>

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
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
    </div>
  );
};

export default LeadCard;

