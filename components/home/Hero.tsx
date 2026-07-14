"use client";

import { useState } from "react";
import Image from "next/image";
import Image1 from "@/public/image1.avif"

export const Hero = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
    navigator.clipboard.writeText("QUIZ30");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    };
  return (
    <>
      <section className="px-4 md:px-6 pt-24 pb-12 md:pt-32 md:pb-16 flex flex-col items-center text-center relative border-x border-zinc-900/20">
        <div className="backdrop-blur-2xl gap-2 text-xs inline-flex items-center px-3 py-1 rounded border border-zinc-800 bg-zinc-900/40 text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-medium mb-8">
          Quiz Result
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-[76px] font-sans font-bold tracking-tight max-w-4xl mx-auto leading-[1.12] mb-12 text-zinc-100">
          The Meraas template <br className="hidden sm:inline" /> is perfect for you
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none">
          
          <button className="w-full sm:w-auto bg-white text-black font-semibold text-sm px-6 py-4 rounded hover:bg-zinc-200 transition duration-300 shadow-sm">
            View template
          </button>
          
          <div className="w-full sm:w-auto flex items-center border border-zinc-800/80 bg-zinc-900/30 rounded-lg overflow-hidden text-xs backdrop-blur-sm">
            <span className="px-5 py-4 border-r border-zinc-800/80 text-sm font-semibold tracking-wider text-zinc-200">
              QUIZ30
            </span>
            <button 
              onClick={handleCopy}
              className="px-2 py-2 rounded bg-white text-black hover:bg-zinc-200 transition duration-200 text-center text-xs font-medium m-2">
              {copied ? "Copied!" : "Copy code"}
            </button>
          </div>
        </div>
        <div className="max-w-7xl bg-transparent flex flex-col w-full border-b-[0.2px] border-solid border-gray-700/20 mt-15" />
      </section>

      <section className="relative w-full aspect-4/3 sm:aspect-video flex flex-col items-center justify-center text-center px-6 overflow-hidden z-20 border-x border-zinc-700/20">
        <div className="absolute inset-0 z-0 select-none pointer-events-none rounded-xl">
            <Image
              src={Image1}
              alt="Background"
              fill
              priority
              quality={100}
              className="w-full h-auto block object-contain object-center rounded-xl"/>
            
        </div>
      </section>
      
    </>
  )
}
