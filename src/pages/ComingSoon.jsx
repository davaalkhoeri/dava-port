import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Hourglass } from 'lucide-react';
import LottieComponent from 'lottie-react';
import comingsoonAnim from '../assets/comingsoon.json'; 

const Lottie = LottieComponent.default || LottieComponent;

const ComingSoon = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title') || 'Coming Soon';
  const reason = searchParams.get('reason') || 'Halaman ini sedang dalam proses pengerjaan dan migrasi berkas.';

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#030712] relative overflow-hidden">
      
      {/* Efek Ambient Glow Premium di Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full relative z-10"
      >
        {/* CONTAINER UTAMA: Pengganti GlassCard, Menggunakan Transparansi Kaca Murni */}
        <div className="p-8 text-center flex flex-col items-center bg-slate-900/40 border border-white/[0.08] backdrop-blur-2xl rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          
          {/* Badge Status Atas */}
          <div className="mb-6 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-[10px] font-mono tracking-wider flex items-center gap-1.5 uppercase select-none">
            <Hourglass size={12} className="animate-spin text-amber-400" /> Under Construction
          </div>

          {/* Animasi Lottie dengan Efek Bayangan Lembut */}
          <div className="w-40 h-40 mb-6 flex items-center justify-center filter drop-shadow-[0_10px_20px_rgba(20,184,166,0.15)]">
            {typeof Lottie === 'function' || typeof Lottie === 'object' ? (
              <Lottie animationData={comingsoonAnim} loop={true} autoplay={true} />
            ) : (
              <div className="text-xs text-slate-500 font-mono">Loading Animation...</div>
            )}
          </div>
          
          {/* Judul dengan Tipografi Sleek & Gradasi Linear */}
          <h1 className="text-2xl font-extrabold mb-3 text-white tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400">{title}</span> Coming Soon
          </h1>
          
          {/* Box Keterangan / Alasan */}
          <p className="text-slate-400 text-sm mb-8 leading-relaxed w-full bg-black/30 border border-white/[0.03] p-4 rounded-2xl font-normal">
            {reason}
          </p>
          
          {/* Tombol Navigasi dengan Efek Interaktif Modern */}
          <div className="flex w-full gap-3 justify-center">
            <button 
              onClick={() => navigate(-1)} 
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all duration-300 cursor-pointer active:scale-95 select-none"
            >
              <ArrowLeft size={16} /> Kembali
            </button>
            <button 
              onClick={() => navigate('/')} 
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-600/15 cursor-pointer active:scale-95 select-none"
            >
              <Home size={16} /> Home
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;