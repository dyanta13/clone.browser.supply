"use client";

import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerData, FooterLink } from "@/data/Footer";
import avatarImg from "@/public/avatar1.avif";

export const Footer = () => {
  return (
    <footer className="w-full relative z-20 bg-transparent flex flex-col text-zinc-400 border-x border-zinc-700/20">
      
      <div className="lg:px-10 px-5 flex flex-col justify-between py-10 lg:flex-row ">
        {/* Sisi Kiri: Branding & Sosial Media */}
        <div className="flex flex-col mb-3 text-center md:text-left items-center md:items-start justify-center md:justify-start">
          <div>
            <h2 className="text-[30px] font-sans font-normal text-white tracking-tight mb-3">
              Browser.supply
            </h2>
            <p className="text-[15px] text-zinc-500 font-light max-w-sm leading-relaxed mb-6 md:mb-8">
              Launch your online business with a premium Framer website template.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-zinc-500 pt-2">
            <Link href="#" className="hover:text-white transition duration-200">
              <FaXTwitter size={18} />
            </Link>
            <Link href="#" className="hover:text-white transition duration-200">
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>

        {/* Sisi Kanan: Menu Navigasi (Looping dari footerData) */}
        <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:text-start text-center gap-16 sm:gap-14">
          
          {/* Kolom Navigasi 1 */}
          <div className="flex flex-col space-y-4 items-center md:items-start">
            {footerData.column1.map((link: FooterLink) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-[16px] font-semibold text-zinc-300 hover:text-white transition duration-200 w-fit"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Kolom Navigasi 2 */}
          <div className="flex flex-col space-y-4 items-center md:items-start">
            {footerData.column2.map((link: FooterLink) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-[16px] font-semibold text-zinc-300 hover:text-white transition duration-200 w-fit"
              >
                {link.title}
              </Link>
            ))}
          </div>

        </div>
      </div>

      <div className="w-full border-b-[0.5px] border-solid border-zinc-800/40" />

      <div className="w-full px-6 py-6 sm:px-8 md:px-12 flex flex-col items-center justify-center text-center space-y-4 md:flex-row md:justify-between md:items-center md:text-left md:space-y-0 bg-transparent text-xs text-zinc-500">
        <p className="text-[15px] font-normal items-center md:items-start justify-between">
          © 2026 browser.supply. <span className="text-zinc-300 font-normal">Framer</span> website templates
        </p>

        <div className="flex flex-wrap gap-2.5 md:items-start items-center justify-center">
          <span className="text-[15px] font-normal text-zinc-500 mt-2">Created by</span>
          <div className="flex items-center justify-center pl-1 py-1 backdrop-blur-sm hover:border-zinc-700 transition cursor-pointer select-none">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-700/50">
              <Image
                src={avatarImg}
                alt="Creator Avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <span className="text-[15px] font-normal text-center text-white mt-2">Ramish Aziz</span>
        </div>

      </div>

    </footer>
  );
}
