import React from "react";
import { User, Mail, IndianRupee, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

import api from "../lib/axios";

const CreatePage = () => {

     const [name, setName] = useState()
     const [email, setEmail] = useState()
     const [budget, setBudget] = useState()
     const [message, setMessage] = useState()
     const [status, setStatus] = useState('new')

     const handleSubmit = async (e) => {
        e.preventDefault();
       if( !name || !email || !budget || !message || !status){
        toast.error('All fields are required')
        return
       }

       try{
            await api.post('/notes',{
                name,
                email,
                budget,
                message,
                status
            })
            toast.success('Lead created successfully!')
       }catch(error){
        console.log('Error created lead', error)
         toast.error('Failed to create Lead')
       }
     }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-white">
            Create New Lead
          </h1>
          <p className="mt-3 text-slate-400">
            Capture your potential clients in seconds.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <form   onSubmit={handleSubmit}
          className="space-y-6">
            {/* Name */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <User size={18} />
                Name
              </label>

              <input
                type="text"
                placeholder="Enter client's name"
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none transition focus:border-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <Mail size={18} />
                Email
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none transition focus:border-indigo-500"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <IndianRupee size={18} />
                Budget Range
              </label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none transition focus:border-indigo-500"
              >
                <option  value='' className="bg-slate-900">
                  Select Budget
                </option>
                <option value='₹10k - ₹25k' className="bg-slate-900">
                  ₹10k - ₹25k
                </option>
                <option value='₹25k - ₹50k' className="bg-slate-900">
                  ₹25k - ₹50k
                </option>
                <option value=' ₹50k - ₹1L' className="bg-slate-900">
                  ₹50k - ₹1L
                </option>
                <option  value=' ₹1L+' className="bg-slate-900">
                  ₹1L+
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <MessageSquare size={18} />
                Message
              </label>

              <textarea
                rows={5}
                value={message}
                placeholder="Tell us about your project..."
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none transition focus:border-indigo-500"
              />
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 text-sm font-medium text-slate-300">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none transition focus:border-indigo-500"
              >
                <option value='new' className="bg-slate-900">New</option>
                <option value='contacted' className="bg-slate-900">Contacted</option>
                <option  value='closed' className="bg-slate-900">Closed</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-4 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/30 transition duration-300 hover:scale-[1.02]"
            >
              Create Lead
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;