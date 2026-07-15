"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export const LazyVideo = ({ src, className }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // Membuat observer untuk mendeteksi apakah elemen masuk ke viewport layar
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Sekali video terdeteksi masuk layar, matikan observer-nya (unobserve)
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Video mulai dimuat 200px sebelum muncul di layar (biar tidak telat)
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      // Jika belum masuk area layar, jangan berikan source video agar browser tidak mendownload
      src={isIntersecting ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      className={className}
    />
  );
};