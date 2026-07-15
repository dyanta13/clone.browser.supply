"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import framer from "@/public/framer.avif";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0  w-full h-20 z-50 transition-all duration-300${
        isScroll
          ? "bg-transparent backdrop-blur-[20px] mask-progressive-blur z-40"
          : "bg-transparent md:backdrop-blur-[2px] backdrop-blur-[2px]"
      }`}>

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between ml-2 mr-2 z-50 md:px-8">
        <div className="flex gap-4">
          <Image src={framer} alt="framer" className="w-4 h-4 mt-1"></Image>
          <p className="text-[1rem] font-bold tracking-wide text-white">
            Browser.supply
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-5">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative text-[1rem] font-semibold text-white-600 hover:text-white transition"
            >
              {item.title}

              <span className="absolute left-0 -bottom-1 h-[0.5] w-0 bg-white transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 items-center">
          <FaXTwitter size={18} className="hidden md:block hover:scale-110 transition cursor-pointer"/>
          <FaYoutube size={25} className="hidden md:block hover:scale-110 transition cursor-pointer"/>
          {/* Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 rounded bg-gray-900 text-white font-semibold hover:scale-105 transition">
              Bundle
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="md:hidden h-screen bg-transparent backdrop-blur-[25px] border-t border-white/10 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  {item.title}
                </Link>
              ))}

              <div className="flex gap-4 items-center">
                <FaXTwitter size={15} className="hover:scale-110 transition"/>
                <FaYoutube size={18} className="hover:scale-110 transition"/>
              </div>
              <button className="mt-4 w-full rounded bg-white py-3 text-black font-semibold">
                Full Kit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
