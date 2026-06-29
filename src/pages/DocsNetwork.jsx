import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Network, Router, ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const DocsNetwork = () => {
  const navigate = useNavigate();

  const menus = [
    { name: 'MikroTik Administration', desc: 'Manajemen bandwidth, firewall, dan routing lokal.', icon: <Router size={24} className="text-teal-400" />, path: '/docs/mikrotik' },
    { name: 'Cisco Enterprise', desc: 'Konfigurasi switching VLAN, Inter-VLAN, dan OSPF.', icon: <Network size={24} className="text-teal-400" />, path: '/docs/cisco' },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="min-h-screen pt-12 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-left">
      
      {/* 2 TOMBOL NAVIGASI DI ATAS */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
        <button onClick={() => navigate(-1)} className="glass-hover flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer bg-white/20 dark:bg-white/[0.01] border border-slate-200/50 dark:border-white/10">
          <ArrowLeft size={18} /> Kembali ke Portfolio
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-12">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 mb-6">
          <Network size={40} className="text-teal-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Administration</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Silakan pilih vendor infrastruktur jaringan yang ingin Anda tinjau dokumentasinya.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menus.map((menu, idx) => (
          <motion.div key={idx} variants={itemVariants} onClick={() => navigate(menu.path)} className="cursor-pointer">
            <GlassCard className="glass-hover !p-5 border border-slate-200/50 dark:border-white/10 flex items-center justify-between group h-full">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 shrink-0">{menu.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-base mb-0.5">{menu.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{menu.desc}</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:text-teal-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DocsNetwork;