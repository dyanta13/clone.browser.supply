"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
  return (
    <motion.div
      // Posisi awal sebelum di-scroll: tergeser ke bawah 40px dan transparan
      initial={{ opacity: 0, y: 40 }}
      
      // Ketika elemen masuk ke area layar (viewport)
      whileInView={{ opacity: 1, y: 0 }}
      
      // Mengunci agar animasi hanya terpicu 1 kali saat pertama di-scroll
      viewport={{ once: true, margin: "-80px" }}
      
      // Transisi kurva cubic-bezier kustom agar gerakannya melambat elegan di akhir
      transition={{
        duration: 0.9,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Kurva easeOutExpo premium
      }}
    >
      {children}
    </motion.div>
  );
};