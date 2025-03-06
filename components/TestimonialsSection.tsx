"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  primaryColor?: string;
  accentColor?: string;
  ctaText?: string;
  ctaLink?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  primaryColor = "#6AA4D9",
  accentColor = "#683695",
  ctaText = "Get a Quote",
  ctaLink = "/contact",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state for pausing

  // Auto-play effect with pause-on-hover
  useEffect(() => {
    if (isPaused) return; // Skip if paused
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer); // Cleanup on unmount or pause
  }, [isPaused, testimonials.length]); // Depend on isPaused and length

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  // CTA button animation
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } },
  };

  return (
    <section className="w-full py-16" style={{ background: "linear-gradient(180deg, #2A2A57, #1A1A1A)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
        >
          What Our Clients Say
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-[-3rem] text-white hover:text-[#6AA4D9] transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Testimonial Slide with Pause-on-Hover */}
          <div
            className="w-full max-w-2xl overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}  // Pause on hover
            onMouseLeave={() => setIsPaused(false)} // Resume on leave
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-[rgba(104,54,149,0.1)] backdrop-blur-md border border-[rgba(106,164,217,0.3)] rounded-lg p-6 text-center"
              >
                <p className="text-white text-lg italic">“{testimonials[currentIndex].quote}”</p>
                <p className="text-[rgba(163,191,250,0.9)] mt-4">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-[-3rem] text-white hover:text-[#6AA4D9] transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                  ? "w-6 bg-[#6AA4D9]" // Active: wider, blue, rounded rectangle
                  : "w-2 bg-gray-500" // Inactive: small, gray, circle
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={ctaVariants}
          className="mt-12 text-center"
        >
          <Link href={ctaLink} passHref>
            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 15px ${primaryColor}`,
              }}
              className="inline-block px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg transition-all"
              style={{
                backgroundColor: accentColor,
                border: `1px solid ${primaryColor}`,
              }}
            >
              {ctaText}
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;