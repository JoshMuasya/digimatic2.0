"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden relative">
            {!isOpen && (
                <button
                    className="text-[#6AA4D9] text-3xl"
                    onClick={() => setIsOpen(true)}
                >
                    ☰
                </button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 h-full w-2/3 bg-[#1A1A1A] text-white shadow-lg z-50 p-6"
                    >
                        <div>
                            <div>
                                <Image
                                    src="/logo.png"
                                    alt='Logo'
                                    width={50}
                                    height={25}
                                    className="object-contain"
                                />
                            </div>

                            <div>
                                <button
                                    className="text-[#6AA4D9] text-3xl absolute top-5 right-5"
                                    onClick={() => setIsOpen(false)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6 mt-12">
                            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#6AA4D9] text-xl">Home</Link>
                            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-[#6AA4D9] text-xl">Services</Link>
                            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#6AA4D9] text-xl">About</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNavbar;