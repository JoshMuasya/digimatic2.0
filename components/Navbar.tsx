"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FilledButton from './FilledButton';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  { name: 'ABOUT', path: '/about' },
];

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
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path} passHref>
              <motion.a
                whileHover={{
                  scale: 1.1,
                  color: '#683695',
                  y: -3,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="text-[#6AA4D9] text-xl font-bold justify-between"
              >
                {link.name}
              </motion.a>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div>
          <FilledButton text={'Contact Us'} />
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