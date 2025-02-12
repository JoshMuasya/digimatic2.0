"use client"

import { ButtonProps } from '@/types';
import { motion } from 'framer-motion';
import React from 'react';

const OutlineButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        backdropFilter: 'blur(10px)',
        transition: { type: 'spring', stiffness: 200 },
      }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 border-2 border-[#6AA4D9] text-[#6AA4D9] rounded-2xl bg-white bg-opacity-10 backdrop-blur-md shadow-md text-lg font-semibold"
    >
      {text}
    </motion.button>
  );
};

export default OutlineButton;