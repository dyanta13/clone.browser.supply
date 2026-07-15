"use client";

import Livetemplates from "@/components/pages/Livetemplates";

export default function Home() {
  return (
    <>
      {/* Tidak perlu memanggil <Navbar /> dan <Footer /> di sini.
        Komponen <Main /> otomatis terbungkus rapi di dalam layout marketing.
      */}
      <Livetemplates />
    </>
  );
}