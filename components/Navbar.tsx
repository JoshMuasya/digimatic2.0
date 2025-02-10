"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full p-5 bg-transparent z-50"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <Link href="/">
            <motion.div
                whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    y: -5,
                    transition: {
                        type: 'spring',
                        stiffness: 1000,
                        damping: 20,
                    }
                }}
                whileTap={{
                    scale: 1.0,
                }}
            >
            <Image 
                src="/logo.png"
                alt='Logo'
                width={80}
                height={40}
                className="object-contain"
            />
            </motion.div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-8 hidden md:flex">
          <Link href="/">
            <motion.a
              whileHover={{ scale: 1.1, color: '#683695' }}
              className="text-[#6AA4D9] text-lg font-medium"
            >
              Home
            </motion.a>
          </Link>
          <Link href="/services">
            <motion.a
              whileHover={{ scale: 1.1, color: '#683695' }}
              className="text-[#6AA4D9] text-lg font-medium"
            >
              Services
            </motion.a>
          </Link>
          <Link href="/about">
            <motion.a
              whileHover={{ scale: 1.1, color: '#683695' }}
              className="text-[#6AA4D9] text-lg font-medium"
            >
              About
            </motion.a>
          </Link>
          <Link href="/contact">
            <motion.a
              whileHover={{ scale: 1.1, color: '#683695' }}
              className="text-[#6AA4D9] text-lg font-medium"
            >
              Contact
            </motion.a>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="text-[#6AA4D9] text-3xl">☰</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;