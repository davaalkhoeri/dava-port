import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Terminal, ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
  // Fungsi otomatis balik ke halaman paling atas pas di-klik
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SISTEMATIKA URUTAN ANIMASI (Senada sama Hero & About)
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <footer className="w-full mt-24 border-t border-slate-200/30 dark:border-white/5 bg-slate-900/10 dark:bg-black/10 backdrop-blur-md py-12 px-6 md:px-12 max-w-6xl mx-auto rounded-t-3xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        
        {/* KIRI: Personal Identity & SysAdmin Vibe */}
        <motion.div variants={itemVariants} className="flex flex-col gap-1.5 text-sm">
          <p className="font-extrabold text-slate-800 dark:text-slate-200 tracking-tight">
            © {new Date().getFullYear()} — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 font-black">Muhammad Dava Alkhoeri</span>
          </p>
          {/* Vibe Anak Server / Linux */}
          <p className="text-xs text-slate-500 dark:text-slate-500 font-mono flex items-center justify-center md:justify-start gap-1.5">
            <span className="text-purple-500">//</span> Infrastructure Status: 
            <span className="inline-flex items-center gap-1 text-emerald-500 font-bold bg-emerald-500/5 px-2 py-0.5 rounded-md border border-emerald-500/20">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Online & Stable
            </span>
          </p>
        </motion.div>

        {/* TENGAH: Crafted Tech Stack (Capsule Layout) */}
        <motion.div 
          variants={itemVariants} 
          className="flex items-center gap-2 bg-slate-200/50 dark:bg-white/5 px-4 py-2 rounded-full border border-slate-300/30 dark:border-white/10 shadow-sm text-xs text-slate-600 dark:text-slate-400 font-mono"
        >
          <Terminal size={14} className="text-purple-500" />
          <span>Handcrafted with</span>
          <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
          <span>using React & Tailwind</span>
        </motion.div>

        {/* KANAN: Interactive Back to Top Button */}
        <motion.button
          variants={itemVariants}
          onClick={scrollToTop}
          className="glass-hover flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300/30 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer group shadow-sm bg-white/20 dark:bg-white/[0.01]"
        >
          <span>Back to Top</span> 
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300 text-purple-500" />
        </motion.button>

      </motion.div>
    </footer>
  );
};

export default Footer;