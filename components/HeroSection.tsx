"use client";

import React from "react";
import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <ParticleBackground particleCount={200} enableShadows={false} connectionFrequency={3} />

      <div className="relative flex flex-col items-center justify-center text-center p-6 z-20">
        {/* Title with Entrance Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#683695] via-[#6AA4D9] to-[#683695] bg-clip-text text-transparent drop-shadow-xl pb-10"
        >
          Innovate the Future
        </motion.h1>

        {/* Subtext with Entrance Animation */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[#6AA4D9] text-lg mt-4 max-w-2xl px-4 py-2 rounded-lg pb-10"
        >
          Driving innovation through advanced software solutions
        </motion.p>

        {/* CTA Button with Entrance Animation and Hover Effect */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 10 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(104,54,149,0.8), 0px 0px 40px rgba(106,164,217,0.6)",
          }}
          className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-[#683695] rounded-full shadow-lg border border-[#6AA4D9] transition-all hover:bg-opacity-80"
        >
          Get Started →
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;