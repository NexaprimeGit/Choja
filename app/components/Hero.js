"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner31.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F6F2]">

      {/* Carousel Wrapper */}
      <div className="relative w-full h-[420px] md:h-[520px]">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Dark Overlay for premium look */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-[#F5B849] w-6"
                  : "bg-white/70"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}