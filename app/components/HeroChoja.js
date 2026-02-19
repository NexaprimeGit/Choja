"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroChoja() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-4">
      
      <div className="relative w-full">

        {/* FULL IMAGE (NO CROPPING) */}
        <Image
          src="/images/hero.png"
          alt="Smart Jahirati Marketplace"
          width={1920}
          height={800}
          priority
          className="w-full h-auto object-contain"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />

       {/* Text Content */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 z-20"
>
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-4xl md:text-7xl font-serif text-[#157A4F] font-extrabold tracking-tight mb-3"
  >
    Smart Jahirati
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="text-gray-800 text-lg md:text-3xl font-semibold max-w-xs md:max-w-md leading-snug"
  >
    Your Marketplace. <br />
    <span className="text-[#F5B849]">Your Way.</span>
  </motion.p>

  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    className="mt-6 h-1 w-20 bg-[#157A4F] origin-left rounded-full"
  />
</motion.div>

      </div>
    </section>
  );
}
