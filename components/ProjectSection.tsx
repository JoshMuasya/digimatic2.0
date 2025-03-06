"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ProjectsSectionProps, SolutionsSectionProps } from "@/types";

// Default props for easy reuse
const defaultProps: Partial<SolutionsSectionProps> = {
    title: "OUR SOLUTIONS",
    primaryColor: "#6AA4D9", // Light blue from your theme
    accentColor: "#683695", // Midnight purple from your theme
    backgroundGradient: "linear-gradient(180deg, #1A1A1A, #2A2A57)",
    ctaText: "See All Projects",
    ctaLink: "/services",
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
    projects, 
    ctaText = defaultProps.ctaText!,
    ctaLink = defaultProps.ctaLink!,
    primaryColor = defaultProps.primaryColor!,
    accentColor = defaultProps.accentColor!,
}) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5 },
        }),
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
                    Featured Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[rgba(104,54,149,0.1)] backdrop-blur-md border border-[rgba(106,164,217,0.3)] rounded-lg p-6 text-center"
                        >
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                width={200}
                                height={200}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
                            <p className="text-[rgba(163,191,250,0.9)] mt-2">{project.description}</p>
                            <Link href={project.link} className="mt-4 inline-block text-[#6AA4D9] hover:underline">View Project</Link>
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

export default ProjectsSection;