"use client";

import { SolutionsSectionProps } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";

// Default props for easy reuse
const defaultProps: Partial<SolutionsSectionProps> = {
    title: "OUR SOLUTIONS",
    primaryColor: "#6AA4D9", // Light blue from your theme
    accentColor: "#683695", // Midnight purple from your theme
    backgroundGradient: "linear-gradient(180deg, #1A1A1A, #2A2A57)",
    ctaText: "See All Services",
    ctaLink: "/services",
};

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
    title = defaultProps.title!,
    solutions,
    primaryColor = defaultProps.primaryColor!,
    accentColor = defaultProps.accentColor!,
    backgroundGradient = defaultProps.backgroundGradient!,
    ctaText = defaultProps.ctaText!,
    ctaLink = defaultProps.ctaLink!,
}) => {
    // Animation variants for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
        }),
    };

    // CTA button animation
    const ctaVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } },
    };

    return (
        <section
            className="w-full py-16"
            style={{ background: backgroundGradient }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#683695] via-[#6AA4D9] to-[#683695] bg-clip-text text-transparent drop-shadow-xl mb-12"
                >
                    {title}
                </motion.h2>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            className="relative bg-[rgba(104,54,149,0.1)] backdrop-blur-md border border-[rgba(106,164,217,0.3)] rounded-lg p-6 text-center shadow-lg"
                        >
                            {/* Icon */}
                            {solution.icon && (
                                <div className="mb-4" style={{ color: accentColor }}>
                                    {solution.icon}
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2">
                                {solution.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[rgba(163,191,250,0.9)] text-base">
                                {solution.description}
                            </p>

                            {/* Optional Link */}
                            {solution.link && (
                                <Link
                                    href={solution.link}
                                    className="mt-4 inline-block text-sm font-semibold"
                                    style={{ color: primaryColor }}
                                >
                                    Learn More →
                                </Link>
                            )}
                        </motion.div>
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

export default SolutionsSection;