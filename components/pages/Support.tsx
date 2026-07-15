"use client";

import { motion } from "framer-motion";
import { faqs } from "@/data/Faqs";
import { Faqs } from "./Faqs";
import { ContactForm } from "./ContactForm";

export const Support = () => {
  return (
    <div className="w-full min-h-screen border border-zinc-800/80 text-white overflow-hidden">
      
      <section className="relative w-full pt-40 px-6 flex flex-col items-center justify-center text-center select-none">
        
        <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
          {/* Badge Kecil */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-md bg-zinc-950/60 border border-zinc-800/80 text-[10px] font-medium tracking-widest text-zinc-400 uppercase mb-8"
          >
            Support
          </motion.div>

          {/* Heading Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-serif leading-[1.1] tracking-tight text-zinc-100 font-normal"
          >
            Here to <span className="italic font-serif text-zinc-200">help</span> <br />
            when you need
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-sm sm:text-base md:text-lg text-zinc-400 max-w-lg leading-relaxed font-sans"
          >
            Do you have any trouble or questions? Check out the FAQs below or scroll a little further to contact me directly.
          </motion.p>
        </div>
      </section>

      <section className="w-full mx-auto px-6 mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="w-full flex flex-col border-t-[0.5px] border-zinc-800/40"
        >
          {faqs.map((faq) => (
            <Faqs 
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>
      </section>
    
      <ContactForm />
          
    </div>
  );
};