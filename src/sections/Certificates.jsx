import React, { useState, useEffect, useRef } from 'react';
import GlassCard from '../components/GlassCard';
import { Award, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Certificates = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Ref untuk mengontrol kelancaran pergerakan scrollwheel horizontal
  const scrollRef = useRef(null);
  const targetScrollLeft = useRef(0);
  const currentScrollLeft = useRef(0);
  const animationFrameRef = useRef(null);

  // Data sertifikat diupdate jadi 5 item
  const certs = [
    {
      id: 1,
      title: 'Red Hat Linux Fundamentals 9.1',
      issuer: 'Red Hat',
      img: '/certificates/CourseAttendance20251230-32-k7gd51_page-0001.jpg', 
      tags: ['Cloud', 'Linux',]
    },
    {
      id: 2,
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      img: '/certificates/Introduction_to_Cybersecurity_certificate_muhammaddavaalkhoeri-smkwikrama-sch-id_63a9893a-6852-49a5-b7d7-d0cd2b4dc3cc_page-0001.jpg',
      tags: ['Cyber', 'Networking',]
    },
    {
      id: 3,
      title: 'Classical Cryptography Beginner',
      issuer: 'Cyber Academy Indonesia',
      img: '/certificates/Certificate-of-Completion-Classical-Cryptography-for-Beginner_page-0001.jpg',
      tags: ['Cyber',]
    },
        {
      id: 4,
      title: 'Failover and Load Balance',
      issuer: 'ID-Networkers',
      img: '/certificates/WhatsApp Image 2026-06-21 at 6.27.43 PM.jpeg', // Tinggal ganti nama file gambar lu nanti
      tags: ['Networking',]
    },
    {
      id: 5,
      title: 'Linux Fundamental',
      issuer: 'Aguna Course',
      img: '/certificates/Linux Fundamental_page-0001.jpg', // Tinggal ganti nama file gambar lu nanti
      tags: ['Linux',]
    },
    {
      id: 6,
      title: 'Network Fundamental',
      issuer: 'Aguna Course',
      img: '/certificates/Network Fundamental_page-0001.jpg', // Tinggal ganti nama file gambar lu nanti
      tags: ['Networking']
    },
        {
      id: 7,
      title: 'Virtual Machine Fundamental',
      issuer: 'Aguna Course',
      img: '/certificates/Virtual Machine Fundamental Aguna-Course_page-0001.jpg', // Tinggal ganti nama file gambar lu nanti
      tags: ['Virtual Machine']
    },
  ];

  const allTags = ['All', ...new Set(certs.flatMap(cert => cert.tags))];

  const filteredCerts = selectedTag && selectedTag !== 'All'
    ? certs.filter(cert => cert.tags.includes(selectedTag))
    : certs;

  // ========================================================
  // ENGINE: SMOOTH SCROLL WHEEL TANPA DIKUNCI (NO SNAPPING)
  // ========================================================
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Sinkronisasi posisi awal koordinat dengan container asli
    targetScrollLeft.current = el.scrollLeft;
    currentScrollLeft.current = el.scrollLeft;

    const smoothScrollLoop = () => {
      const diff = targetScrollLeft.current - currentScrollLeft.current;
      
      // Interpolasi linear biasa (Lerp) untuk efek inersia halus mengalir
      if (Math.abs(diff) > 0.2) {
        currentScrollLeft.current += diff * 0.12;
        if (el) el.scrollLeft = currentScrollLeft.current;
      } else {
        currentScrollLeft.current = targetScrollLeft.current;
        if (el) el.scrollLeft = targetScrollLeft.current;
      }

      animationFrameRef.current = requestAnimationFrame(smoothScrollLoop);
    };

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;

      e.preventDefault(); // Kunci scroll vertikal halaman utama pas kursor di area sertifikat

      const maxScroll = el.scrollWidth - el.clientWidth;
      
      // Menghitung target murni, bebas berhenti di mana saja tanpa dibulatkan/dikunci sistem
      targetScrollLeft.current = Math.max(
        0, 
        Math.min(maxScroll, targetScrollLeft.current + e.deltaY)
      );
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    animationFrameRef.current = requestAnimationFrame(smoothScrollLoop);

    return () => {
      el.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [filteredCerts]);

  return (
    <section id="certificates" className="scroll-mt-32 relative py-12 text-left">
      
      {/* HEADER UTAMA */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          <span className="text-teal-500">#</span> Certificates & Achievements
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Klik pada setiap tag untuk memfilter kompetensi keahlian.
        </p>
      </div>

      {/* MENU FILTER (CENTERED & CAPSULE LAYOUT) */}
      <div className="w-full flex justify-center mb-12">
        <div className="flex items-center gap-2 bg-slate-200/60 dark:bg-white/5 p-1.5 rounded-full border border-slate-300/30 dark:border-white/10 max-w-full overflow-x-auto no-scrollbar shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 shrink-0 pl-3 border-r border-slate-300 dark:border-white/10 pr-3 py-1">
            <Filter size={13} />
            <span className="text-[10px] font-extrabold uppercase tracking-wider">Tags</span>
          </div>
          
          <div className="flex gap-1.5 whitespace-nowrap px-1">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === 'All' ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  (tag === 'All' && !selectedTag) || selectedTag === tag
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20 scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-white/10 rounded-full'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* HORIZONTAL TRACK KARTU SERTIFIKAT (Fleksibel & Bebas Berhenti) */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 px-1 scrollbar-none select-none w-full"
        style={{ scrollBehavior: 'auto' }}
      >
        <AnimatePresence mode="wait">
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.3 }}
              className="w-[360px] sm:w-[400px] shrink-0"
            >
              <GlassCard className="!p-5 flex flex-col h-full glass-hover border border-slate-200/50 dark:border-white/10 group justify-between">
                <div>
                  {/* Image Frame */}
                  <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden mb-5 border border-slate-300/50 dark:border-white/10 relative">
                    <img 
                      src={cert.img} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  {/* Judul Sertifikat */}
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white leading-tight mb-2 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  {/* Instansi Penerbit */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                    <Award size={16} className="text-teal-500" /> {cert.issuer}
                  </p>
                </div>

                {/* List Tags dalam Card */}
                <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap gap-1.5">
                  {cert.tags.map(tag => (
                    <span 
                      key={tag}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTag(tag);
                      }}
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border cursor-pointer transition-all ${
                        selectedTag === tag
                          ? 'bg-teal-500 text-white border-teal-500'
                          : 'bg-teal-500/5 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 border-teal-500/20 hover:bg-teal-500/20'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;