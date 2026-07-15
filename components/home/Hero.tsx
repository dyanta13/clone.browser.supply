"use client";

import { useState } from "react";
import Image from "next/image";
import Image1 from "@/public/image1.avif"
import { motion } from "framer-motion";

export const Hero = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
    navigator.clipboard.writeText("QUIZ30");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    };
  return (
    <>
    <div className="border-y border-x border-zinc-800/50">
      <section className="px-4 md:px-4 pt-24 pb-2 md:pt-37 md:pb-12 flex flex-col items-center text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="inline-block px-3 py-1 rounded-md bg-zinc-950/60 border border-zinc-800/80 text-[11px] font-medium tracking-widest text-zinc-400 uppercase mb-8 backdrop-blur-md shadow-sm"
        >
          Quiz Result
        </motion.div>

        {/*<div className="backdrop-blur-2xl gap-2 text-xs inline-flex items-center px-3 py-1 rounded border border-zinc-800 bg-zinc-900/40 text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-medium mb-8">
          Quiz Result
        </div>*/}

        <div className="relative z-10 w-full text-center flex flex-col items-center select-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-[5.5rem] font-serif leading-[1.1] tracking-tight text-zinc-100 font-normal max-w-3xl"
          >
            The Meraas template <span className="italic font-serif text-zinc-200">is</span> perfect for you
          </motion.h1>
        </div>

        {/*<h1 className="text-4xl sm:text-6xl md:text-[76px] font-sans font-bold tracking-tight max-w-4xl mx-auto leading-[1.12] mb-12 text-zinc-100">
          The Meraas template <br className="hidden sm:inline" /> is perfect for you
        </h1> */}

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="inline-block px-3 py-1 rounded-md text-[11px] font-medium tracking-widest text-zinc-400 uppercase">
             
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none mt-10">
            <button className="w-full sm:w-auto bg-white text-black font-semibold text-sm px-6 py-4 rounded hover:bg-zinc-200 transition duration-300 shadow-sm">
              View template
            </button>
            
            <div className="w-full sm:w-auto flex items-center bg-zinc-900/60 rounded overflow-hidden text-xs backdrop-blur-sm">
              <span className="px-5 py-4 border-r border-zinc-800/80 text-sm font-semibold tracking-wider text-zinc-200">
                QUIZ30
              </span>
              <button 
                onClick={handleCopy}
                className="w-full px-2 py-2 sm:w-auto rounded bg-white text-black hover:bg-zinc-200 transition duration-200 text-center text-xs font-medium m-2">
                {copied ? "Copied!" : "Copy code"}
              </button>
            </div>
          </div>

        </motion.div> 
        {/*<div className="max-w-7xl bg-transparent flex flex-col w-full border-y-[0.2px] border-solid border-gray-700/20 mt-15" />*/}
      </section>
    </div>

    <div className="border-x border-zinc-800/50">
      <section className="relative w-full aspect-4/3 sm:aspect-video flex flex-col items-center justify-center text-center px-6 overflow-hidden z-20 md:mt-10 md:mb-10">
        <div className="absolute inset-0 z-0 select-none pointer-events-none rounded-lg">
            <Image
              src={Image1}
              alt="Background"
              fill
              priority
              quality={100}
              className="w-full h-auto block object-contain object-center rounded"/>
            
        </div>
      </section>
    </div>
    </>
  )
}
