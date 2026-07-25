import React from "react";
import {
 
  Mail,
  Heart,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold text-indigo-400">
              LeadDesk
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Capture, manage and convert your leads effortlessly.
              Designed for modern businesses and startups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h2>

            <ul className="space-y-3 text-slate-400">
              <li className="cursor-pointer hover:text-indigo-400 transition">
                Home
              </li>
              <li className="cursor-pointer hover:text-indigo-400 transition">
                Create Lead
              </li>
              <li className="cursor-pointer hover:text-indigo-400 transition">
                Dashboard
              </li>
              <li className="cursor-pointer hover:text-indigo-400 transition">
                Admin Login
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Connect
            </h2>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@leaddesk.com
              </div>

              <div className="flex gap-4 pt-2">
                <button className="rounded-xl bg-white/5 p-3 transition hover:bg-indigo-600">
                  <FaGithub size={20} />
                </button>

                <button className="rounded-xl bg-white/5 p-3 transition hover:bg-indigo-600">
                  <FaLinkedin size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 LeadDesk. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-slate-500">
            Made with <Heart size={16} className="text-red-500" /> by LeadDesk
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;