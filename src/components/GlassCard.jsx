import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={`
        glass glass-hover rounded-3xl p-6
        
        /* 🌤️ TAMPILAN SAAT MODE TERANG (Light Theme) */
        bg-white/80 border-white/60 text-slate-900 shadow-lg shadow-black/5
        hover:bg-white/95 hover:border-purple-400/50 hover:shadow-purple-500/10
        
        /* 🌙 OVERRIDE AUTOMATIC SAAT MODE GELAP (Dark Theme) */
        dark:bg-white/[0.03] dark:border-white/10 dark:text-white dark:shadow-2xl dark:shadow-black/40
        dark:hover:bg-white/[0.07] dark:hover:border-white/20 dark:hover:shadow-purple-500/20
        
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;