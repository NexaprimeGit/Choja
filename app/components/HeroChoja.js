"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroChoja() {
  return (
    <section className="w-full mt-4">
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-md">
        
        {/* THE MAIN BANNER IMAGE */}
        <Image 
          src="/images/hero.jpg" 
          alt="Smart Jahirati Marketplace" 
          fill 
          priority
          className="object-cover transition-transform duration-700 hover:scale-105" 
        />

        {/* MODERN GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />

        {/* TEXT CONTENT WITH MOTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 z-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-serif text-[#D97706] font-extrabold tracking-tight mb-3 drop-shadow-sm"
          >
            Smart Jahirati
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-gray-800 text-lg md:text-2xl font-semibold max-w-[250px] md:max-w-md leading-snug"
          >
            Your Marketplace. <br />
            <span className="text-blue-600">Your Way.</span>
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="mt-6 h-1 w-20 bg-orange-500 origin-left rounded-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
