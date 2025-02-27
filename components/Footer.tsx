"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FilledButton from "./FilledButton";
import { BiPhoneCall } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import React, { JSX } from "react";

type FooterProps = {
  logoSrc?: string;
  menuItems?: { label: string; href: string }[];
  primaryColor?: string;
  textColor?: string;
  buttonText?: string;
  buttonLink?: string;
  socialLinks?: { facebook?: string; instagram?: string; linkedin?: string };
  contactInfo?: { label: string; icon: JSX.Element }[];
};

const Footer: React.FC<FooterProps> = ({
  logoSrc = "/logo.png",
  menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ],
  primaryColor = "#6AA4D9",
  textColor = "#D8B4FE",
  buttonText = "Start Your Journey",
  buttonLink = "/contact",
  socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contactInfo = [
    { label: "+254 798 040 353", icon: <BiPhoneCall className="w-5 h-5" /> },
    { label: "muasyajoshua07@gmail.com", icon: <MdAttachEmail className="w-5 h-5" /> },
    { label: "Westlands Commercial Center", icon: <FaLocationDot className="w-5 h-5" /> },
  ],
}) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-[#2B2B2B]/50 via-[#2B2B2B]/50 to-[#683695]/70 backdrop-blur-lg text-[#D8B4FE] py-6 shadow-[0px_-10px_20px_#683695] rounded-t-[50px] flex flex-col items-center"
    >
      <div className="container mx-auto text-center px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start pt-8">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.1, rotate: 5, y: -5, transition: { type: "spring", stiffness: 1000, damping: 20 } }}>
              <Image src={logoSrc} alt="Company Logo" width={80} height={40} priority className="object-contain" />
            </motion.div>
          </Link>

          <div className="flex flex-col items-center md:items-start py-5">
            <h1 className="font-black pb-2 text-xl md:text-2xl" style={{ color: primaryColor }}>DIGIMATIC MARKETERS</h1>
            <p className="text-center md:text-left text-sm md:text-base" style={{ color: textColor }}>
              Empowering businesses with innovative digital solutions, personalized strategies, and unwavering commitment to excellence
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h1 className="font-bold text-xl" style={{ color: primaryColor }}>Quick Links</h1>
          {menuItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1, color: "#683695", transition: { type: "spring", stiffness: 200, damping: 10 } }}>
              <Link href={item.href} className="text-base md:text-xl transition-opacity hover:opacity-80" style={{ color: textColor }}>
                {item.label}
              </Link>
            </motion.div>
          ))}
          {/* CTA Button */}
          <FilledButton text={buttonText} link={buttonLink} />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <h3 className="text-xl font-semibold" style={{ color: primaryColor }}>Get In Touch</h3>
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, x: -5, color: "#9b5cf2", transition: { type: "spring", stiffness: 300, damping: 10 } }}
              className="flex items-center space-x-2 py-2"
            >
              <motion.span className="text-sm md:text-base" style={{ color: textColor }}>
                {item.label}
              </motion.span>
              <motion.div
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 hidden md:flex" // Hide on mobile, show on md and above
              >
                {item.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6 mb-8">
        {Object.entries(socialLinks).map(([key, url]) => {
          const Icon = key === "facebook" ? FaFacebookF : key === "instagram" ? FaInstagram : FaLinkedinIn;
          return (
            <motion.a key={key} href={url} target="_blank" rel="noopener noreferrer" className="text-white text-xl md:text-2xl" whileHover={{ rotate: 15 }}>
              <Icon style={{ color: textColor }} onMouseEnter={(e) => (e.currentTarget.style.color = primaryColor)} onMouseLeave={(e) => (e.currentTarget.style.color = textColor)} />
            </motion.a>
          );
        })}
      </div>

      <div className="bg-[#683695] w-full text-center py-2 fixed bottom-0">
        <p className="text-xs md:text-sm" style={{ color: textColor }}>&copy; 2025 Digimatic Marketers. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
