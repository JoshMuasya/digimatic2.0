"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SolutionsSectionProps } from "@/types";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

interface TeamSectionProps {
  team: TeamMember[];
  ctaText?: string;
  ctaLink?: string;
  primaryColor?: string;
  accentColor?: string;
}

// Default props for easy reuse
const defaultProps: Partial<SolutionsSectionProps> = {
  primaryColor: "#6AA4D9", // Light blue from your theme
  accentColor: "#683695", // Midnight purple from your theme
  ctaText: "Get a Quote",
  ctaLink: "/services",
};

const TeamSection: React.FC<TeamSectionProps> = ({
  team,
  ctaText = defaultProps.ctaText!,
  ctaLink = defaultProps.ctaLink!,
  primaryColor = defaultProps.primaryColor!,
  accentColor = defaultProps.accentColor!,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  // CTA button animation
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } },
  };

  return (
    <section 
    className="w-full py-16 shadow-[0px_-10px_20px_#683695] rounded-t-[50px]" 
    style={{ background: "linear-gradient(180deg, #1A1A1A, #2A2A57)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
        >
          Our Team
        </motion.h2>

        {/* Team */}
        <div className="flex flex-col md:flex-row md:justify-around justify-center align-middle items-center overflow-x-auto pb-4 snap-x snap-mandatory">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-48 text-center snap-center"
            >
              <div className="relative bg-[rgba(104,54,149,0.1)] backdrop-blur-md rounded-full p-4">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-white mt-4">{member.name}</h3>
              <p className="text-[rgba(163,191,250,0.9)]">{member.role}</p>
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

export default TeamSection;