import React from "react";
import {
  Users,
  UserPlus,
  CheckCircle,
  XCircle,
  Search,
} from "lucide-react";

const DashBoard = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Monitor and manage all your leads effortlessly.
        </p>
      </div>

      {/* Stats Cards */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl shadow-xl">
          <Users className="text-indigo-400" size={35} />
          <h2 className="mt-4 text-4xl font-bold text-white">250</h2>
          <p className="text-slate-400">Total Leads</p>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl shadow-xl">
          <UserPlus className="text-blue-400" size={35} />
          <h2 className="mt-4 text-4xl font-bold text-white">45</h2>
          <p className="text-slate-400">New Leads</p>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl shadow-xl">
          <CheckCircle className="text-green-400" size={35} />
          <h2 className="mt-4 text-4xl font-bold text-white">150</h2>
          <p className="text-slate-400">Contacted</p>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl shadow-xl">
          <XCircle className="text-red-400" size={35} />
          <h2 className="mt-4 text-4xl font-bold text-white">55</h2>
          <p className="text-slate-400">Closed</p>
        </div>
      </div>

      {/* Search */}

      <div className="mt-10 rounded-3xl bg-white/5 p-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="Search Leads..."
            className="w-full bg-transparent text-white outline-none"
          />
        </div>
      </div>

      {/* Recent Leads */}

      <div className="mt-10 rounded-3xl bg-white/5 p-8 backdrop-blur-xl shadow-xl">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Recent Leads
        </h2>

        <div className="space-y-5">

          <div className="flex items-center justify-between rounded-2xl bg-slate-900/50 p-5">
            <div>
              <h3 className="text-white font-semibold">
                Venu Kumar
              </h3>

              <p className="text-slate-400">
                venu@gmail.com
              </p>
            </div>

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-400">
              New
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-slate-900/50 p-5">
            <div>
              <h3 className="text-white font-semibold">
                Rahul Sharma
              </h3>

              <p className="text-slate-400">
                rahul@gmail.com
              </p>
            </div>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
              Contacted
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-slate-900/50 p-5">
            <div>
              <h3 className="text-white font-semibold">
                Priya Reddy
              </h3>

              <p className="text-slate-400">
                priya@gmail.com
              </p>
            </div>

            <span className="rounded-full bg-red-500/20 px-4 py-2 text-red-400">
              Closed
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashBoard;