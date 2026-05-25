"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#030712]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-16 w-16 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#030712] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                CS
              </div>
            </div>
            <motion.div
              className="absolute -inset-2 rounded-2xl border border-cyan-400/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.p
            className="text-sm font-medium tracking-[0.3em] text-white/60 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Charan Subhash
          </motion.p>

          <motion.div
            className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
