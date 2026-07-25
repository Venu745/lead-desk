import React from "react";
import { Mail, Lock, ShieldCheck } from "lucide-react";
import api from "../lib/axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";

const AdminLogin = () => {

      const navigate = useNavigate();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Please fill all fields.");
    return;
  }

  try {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

  localStorage.setItem("adminToken", res.data.token);


    toast.success("Login Successful");

    navigate("/admindash");
  } catch (error) {
    console.log(error);

    toast.error(
      error.response?.data?.message || "Login failed"
    );
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center px-6">

      {/* Glow Effect */}
      <div className="absolute h-96 w-96 rounded-full bg-indigo-600 blur-[140px] opacity-30"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl">

        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-indigo-600 p-4 shadow-lg shadow-indigo-500/40">
            <ShieldCheck size={40} className="text-white" />
          </div>

          <h1 className="mt-5 text-4xl font-bold text-white">
            Admin Login
          </h1>

          <p className="mt-2 text-center text-slate-400">
            Welcome back! Login to manage your leads.
          </p>
        </div>

        {/* Form */}
        <form 
        onSubmit={handleLogin}
        className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-slate-300">
              <Mail size={18} />
              Email
            </label>

            <input
              type="email"
              value={email}
              placeholder="admin@leaddesk.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-slate-300">
              <Lock size={18} />
              Password
            </label>

            <input
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-indigo-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-3 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Secure Admin Access • LeadDesk
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;