"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2B2B2B] text-white py-6"
    >
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link href="/">
            <motion.a
              whileHover={{ scale: 1.1, color: '#683695' }}
              className="text-xl text-[#6AA4D9] font-semibold"
            >
              Digimatic Marketers
            </motion.a>
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="/privacy">
            <motion.a
              whileHover={{ scale: 1.1, color: '#683695' }}
              className="text-lg text-[#6AA4D9]"
            >
              Privacy Policy
            </motion.a>
          </Link>
          <Link href="/terms">
            <motion.a
              whileHover={{ scale: 1.1, color: '#683695' }}
              className="text-lg text-[#6AA4D9]"
            >
              Terms of Service
            </motion.a>
          </Link>
          <Link href="/contact">
            <motion.a
              whileHover={{ scale: 1.1, color: '#683695' }}
              className="text-lg text-[#6AA4D9]"
            >
              Contact Us
            </motion.a>
          </Link>
        </div>
        <div className="mt-6 text-sm">
          <p>&copy; 2025 Digimatic Marketers. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;