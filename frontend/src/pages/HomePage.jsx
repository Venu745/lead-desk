import React from "react";
import { LayoutDashboard, LogIn } from "lucide-react";
import LeadPage from "./LeadPage";
import CreatePage from "./CreatePage";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import api from '../lib//axios.js'

const HomePage = () => {

     const navigate = useNavigate();

     const [isRateLimited, setIsRatedLimited] = useState(true);
     const [notes, setNotes] = useState([]);
     const[loading, setLoading] = useState(true)

     useEffect(() => {
        const fetchNotes = async () => {
            try{
               const res = await api.get('/notes');
               console.log(res.data);
               setNotes(res.data)
            }catch(error){
                console.log('Error Fetching notes')
            }
        };
        fetchNotes();
     },[]);

  return (
<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-indigo-900 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide text-white">
            LeadDesk
          </h1>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
             onClick={() => navigate("/dashboard")}
             className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-700">
              <LayoutDashboard size={18} />
              Dashboard
            </button>

            <button 
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-700">
              <LogIn size={18} />
              Admin Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950  ">
        {/* Glow Background */}
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600 blur-[120px] opacity-30" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300">
            Trusted by 500+ Businesses
          </span>

          <h1 className="mt-8 text-7xl font-black leading-tight text-white">
            Capture Leads.
            <br />
            Close Deals Faster.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            LeadDesk helps businesses capture leads, manage client inquiries,
            and convert prospects into customers with ease.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <button
              onClick={() => navigate("/create")}
            className="rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105 hover:bg-indigo-700">
              Get Started
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/10">
              Explore Dashboard
            </button>
          </div>
        </div>
      </section>
      <LeadPage />
      <CreatePage />
      <Footer/>
    </div>
  );
};

export default HomePage;
