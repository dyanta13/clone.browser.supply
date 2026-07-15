import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SmoothScroll from "@/styles/SmoothScroll";

interface BlogsLayoutProps {
  children: React.ReactNode;
}

export default function BlogsLayout({ children }: BlogsLayoutProps) {
  return (
    <SmoothScroll>
    <div className="min-h-screen flex flex-col justify-between relative bg-[#020104]">
      <Navbar />
        <main>
            {children} 
        </main>
      <Footer />
    </div>
    </SmoothScroll>
  );
}