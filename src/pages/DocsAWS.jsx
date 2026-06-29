import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Cloud, Server, Database, HardDrive, FileText, HelpCircle, BookOpen, Eye, X, AlertTriangle, Lock, Hourglass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const DocsAWS = () => {
  const navigate = useNavigate();
  const [activePreview, setActivePreview] = useState(0);
  const [isViewingPdf, setIsViewingPdf] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsViewingPdf(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 🚀 DATA ARRAY DOKUMEN AWS: Silakan atur properti format & isReady sesuka hati lu bro
  const docs = [
    { 
      title: 'Membuat Cyberpanel di EC2', 
      desc: 'Langkah instalasi dan konfigurasi control panel untuk web server.',
      icon: <HardDrive size={24} className="text-orange-500" />,
      format: 'guide', // 📜 Format LKPD / Laporan Praktikum Sekolah
      isReady: true,  // ✅ File udah lu drop (Siap dibaca)
      whatIsIt: 'Cyberpanel adalah web hosting control panel modern yang berjalan di atas OpenLiteSpeed. Implementasi pada AWS EC2 (Elastic Compute Cloud) memungkinkan kita mengelola domain, database, dan file website di dalam virtual server cloud secara mandiri.',
      whyUseIt: 'Memberikan efisiensi tinggi dalam manajemen resource server dibanding control panel konvensional, serta memanfaatkan stabilitas resource up-time yang dijamin oleh infrastruktur cloud AWS.',
      pdfUrl: '/infrastructure/cloud computing/cyberpanel-ec2.pdf'
    },
    { 
      title: 'Elastic Load Balancinng and Auto Scalling Group', 
      desc: 'Membagi trafik ke beberapa server EC2 agar performa tetap stabil.',
      icon: <Database size={24} className="text-orange-500" />,
      format: 'guide', // 📘 Format Panduan / Langkah-langkah Matang
      isReady: true,   // ✅ File udah lu drop (Siap dibaca)
      whatIsIt: 'AWS Elastic Load Balancing (ELB) adalah layanan yang otomatis mendistribusikan trafik masuk dari pengguna ke beberapa virtual machine EC2 di belakangnya secara merata.',
      whyUseIt: 'Mencegah terjadinya server crash akibat overload trafik pada satu instans, serta menjamin ketersediaan layanan (high availability) jika salah satu server mengalami gangguan.',
      pdfUrl: '/infrastructure/cloud computing/ELB and ASG Basic.pdf'
    },
    { 
      title: 'Deployment S3 Bucket', 
      desc: 'Penyimpanan dan pengelolaan objek statis untuk website.',
      icon: <Cloud size={24} className="text-orange-500" />,
      format: 'lkpd', // 📜 Format LKPD / Laporan Praktikum Sekolah
      isReady: false, // ⏳ BELUM LU DROP (Nantian), Otomatis Placeholder Coming Soon!
      whatIsIt: 'Amazon S3 (Simple Storage Service) adalah penyimpanan objek cloud yang digunakan untuk menaruh file statis seperti gambar, video, CSS, dan JavaScript secara terpisah dari server utama.',
      whyUseIt: 'Mengurangi beban storage dan pembacaan I/O pada server EC2 utama, sehingga loading asset website menjadi jauh lebih cepat dan terisolasi dengan aman.',
      pdfUrl: '/s3-bucket.pdf'
    }
  ];

  const currentDoc = docs[activePreview];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-12 pb-24 px-6 md:px-12 max-w-6xl mx-auto"
    >
      {/* TOMBOL NAVIGASI GANDA */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
        <button 
          onClick={() => navigate(-1)} 
          className="glass-hover flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer bg-white/20 dark:bg-white/[0.01] border border-slate-200/50 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
        >
          <ArrowLeft size={16} /> Sebelumnya
        </button>
        <button 
          onClick={() => { navigate('/'); setTimeout(() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
          className="glass-hover flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer bg-white/20 dark:bg-white/[0.01] border border-slate-200/50 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
        >
          <Home size={16} /> Portfolio
        </button>
      </motion.div>

      {/* HEADER JUDUL */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 mb-6">
          <Cloud size={40} className="text-orange-600 dark:text-orange-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Dokumentasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">AWS Cloud</span>
        </h1>
      </motion.div>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* KOLOM KIRI: Menu List Jurnal AWS */}
        <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-4 text-left">
          {docs.map((doc, idx) => (
            <div 
              key={idx} 
              onClick={() => setActivePreview(idx)} 
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-2 ${
                activePreview === idx 
                  ? 'bg-orange-500/10 border-orange-500 shadow-lg shadow-orange-500/5' 
                  : 'bg-white/40 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/[0.05]'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 shrink-0">{doc.icon}</div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-800 dark:text-white text-sm md:text-base">{idx + 1}. {doc.title}</h3>
                    {/* Badge Kecil Status Kesediaan di Sidebar */}
                    <span className={`text-[9px] px-2 py-0.5 rounded-md font-mono font-bold shrink-0 ${
                      !doc.isReady ? 'bg-slate-500/10 text-slate-400' : doc.format === 'lkpd' ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'
                    }`}>
                      {!doc.isReady ? 'COMING SOON' : doc.format === 'lkpd' ? 'LKPD' : 'GUIDE'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{doc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* KOLOM KANAN: Detail Preview Box */}
        <motion.div variants={itemVariants} className="lg:col-span-3 h-full">
          <GlassCard className="!p-8 border border-slate-200/50 dark:border-white/10 h-full flex flex-col justify-between text-left">
            <div>
              {/* Header Judul Sesi */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <BookOpen size={22} className="text-orange-500" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{currentDoc.title}</h2>
                </div>
              </div>

              {/* 🚀 BANNER BANNER DINAMIS TEMA KACA */}
              {currentDoc.isReady ? (
                currentDoc.format === 'lkpd' ? (
                  <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex gap-3 items-start backdrop-blur-md">
                    <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <h5 className="text-xs font-bold text-amber-500 uppercase tracking-wide">Format: Lembar Kerja Praktikum (LKPD)</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        Berkas ini berstatus <span className="font-semibold text-amber-600 dark:text-amber-400">Laporan Praktikum / Tugas Lab Mandiri</span> sekolah. Berisi rangkuman langkah lab apa adanya tanpa perombakan format karya tulis.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex gap-3 items-start backdrop-blur-md">
                    <FileText size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-emerald-500 uppercase tracking-wide">Format: Panduan Terstruktur (Guide)</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        Berkas ini berstatus <span className="font-semibold text-emerald-600 dark:text-emerald-400">Panduan Teknis / Karya Tulis Matang</span>. Telah disusun ulang secara rapi mencakup arsitektur cloud, analisis deployment, dan standardisasi lab.
                      </p>
                    </div>
                  </div>
                )
              ) : (
                /* BANNER WARNA SLATE UNTUK PRE-ORDER FILE (NANTIAN) */
                <div className="mb-6 p-4 bg-slate-500/10 border border-slate-500/20 rounded-2xl flex gap-3 items-start backdrop-blur-md">
                  <Lock size={18} className="text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Status: Berkas Belum Diunggah</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Modul infrastruktur cloud untuk sesi ini sedang dalam tahap antrean migrasi asset. Berkas PDF dokumentasi pengerjaan akan segera disematkan secara otomatis.
                    </p>
                  </div>
                </div>
              )}

              {/* Konten Utama Keterangan Sesi */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                  <HelpCircle size={16} className="text-orange-500" /> Apa itu Konfigurasi ini?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-100/50 dark:bg-black/20 p-4 rounded-xl border border-slate-200/20 dark:border-white/[0.02]">
                  {currentDoc.whatIsIt}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                  <FileText size={16} className="text-orange-500" /> Mengapa Implementasi Ini Penting?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-100/50 dark:bg-black/20 p-4 rounded-xl border border-slate-200/20 dark:border-white/[0.02]">
                  {currentDoc.whyUseIt}
                </p>
              </div>
            </div>

            {/* Footer Bagian Tombol Aksi */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Verifikasi Tipe Berkas</span>
                <span className={`text-xs font-bold ${!currentDoc.isReady ? 'text-slate-400' : currentDoc.format === 'lkpd' ? 'text-amber-500' : 'text-emerald-500'}`}>
                  {!currentDoc.isReady ? '⏳ Berkas Belum Tersedia' : currentDoc.format === 'lkpd' ? '📜 Berkas Tugas Sekolah (LKPD)' : '📘 Modul Panduan Khusus'}
                </span>
              </div>

              {/* 🚀 AKSI TOMBOL: Mengunci/Membuka akses PDF secara langsung */}
              {currentDoc.isReady ? (
                <button 
                  onClick={() => setIsViewingPdf(true)} 
                  className={`px-6 py-2.5 text-white rounded-xl text-xs font-bold transition-all shadow-lg flex items-center gap-2 cursor-pointer ${
                    currentDoc.format === 'lkpd' ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/20'
                  }`}
                >
                  <Eye size={16} /> Buka Berkas PDF
                </button>
              ) : (
                <div className="px-5 py-2.5 bg-slate-800 border border-white/5 text-slate-400 rounded-xl text-xs font-bold flex items-center gap-2 select-none">
                  <Hourglass size={14} className="animate-spin text-slate-500" /> Coming Soon
                </div>
              )}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* PDF Modal Viewer Area */}
      <AnimatePresence>
        {isViewingPdf && currentDoc.isReady && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
          >
            <div className="w-full max-w-6xl flex items-center justify-between mb-4 text-white">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{currentDoc.title}</h3>
                <span className="text-xs text-slate-400 tracking-widest uppercase font-bold">
                  Format Berkas: {currentDoc.format === 'lkpd' ? 'LKPD / Laporan Praktikum' : 'Panduan Teknis'}
                </span>
              </div>
              <button onClick={() => setIsViewingPdf(false)} className="p-3 bg-white/10 hover:bg-red-500/20 text-white hover:text-red-400 rounded-full transition-all cursor-pointer">
                <X size={24} />
              </button>
            </div>
            <div className="w-full max-w-6xl flex-grow bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <iframe src={`${currentDoc.pdfUrl}#view=FitH&toolbar=1`} className="w-full h-full" title="AWS Document Viewer" />
            </div>
            <p className="mt-4 text-slate-500 text-[10px] uppercase tracking-widest font-bold">Press ESC or Close button to return</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DocsAWS;