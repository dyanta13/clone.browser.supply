"use client";

import { LiveTemplates } from "@/data/LiveTemplates";
import { motion } from "framer-motion";
import Image from "next/image";
import { LazyVideo } from "@/styles/LazyVideo";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}as const;

export default function Livetemplates() {
  return (
    <div className="w-full min-h-screen text-white overflow-hidden">
        
      {/* ─── SECTION 1 ─── */}
      <section className="relative w-full pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center select-none border-x border-zinc-800/80">
        <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center select-none">  
            <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block px-3 py-1 rounded-md bg-zinc-950/60 border border-zinc-800/80 text-[11px] font-medium tracking-widest text-zinc-400 uppercase mb-8 backdrop-blur-md shadow-sm"
            >
            Live Examples
            </motion.div>

            
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-serif leading-[1.1] tracking-tight text-zinc-100 font-normal max-w-3xl"
            >
            Real sites <span className="italic font-serif text-zinc-200">built</span> from a template
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-8 text-base sm:text-lg md:text-xl text-zinc-400 font-normal max-w-xl leading-relaxed tracking-wide"
            >
            A showcase of real customer websites, live right now, built using my Framer website templates.
            </motion.p>
        </div>
       </section>

      {/* ─── SECTION 2 ─── */}
      <section className="w-full relative z-10 border border-zinc-400/20">
        
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-transparent">

            {LiveTemplates.map((item, index) => {
            const isNotLastItem = index < LiveTemplates.length - 1;
            const isNotLastInRowLG = (index + 1) % 3 !== 0; 
            const isNotLastInRowMD = (index + 1) % 2 !== 0;

            return (
                <motion.div 
                key={item.id} 
                variants={cardVariants}
               
                className={`relative flex flex-col cursor-pointer bg-transparent p-6 sm:p-8 hover:bg-zinc-900/20 transition duration-300
                    border-b-[0.5px] border-solid border-zinc-800/40
                    ${isNotLastInRowLG && isNotLastItem ? "lg:border-r-[0.5px] lg:border-solid lg:border-zinc-800/40" : ""}
                    ${isNotLastInRowMD && isNotLastItem ? "md:max-lg:border-r-[0.5px] md:max-lg:border-solid md:max-lg:border-zinc-800/40" : ""}
                `}
                >
                
                <div className="w-full aspect-16/10 bg-zinc-900 rounded overflow-hidden relative shadow-lg group-hover:border-zinc-700/80 transition duration-300">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-300 z-10" />
                    
                    {item.siteVideo ? (
                    <LazyVideo
                        src={item.siteVideo}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition duration-500 ease-out"
                    />
                    ) : (
                    <Image
                        src={item.siteScreenshot}
                        alt={`Website by ${item.clientName}`}
                        fill
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-cover object-top group-hover:scale-[1.02] transition duration-500 ease-out"
                    />
                    )}
                </div>

                
                <div className="flex items-center gap-3 mt-6">
                    <div className="relative w-7 h-7 rounded overflow-hidden">
                        <Image
                            src={item.clientAvatar}
                            alt={item.clientName}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-serif text-zinc-200 group-hover:text-white transition font-normal tracking-wide">
                    {item.clientName}
                    </h3>
                </div>

                
                <div className="flex items-center justify-start gap-3 mt-auto pt-4 text-[11px] tracking-wider text-zinc-500 uppercase font-semibold">
                    <span>Template Used: {item.templateUsed}</span>
                    <div className="relative w-8 h-5 rounded overflow-hidden ease-out group-hover:-translate-y-3 transition-all cursor-pointer">
                        <Image
                            src={item.templateThumbnail}
                            alt={item.templateUsed}
                            fill
                            className="object-cover transition-transform duration-700"
                        />
                    </div>
                </div>

                </motion.div>
            );
            })}
        </motion.div>
      </section>

    </div>
  );
}