"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChangingTextProps {
  options: string[];
  className?: string;
  interval?: number; // Custom interval in milliseconds
}

const ChangingText: React.FC<ChangingTextProps> = ({
  options,
  className = "",
  interval = 3000, // Default to 3 seconds if not specified
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [options.length, interval]);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-secondary font-bold"
        >
          {options[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default ChangingText;
