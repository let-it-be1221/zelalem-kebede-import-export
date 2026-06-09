"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zk-dark"
        >
          <div className="text-center space-y-6">
            {/* Logo pulse animation */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl border-2 border-zk-gold/60 flex items-center justify-center bg-zk-green/20"
            >
              <span className="text-zk-gold font-bold text-2xl sm:text-3xl">
                ZK
              </span>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-zk-gold font-bold text-xl sm:text-2xl tracking-wide">
                Zelalem Kebede
              </h1>
              <p className="text-white/50 text-xs sm:text-sm mt-1 tracking-widest uppercase">
                General Import &amp; Export
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="w-48 mx-auto"
            >
              <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.6, duration: 0.9, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-zk-green to-zk-gold rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
