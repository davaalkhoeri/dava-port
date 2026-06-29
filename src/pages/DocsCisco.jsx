import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Network, Activity, SplitSquareHorizontal, Lock, FileText, HelpCircle, BookOpen, Eye, X, Hourglass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const DocsCisco = () => {
  const navigate = useNavigate();
  const [activePreview, setActivePreview] = useState(0);
  const [isViewingPdf, setIsViewingPdf] = useState(false);
  const [pdfStatus, setPdfStatus] = useState({});

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

  useEffect(() => {
    const checkFile = async () => {
      const currentDoc = docs[activePreview];
      setPdfStatus(prev => ({ ...prev, [activePreview]: 'checking' }));
      
      try {
        const response = await fetch(currentDoc.pdfUrl, { method: 'GET' });
        const contentType = response.headers.get('content-type');
        
        if (response.ok && contentType && contentType.includes('application/pdf')) {
          setPdfStatus(prev => ({ ...prev, [activePreview]: 'ready' }));
        } else {
          setPdfStatus(prev => ({ ...prev, [activePreview]: 'missing' }));
        }
      } catch {
        setPdfStatus(prev => ({ ...prev, [activePreview]: 'missing' }));
      }
    };
    checkFile();
  }, [activePreview]);

  const handleBackToPortfolio = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const docs = [
    { 
      title: 'Konfigurasi VLAN Dasar', 
      desc: 'Pembuatan dan pemisahan Virtual LAN pada switch Cisco.',
      icon: <SplitSquareHorizontal size={24} className="text-blue-500" />,
      whatIsIt: 'VLAN (Virtual Local Area Network) adalah teknologi yang membagi satu broadcast domain fisik menjadi beberapa broadcast domain logis di dalam switch Cisco managed.',
      whyUseIt: 'Mengurangi beban trafik broadcast jaringan yang tidak perlu, serta meningkatkan aspek keamanan karena membatasi komunikasi antar divisi komputer secara default.',
      pdfUrl: '/vlan-dasar.pdf'
    },
    { 
      title: 'Inter-VLAN Routing', 
      desc: 'Menghubungkan VLAN yang berbeda subnet agar bisa berkomunikasi.',
      icon: <Network size={24} className="text-blue-500" />,
      whatIsIt: 'Inter-VLAN Routing adalah metode menjembatani komunikasi antar VLAN yang berbeda subnet menggunakan router Cisco (teknik Router-on-a-Stick melalui sub-interface) atau switch Layer 3 (SVI Configuration).',
      whyUseIt: 'Memungkinkan departemen yang terisolasi di VLAN berbeda untuk tetap bisa bertukar paket data secara terkontrol melalui kebijakan hak akses inter-vlan.',
      pdfUrl: '/inter-vlan.pdf'
    },
    { 
      title: 'Routing Dinamis (OSPF/EIGRP)', 
      desc: 'Implementasi protokol routing dinamis antar router skala enterprise.',
      icon: <Activity size={24} className="text-blue-500" />,
      whatIsIt: 'Routing Dinamis adalah konfigurasi di mana router Cisco bertukar informasi topologi peta jaringan secara otomatis menggunakan protokol OSPF (Open Shortest Path First) guna menentukan rute tercepat.',
      whyUseIt: 'Sangat vital untuk efisiensi jaringan berskala besar (enterprise), karena admin tidak perlu lagi mendaftarkan ratusan IP subnet manual satu per satu.',
      pdfUrl: '/cisco-ospf.pdf'
    },
    { 
      title: 'Konfigurasi Port Security', 
      desc: 'Pengamanan port akses pada switch dari ancaman jaringan lokal.',
      icon: <Lock size={24} className="text-blue-500" />,
      whatIsIt: 'Port Security adalah fitur keamanan layer 2 pada switch Cisco untuk membatasi alamat MAC Address perangkat client mana saja yang boleh terhubung ke port switch fisik tertentu.',
      whyUseIt: 'Mencegah penyusup liar mencolokkan kabel LAN sembarangan ke tembok sekolah, serta menangkal serangan siber internal seperti Mac Flooding atau ARP Spoofing.',
      pdfUrl: '/port-security.pdf'
    }
  ];

  const currentStatus = pdfStatus[activePreview] || 'checking';

  // ==========================================
  // RACIKAN UTAMA: SISTEMATIKA URUTAN (STAGGER)
  // ==========================================
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18, // Tempo rentetan kemunculan dari atas ke bawah
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Pure fade-in + micro lift naik 15px di posisi asli
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: {
        duration: 1.0, // Perpindahan smooth dan premium
        ease: [0.16, 1, 0.3, 1] // Kurva rem halus Ease Out Expo
      }
    }
  };

  return (
    /* LAYER INDUK: Mengaktifkan orkestrasi stagger komponen di bawahnya */
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-12 pb-24 px-6 md:px-12 max-w-6xl mx-auto"
    >
      {/* 1. TOMBOL KEMBALI */}
      <motion.button 
        variants={itemVariants}
        onClick={handleBackToPortfolio} 
        className="glass-hover flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 mb-10 cursor-pointer"
      >
        <ArrowLeft size={18} /> Kembali ke Portfolio
      </motion.button>

      {/* 2. HEADER SECTION */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 mb-6">
          <Network size={40} className="text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Dokumentasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Cisco Enterprise</span>
        </h1>
      </motion.div>

      {/* Grid Container Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* 3. KOLOM KIRI: Menu List Jurnal Cisco */}
        <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-4 text-left">
          {docs.map((doc, idx) => (
            <div 
              key={idx} 
              onClick={() => setActivePreview(idx)} 
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${activePreview === idx ? 'bg-blue-500/10 border-blue-500 shadow-lg shadow-blue-500/5' : 'bg-white/40 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/[0.05]'}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 shrink-0">{doc.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-1">{idx + 1}. {doc.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{doc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 4. KOLOM KANAN: Detail Preview Box */}
        <motion.div variants={itemVariants} className="lg:col-span-3 h-full">
          <GlassCard className="!p-8 border border-slate-200/50 dark:border-white/10 h-full flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/5">
                <BookOpen size={22} className="text-blue-500" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{docs[activePreview].title}</h2>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                  <HelpCircle size={16} className="text-blue-500" /> Apa itu Konfigurasi ini?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-100/50 dark:bg-black/20 p-4 rounded-xl border border-slate-200/20 dark:border-white/[0.02]">
                  {docs[activePreview].whatIsIt}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                  <FileText size={16} className="text-blue-500" /> Mengapa Implementasi Ini Penting?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-100/50 dark:bg-black/20 p-4 rounded-xl border border-slate-200/20 dark:border-white/[0.02]">
                  {docs[activePreview].whyUseIt}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Status Berkas</span>
                <span className={`text-xs font-semibold ${currentStatus === 'ready' ? 'text-amber-500' : 'text-amber-500 animate-pulse'}`}>
                  {currentStatus === 'checking' && '🔄 Mengecek file...'}
                  {currentStatus === 'ready' && '⚠️ Format LKPD Sekolah (Sedang Proses Migrasi ke Jurnal)'}
                  {currentStatus === 'missing' && '⏳ Berkas Cadangan Sedang Sinkronisasi'}
                </span>
              </div>

              {currentStatus === 'ready' ? (
                <button onClick={() => setIsViewingPdf(true)} className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 cursor-pointer">
                  <Eye size={16} /> Buka Full PDF
                </button>
              ) : (
                <div className="px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 rounded-xl text-xs font-bold flex items-center gap-2 select-none">
                  <Hourglass size={14} className="animate-spin" /> Sedang Transformasi Jurnal
                </div>
              )}
            </div>
          </GlassCard>
        </motion.div>

      </div>

      {/* PDF Modal Viewer Area */}
      <AnimatePresence>
        {isViewingPdf && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
          >
            <div className="w-full max-w-6xl flex items-center justify-between mb-4 text-white">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{docs[activePreview].title}</h3>
                <span className="text-xs text-slate-400 tracking-widest uppercase font-bold">Cisco Documentation Viewer</span>
              </div>
              <button onClick={() => setIsViewingPdf(false)} className="p-3 bg-white/10 hover:bg-red-500/20 text-white hover:text-red-400 rounded-full transition-all cursor-pointer">
                <X size={24} />
              </button>
            </div>
            <div className="w-full max-w-6xl flex-grow bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <iframe src={`${docs[activePreview].pdfUrl}#view=FitH&toolbar=1`} className="w-full h-full" title="Cisco Document Viewer" />
            </div>
            <p className="mt-4 text-slate-500 text-[10px] uppercase tracking-widest font-bold">Press ESC or Close button to return</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DocsCisco;