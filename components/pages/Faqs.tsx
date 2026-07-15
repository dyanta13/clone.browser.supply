"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FAQsProps {
  question: string;
  answer: string;
}

export const Faqs = ({ question, answer }: FAQsProps) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full border-b-[0.5px] border-zinc-800/40 bg-transparent transition duration-300">
      {/* Tombol Header Pertanyaan */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <span className="text-xl md:text-2xl font-serif text-zinc-200 group-hover:text-white transition duration-200 font-normal tracking-wide">
          {question}
        </span>
        
        {/* Simbol Plus / Minus dengan Animasi Rotasi */}
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-zinc-400 group-hover:text-white text-2xl font-light pr-2 shrink-0"
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
