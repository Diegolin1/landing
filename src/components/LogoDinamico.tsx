"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const LogoDinamico = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* SVG Icon */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Letter G (Stylized outer curve) */}
        <motion.path
          d="M 52 32 A 20 20 0 1 0 32 52 L 32 32 Z"
          stroke="url(#g-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Nodes connecting lines */}
        <motion.g
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { staggerChildren: 0.2, delayChildren: 1 } 
            }
          }}
        >
          {/* Line 1 */}
          <motion.line
            x1="20" y1="20" x2="32" y2="28"
            stroke="#9dcbd2"
            strokeWidth="2"
            variants={{
              hidden: { pathLength: 0 },
              visible: { pathLength: 1, transition: { duration: 0.5 } }
            }}
          />
          {/* Line 2 */}
          <motion.line
            x1="32" y1="28" x2="24" y2="40"
            stroke="#9dcbd2"
            strokeWidth="2"
            variants={{
              hidden: { pathLength: 0 },
              visible: { pathLength: 1, transition: { duration: 0.5 } }
            }}
          />
          {/* Line 3 */}
          <motion.line
            x1="32" y1="28" x2="44" y2="40"
            stroke="#9dcbd2"
            strokeWidth="2"
            variants={{
              hidden: { pathLength: 0 },
              visible: { pathLength: 1, transition: { duration: 0.5 } }
            }}
          />
        </motion.g>

        {/* Nodes circles */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          fill="#9dcbd2"
        >
          <circle cx="20" cy="20" r="3" />
          <circle cx="32" cy="28" r="4" fill="#0f1a2b" stroke="#9dcbd2" strokeWidth="2" />
          <circle cx="24" cy="40" r="3" />
          <circle cx="44" cy="40" r="3" />
        </motion.g>

        {/* Upward Arrow */}
        <motion.path
          d="M 28 44 L 46 20 M 36 20 L 48 18 L 48 30"
          stroke="#ff8c00" /* brand-orange-cta */
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: 2.2,
            duration: 0.8,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        />

        <defs>
          <linearGradient id="g-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9dcbd2" />
            <stop offset="1" stopColor="#0f1a2b" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      <motion.span
        className="text-2xl font-display font-bold tracking-tight text-brand-text-primary hidden sm:block"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Gestory
      </motion.span>
    </div>
  );
};
