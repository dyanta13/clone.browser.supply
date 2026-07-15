"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, value: "6+", label: "Years building sites" },
  { id: 2, value: "2,000+", label: "Templates sold" },
  { id: 3, value: "5/5", label: "Template rating" },
];

export const PricingSection = () => {
  return (
    <section className="w-full bg-[#020104] text-white">
      
      <div className="max-w-7xl mx-auto border-t-[0.5px] border-b-[0.5px] border-zinc-800/40 grid grid-cols-1 md:grid-cols-3 bg-transparent">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center justify-center py-10 text-center
              ${index < stats.length - 1 ? "border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-zinc-800/40" : ""}
            `}
          >
            <h4 className="text-4xl md:text-5xl font-serif font-normal tracking-wide text-zinc-100">
              {stat.value}
            </h4>
            <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium mt-3">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full mx-auto text-center pt-28 pb-16 select-none">
        <div className="inline-block px-3 py-1 rounded-md bg-zinc-950/60 border border-zinc-800/80 text-[10px] font-medium tracking-widest text-zinc-400 uppercase mb-8">
          Pricing
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-serif leading-[1.1] text-zinc-100 font-normal">
          Need <span className="italic font-serif">one template</span> <br />
          or all <span className="italic font-serif">of them?</span>
        </h2>
        <p className="mt-6 text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
          Perfect for agencies and freelancers looking to deliver high-quality results at lightning speed.
        </p>
      </div>

      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 border-[0.5px] border-zinc-800/40 rounded-none overflow-hidden">
          
          {/* OPSI 1: SINGLE TEMPLATE */}
          <div className="flex flex-col p-8 sm:p-12 bg-gray-950 border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-zinc-800/40 justify-between min-h-137.5">
            <div>
              <span className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase">One-time payment</span>
              <div className="flex items-baseline justify-between mt-6">
                <h3 className="text-3xl sm:text-4xl font-serif text-zinc-100 font-normal">Single template</h3>
                <span className="text-3xl sm:text-4xl font-serif text-zinc-100 font-normal">$99</span>
              </div>
              <p className="text-sm text-zinc-400 mt-4 font-light">Choose a template best suited for you.</p>
              
              <div className="mt-10 flex flex-col gap-4">
                <p className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-1">Included:</p>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">📦</span> Instant access to chosen template
                </div>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">🔄</span> Lifetime template updates
                </div>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">⚡</span> 3 months Framer Pro
                </div>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">🎥</span> Step-by-step video tutorials
                </div>
              </div>
            </div>
            
            <button className="w-full mt-12 py-3.5 bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium text-sm hover:bg-zinc-800 transition duration-300">
              Browse templates
            </button>
          </div>

          <div className="relative flex flex-col p-8 sm:p-12 bg-transparent justify-between min-h-137.5 overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-87.5 h-87.5 rounded-full bg-linear-to-tr from-[#cf4836]/25 via-[#e26241]/10 to-transparent blur-[60px] pointer-events-none z-0" />
            
            <div className="relative z-10">
              <span className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase">One-time payment</span>
              <div className="flex items-baseline justify-between mt-6">
                <h3 className="text-3xl sm:text-4xl font-serif text-zinc-100 font-normal">Bundle</h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl font-serif text-zinc-100 font-normal">$399</span>
                  <span className="text-lg sm:text-xl font-serif text-zinc-600 line-through font-light">$1,881</span>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mt-4 font-light">Every template, unlimited sites. Build however you want.</p>
              
              <div className="mt-10 flex flex-col gap-4">
                <p className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-1">Included:</p>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">🗂️</span> All current templates
                </div>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">🚀</span> Early access to all future templates
                </div>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">🔄</span> Lifetime template updates
                </div>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">🌐</span> Use on unlimited sites
                </div>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">⚡</span> 3 months Framer Pro
                </div>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">🎥</span> Step-by-step video tutorials
                </div>
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="text-zinc-500 text-xs">💬</span> Priority support
                </div>
              </div>
            </div>
            
            <button className="w-full mt-12 py-3.5 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition duration-300 relative z-10">
              Get the bundle
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};