"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,       // Waktu redaman scroll (semakin tinggi, semakin efek pegas/floating terasa)
        lerp: 0.08,          // Nilai interpolasi linear (0.05 - 0.1 direkomendasikan untuk feel premium)
        smoothWheel: true,   // Menghaluskan scroll mouse wheel
        wheelMultiplier: 1,  // Sensitivitas kecepatan scroll mouse
        touchMultiplier: 1.5,// Sensitivitas scroll pada layar HP/Trackpad
      }}
    >
      {children as any}
    </ReactLenis>
  );
}