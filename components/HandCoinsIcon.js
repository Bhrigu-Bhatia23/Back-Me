"use client";

import { motion, useAnimation } from "motion/react";
import { useCallback } from "react";

const CIRCLE_VARIANTS = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: -20,
    opacity: [0, 1],
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

const SECOND_CIRCLE_VARIANTS = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: -20,
    opacity: [0, 1],
    transition: {
      delay: 0.15,
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

export default function HandCoinsIcon({ size = 32, className = "" }) {
  const controls = useAnimation();

  const handleEnter = useCallback(() => {
    controls.start("animate");
  }, [controls]);

  const handleLeave = useCallback(() => {
    controls.start("normal");
  }, [controls]);

  return (
    <div
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <svg
        fill="none"
        height={size}
        width={size}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
        <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
        <path d="m2 16 6 6" />

        <motion.circle
          cx="16"
          cy="9"
          r="2.9"
          variants={CIRCLE_VARIANTS}
          initial="normal"
          animate={controls}
        />

        <motion.circle
          cx="6"
          cy="5"
          r="3"
          variants={SECOND_CIRCLE_VARIANTS}
          initial="normal"
          animate={controls}
        />
      </svg>
    </div>
  );
}