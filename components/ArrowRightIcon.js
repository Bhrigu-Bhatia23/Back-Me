"use client";

import { motion, useAnimation } from "motion/react";
import { useCallback } from "react";

const PATH_VARIANTS = {
  normal: {
    d: "M5 12h14",
  },
  animate: {
    d: ["M5 12h14", "M5 12h9", "M5 12h14"],
    transition: {
      duration: 0.4,
    },
  },
};

const SECONDARY_PATH_VARIANTS = {
  normal: {
    d: "m12 5 7 7-7 7",
    x: 0,
  },
  animate: {
    d: "m12 5 7 7-7 7",
    x: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

export default function ArrowRightIcon({
  size = 24,
  className = "",
}) {
  const controls = useAnimation();

  const handleMouseEnter = useCallback(() => {
    controls.start("animate");
  }, [controls]);

  const handleMouseLeave = useCallback(() => {
    controls.start("normal");
  }, [controls]);

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        <motion.path
          d="M5 12h14"
          variants={PATH_VARIANTS}
          initial="normal"
          animate={controls}
        />

        <motion.path
          d="m12 5 7 7-7 7"
          variants={SECONDARY_PATH_VARIANTS}
          initial="normal"
          animate={controls}
        />
      </svg>
    </div>
  );
}