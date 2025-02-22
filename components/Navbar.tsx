"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FilledButton from "./FilledButton";
import MobileNavbar from "./MobileNavbar";
import { useMemo } from "react";

const Navbar = ({
  logoSrc = '/logo.png',
}) => {
  const navLinks = useMemo(() => [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
  ], []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full p-5 bg-transparent z-50"
      style={{ willChange: "opacity" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
              y: -5,
              transition: { type: "spring", stiffness: 1000, damping: 20 },
            }}
            whileTap={{ scale: 1.0 }}
          >
            <Image
              src={logoSrc}
              alt="Company Logo"
              width={80}
              height={40}
              priority
              className="object-contain"
            />
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-8 hidden md:flex">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path} className="text-xl font-bold">
              <motion.span
                whileHover={{
                  scale: 1.1,
                  color: "#683695",
                  y: -3,
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="text-[#6AA4D9]"
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <FilledButton text="Let's Talk" link="/contact" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
