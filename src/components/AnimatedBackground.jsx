import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 dark:bg-[#0B1121] transition-colors duration-500">
      
      {/* GRID PATTERN (Super Tipis & Samar) */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* ORBS ANIMATION (Tetap di bawah Grid) */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[35rem] h-[35rem] md:w-[40rem] md:h-[40rem] rounded-full bg-purple-400/30 dark:bg-purple-600/20 blur-[100px] md:blur-[120px] z-0"
      />

      <motion.div
        animate={{ x: [0, -120, 0], y: [0, -80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] md:w-[35rem] md:h-[35rem] rounded-full bg-teal-400/30 dark:bg-teal-500/20 blur-[100px] md:blur-[120px] z-0"
      />

      <motion.div
        animate={{ x: [0, 80, -80, 0], y: [0, -100, 100, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[25%] w-[25rem] h-[25rem] md:w-[30rem] md:h-[30rem] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[90px] md:blur-[100px] z-0"
      />
    </div>
  );
};

export default AnimatedBackground;