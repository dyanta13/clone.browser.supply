import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SmoothScroll from "@/styles/SmoothScroll";

interface LivetemplatesLayoutProps {
  children: React.ReactNode;
}

export default function LivetemplatesLayout({ children }: LivetemplatesLayoutProps) {
  return (
    <SmoothScroll>
    <div className="min-h-screen flex flex-col justify-between relative bg-[#020104]">
      {/* 1. Navbar dipasang satu kali secara global di grup marketing */}
      <Navbar />
      
      {/* 2. Menggunakan flex-grow agar konten mendorong footer ke bawah jika halaman pendek */}
      <main>
        {children} 
      </main>
      
      {/* 3. Footer dipasang di ujung paling bawah */}
      <Footer />
    </div>
    </SmoothScroll>
  );
}