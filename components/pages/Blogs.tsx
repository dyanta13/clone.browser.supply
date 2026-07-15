"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { blogs } from "@/data/Blogs";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
} as const;

export const Blogs = () => {
  return (
    <div className="w-full min-h-screen bg-[#09080d] text-white overflow-hidden">
      
      <section className="relative w-full pt-40 pb-20 flex flex-col items-center justify-center text-center select-none border border-zinc-700/30">
       
        <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-md bg-zinc-950/60 border border-zinc-800/80 text-[10px] font-medium tracking-widest text-zinc-400 uppercase mb-8"
          >
            Blog
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-serif leading-[1.1] tracking-tight text-zinc-100 font-normal"
          >
            Where Framer <br />
            meets <span className="italic font-serif text-zinc-200">business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed font-sans"
          >
            Weekly posts by the creator behind 2,000+ template sales.
          </motion.p>
        </div>
      </section>

      <section className="w-full mx-auto relative z-10 border-x border-zinc-700/30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 bg-transparent border-t-[0.5px] border-zinc-700/30"
        >
          {blogs.map((post, index) => {
            const isNotLastItem = index < blogs.length - 1;
            const isNotLastInRow = (index + 1) % 2 !== 0;

            return (
              <motion.div
                key={post.id}
                variants={cardVariants}
                className={`group flex flex-col bg-transparent cursor-pointer p-6 sm:p-10 transition duration-300 hover:bg-zinc-900/10 border-b-[0.5px] border-zinc-800/40
                  ${isNotLastInRow && isNotLastItem ? "md:border-r-[0.5px] md:border-zinc-800/40" : ""}
                `}
              >
                <div className="w-full aspect-[16/9] bg-zinc-900 border border-zinc-800/40 rounded-sm overflow-hidden relative shadow-md">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.01] transition duration-500 ease-out"
                    priority={index < 2} // Optimasi LCP untuk 2 post teratas
                  />
                </div>

                {/* Meta Data: Kategori & Tanggal */}
                <div className="flex items-center gap-2 mt-8 text-[10px] tracking-wider text-zinc-500 font-semibold uppercase">
                  <span>{post.category}</span>
                  <span className="text-zinc-700">•</span>
                  <span>{post.date}</span>
                </div>

                {/* Judul Artikel (Menggunakan Font Serif Menengah) */}
                <h3 className="mt-4 text-2xl sm:text-3xl font-serif text-zinc-200 group-hover:text-white transition duration-200 leading-tight font-normal tracking-wide">
                  {post.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

    </div>
  );
};