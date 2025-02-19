"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";
import FilledButton from './FilledButton';

const Footer = ({
  logoSrc = '/logo.png',
  menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' }
  ],
  primaryColor = '#6AA4D9',
  buttonText = 'Contact Us',
  buttonLink = '/contact',
}) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-[#2B2B2B]/50 via-[#2B2B2B]/50 to-[#683695]/70 backdrop-blur-lg text-white py-6 shadow-[0px_-10px_20px_#683695] rounded-t-[50px]"
    >
      <div className="container mx-auto text-center mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo */}
        <div className='flex flex-col justify-start align-middle items-start'>
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

          <div className='flex flex-col justify-start align-middle items-start py-10'>
            <h1 className='font-bold text-[#683695] pb-10'>
              DIGIMATIC MARKETERS
            </h1>

            <p className='text-left'>
              Empowering businesses with innovative digital solutions, personalized strategies, and unwavering commitment to excellence
            </p>
          </div>

        </div>

        {/* Quick Links */}
        <div>
          <div className="flex flex-col space-y-6 mt-12">
            <h1 className='font-bold text-[#683695]'>
              Quick Links
            </h1>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-xl transition-colors duration-300 hover:opacity-80"
                style={{ color: primaryColor }}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Button */}
            <div>
              <FilledButton text={buttonText} link={buttonLink} />
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <div className="flex flex-col space-y-6 mt-12">
            <h1 className='font-bold text-[#683695]'>
              Get in Touch
            </h1>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-xl transition-colors duration-300 hover:opacity-80"
                style={{ color: primaryColor }}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Button */}
            <div>
              <FilledButton text={buttonText} link={buttonLink} />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#683695] fixed bottom-0 w-full'>
        <div className="my-3 text-sm flex flex-col justify-center items-center align-middle">
          <p>&copy; 2025 Digimatic Marketers. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;