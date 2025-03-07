"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FormEvent, useState } from "react";
import ParticleBackground from "@/components/ParticleBackground"; // Reuse your component

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email); // Replace with API call
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3s
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A1A1A, #2A2A57)" }}
    >
      {/* Particle Background */}
      <ParticleBackground particleCount={150} />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-20 text-center max-w-lg mx-auto px-4"
      >
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#683695] via-[#6AA4D9] to-[#683695] bg-clip-text text-transparent mb-6"
        >
          Something Big is Coming
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-gray-400 text-lg md:text-xl mb-8"
        >
          Stay tuned for innovation that’s out of this world.
        </motion.p>

        {/* Email Signup Form */}
        <motion.div
          variants={formVariants}
          className="max-w-md mx-auto mb-8"
        >
          {isSubmitted ? (
            <p className="text-white text-lg">Thanks! We’ll keep you posted.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 bg-[rgba(26,26,26,0.5)] border border-[rgba(106,164,217,0.3)] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#6AA4D9] transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(106,164,217,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-white rounded-md font-semibold"
                style={{ backgroundColor: "#683695", border: "1px solid #6AA4D9" }}
              >
                Notify Me
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(106,164,217,0.5)" }}
          className="inline-block md:mt-3"
        >
          <Link
            href="/"
            className="px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg transition-all"
            style={{ backgroundColor: "#683695", border: "1px solid #6AA4D9" }}
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Darker Glass Overlay */}
      <div className="absolute inset-0 bg-[rgba(26,26,26,0.5)] backdrop-blur-sm z-10" />
    </section>
  );
};

export default ComingSoon;