"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [role='button'], input, textarea, select")
      );
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY, visible]);

  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden mix-blend-difference md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60"
          animate={{
            width: hovering ? 48 : 24,
            height: hovering ? 48 : 24,
            backgroundColor: hovering
              ? "rgba(34, 211, 238, 0.08)"
              : "rgba(34, 211, 238, 0.15)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
      >
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
      </motion.div>
    </>
  );
}
