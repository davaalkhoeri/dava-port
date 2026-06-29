import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // 🚀 FIX: Import motion murni yang benar dari framer-motion
import { ArrowLeft, Home, Cloud, Cpu, Box, TerminalSquare, ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const DocsInfrastructure = () => {
  const navigate = useNavigate();

  const menus = [
    { 
      name: 'Cloud Computing', 
      desc: 'Deployment infrastruktur cloud AWS.', 
      icon: <Cloud size={24} className="text-purple-500" />, 
      path: '/docs/aws',
      isRealProject: true 
    },
    { 
      name: 'Virtualization', 
      desc: 'Manajemen hypervisor dan virtual machine.', 
      icon: <Cpu size={24} className="text-purple-500" />, 
      path: '#',
      reason: 'Dokumentasi Virtualization berbasis VMware/Proxmox ini masih kosong karena saya belum merapikan berkas lab-nya ke bentuk tulisan terstruktur.'
    },
    { 
      name: 'Containerizing', 
      desc: 'Isolasi aplikasi menggunakan Docker.', 
      icon: <Box size={24} className="text-purple-500" />, 
      path: '#',
      reason: 'Dokumentasi Docker Container ini belum tersedia karena materi otomatisasi container terisolasi ini baru akan dikerjakan pada sisa target sebelum PKL dimulai.'
    },
    { 
      name: 'Automation', 
      desc: 'Otomatisasi konfigurasi server.', 
      icon: <TerminalSquare size={24} className="text-purple-500" />, 
      path: '#',
      reason: 'Dokumentasi IT Automation menggunakan Ansible ini masih kosong karena proyek deployment otomatisnya masih dalam tahap pengerjaan di lab sekolah.'
    },
  ];

  const handleMenuClick = (menu) => {
    if (menu.path === '#') {
      // 🚀 SINKRONISASI: Oper data via string URL query (?title=...&reason=...) biar aman dari Dynamic Server Error
      const queryParams = new URLSearchParams({
        title: menu.name,
        reason: menu.reason
      }).toString();

      navigate(`/coming-soon?${queryParams}`);
    } else {
      navigate(menu.path);
    }
  };

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
          <Cloud size={40} className="text-purple-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400">Hub</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Silakan pilih kategori dokumentasi infrastruktur sistem yang ingin Anda jelajahi.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menus.map((menu, idx) => (
          <motion.div key={idx} variants={itemVariants} onClick={() => handleMenuClick(menu)} className="cursor-pointer">
            <GlassCard className="glass-hover !p-5 border border-slate-200/50 dark:border-white/10 flex items-center justify-between group h-full">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 shrink-0">{menu.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-base mb-0.5">{menu.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{menu.desc}</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DocsInfrastructure;