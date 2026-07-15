"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    templateUsed: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="w-full mx-auto px-4 mt-20 relative z-10">
      
      <div className="flex flex-col items-center text-center select-none mb-16">
        <div className="inline-block px-3 py-1 rounded-md bg-zinc-950/60 border border-zinc-800/80 text-[10px] font-medium tracking-widest text-zinc-400 uppercase mb-8">
          Contact
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-serif leading-[1.1] text-white font-normal">
          Still unsure? <br />
          <span className="italic">Message</span> me below
        </h2>
        <p className="mt-6 text-sm text-zinc-400 max-w-sm leading-relaxed">
          Send me a message and I'll get back to you within 48 hours. Please provide as much detail as below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full bg-transparent border-t-[0.5px] border-zinc-800/40">
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col p-6 border-b-[0.5px] md:border-r-[0.5px] border-zinc-800/40">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-white mb-3">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Bruce"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full bg-transparent text-white placeholder-zinc-400 text-sm focus:outline-none"
            />
          </div>

          <div className="flex flex-col p-6 border-b-[0.5px] border-zinc-800/40">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-white mb-3">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Wayne"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full bg-transparent text-white placeholder-zinc-400 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col p-6 border-b-[0.5px] md:border-r-[0.5px] border-zinc-800/40">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-white mb-3">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="bruce@wayneenterprise.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent text-white placeholder-zinc-400 text-sm focus:outline-none"
            />
          </div>

          <div className="flex flex-col p-6 border-b-[0.5px] border-zinc-800/40 relative">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-white mb-3">
              Which template are you using? <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.templateUsed}
              onChange={(e) => setFormData({ ...formData, templateUsed: e.target.value })}
              className="w-full bg-transparent text-zinc-400 text-sm focus:outline-none appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-[#09080d] text-zinc-600">Select...</option>
              <option value="meraas" className="bg-[#09080d] text-zinc-200">MERAAS</option>
              <option value="monetize" className="bg-[#09080d] text-zinc-200">MONETIZE</option>
              <option value="editr" className="bg-[#09080d] text-zinc-200">EDITR</option>
            </select>
            <div className="absolute right-6 bottom-7 pointer-events-none text-zinc-500 text-xs">
              ▼
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 border-b-[0.5px] border-zinc-800/40">
          <label className="text-[10px] uppercase tracking-wider font-semibold text-white mb-3">
            Provide a detailed explanation of your problem/question <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            placeholder="Gotham needs me..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-transparent text-white placeholder-zinc-400 text-sm focus:outline-none resize-none leading-relaxed"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-white text-black font-semibold text-sm rounded-none hover:bg-zinc-200 transition duration-300 active:scale-[0.99]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};