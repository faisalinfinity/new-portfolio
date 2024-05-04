'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block border border-zinc-100  text-zinc-100 px-4 py-2 rounded-md  transition duration-300"
    >
      {children}
    </motion.a>
  );
};

export default LinkButton;
