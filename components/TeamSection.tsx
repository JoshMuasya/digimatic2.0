"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio?: string;
}

interface TeamSectionProps {
  title?: string;
  team: TeamMember[];
  primaryColor?: string;
  accentColor?: string;
  ctaText?: string;
  ctaLink?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  title = "Our Team",
  team,
  primaryColor = "#6AA4D9",
  accentColor = "#683695",
  ctaText = "Join Our Team",
  ctaLink = "/careers",
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section className="w-full py-16" style={{ background: "linear-gradient(180deg, #1A1A1A, #2A2A57)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[rgba(104,54,149,0.1)] backdrop-blur-md border border-[rgba(106,164,217,0.3)] rounded-lg p-6 text-center"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-[rgba(163,191,250,0.9)]">{member.role}</p>
              {member.bio && <p className="text-gray-400 text-sm mt-2">{member.bio}</p>}
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={ctaLink}
            className="inline-block px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg transition-all"
            style={{ backgroundColor: accentColor, border: `1px solid ${primaryColor}` }}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;