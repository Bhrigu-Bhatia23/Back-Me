"use client";

import { motion, useAnimation } from "motion/react";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";

const RECT_1_VARIANTS = {
  normal: {
    translateX: 0,
    translateY: 0,
  },
  animate: {
    translateX: [0, 11, 11, 0],
    translateY: [0, 0, 0, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      times: [0, 0.4, 0.6, 1],
    },
  },
};

const RECT_2_VARIANTS = {
  normal: {
    translateX: 0,
    translateY: 0,
  },
  animate: {
    translateX: [0, 0, 0, 0],
    translateY: [0, 11, 11, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      times: [0, 0.4, 0.6, 1],
    },
  },
};

const RECT_3_VARIANTS = {
  normal: {
    translateX: 0,
    translateY: 0,
  },
  animate: {
    translateX: [0, -11, -11, 0],
    translateY: [0, 0, 0, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      times: [0, 0.4, 0.6, 1],
    },
  },
};

const RECT_4_VARIANTS = {
  normal: {
    translateX: 0,
    translateY: 0,
  },
  animate: {
    translateX: [0, 0, 0, 0],
    translateY: [0, -11, -11, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      times: [0, 0.4, 0.6, 1],
    },
  },
};

const LayoutGridIcon = forwardRef(
  (
    {
      onMouseEnter,
      onMouseLeave,
      className = "",
      size = 28,
      ...props
    },
    ref
  ) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          controls.start("animate");
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          controls.start("normal");
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.rect
            x="3"
            y="3"
            width="7"
            height="7"
            rx="1"
            animate={controls}
            initial="normal"
            variants={RECT_1_VARIANTS}
          />

          <motion.rect
            x="14"
            y="3"
            width="7"
            height="7"
            rx="1"
            animate={controls}
            initial="normal"
            variants={RECT_2_VARIANTS}
          />

          <motion.rect
            x="14"
            y="14"
            width="7"
            height="7"
            rx="1"
            animate={controls}
            initial="normal"
            variants={RECT_3_VARIANTS}
          />

          <motion.rect
            x="3"
            y="14"
            width="7"
            height="7"
            rx="1"
            animate={controls}
            initial="normal"
            variants={RECT_4_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

LayoutGridIcon.displayName = "LayoutGridIcon";

export default LayoutGridIcon;