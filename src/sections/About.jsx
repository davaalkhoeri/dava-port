import React from 'react';
import GlassCard from '../components/GlassCard';
import { User, GraduationCap, Cloud, Terminal, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  // ==========================================
  // RACIKAN TEMPO & DURASI SISTEMATIS (DIPELANIN)
  // ==========================================
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18, // Jeda antar baris/kartu mengalir rapi dari atas ke bawah
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Mulai dari transparan & naik dikit aja (15px) ke posisi aslinya
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: {
        duration: 1.0, // Luncuran smooth dan anggun
        ease: [0.16, 1, 0.3, 1] // Kurva pengereman ultra-smooth (Ease Out Expo)
      }
    }
  };

  return (
    <section id="about" className="scroll-mt-32 relative py-12">
      {/* Wrapper utama motion untuk memicu trigger scroll saat komponen masuk layar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Trigger pas section udah masuk 100px dari bawah layar
        className="w-full"
      >
        
        {/* 1. JUDUL SECTION */}
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12 text-center md:text-left text-slate-800 dark:text-white">
          <span className="text-purple-500">#</span> About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* KOLOM KIRI (2 Kolom): Deskripsi & Skill */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 2. CARD DESKRIPSI UTAMA (Fokus DevOps + PKL Ready) */}
            <motion.div variants={itemVariants}>
              <GlassCard className="glass-hover !p-8 border border-slate-200/50 dark:border-white/10">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg mb-4">
                  Saya adalah seorang siswa kompetensi keahlian <span className="text-purple-600 dark:text-purple-400 font-semibold">Teknik Jaringan Komputer dan Telekomunikasi (TJKT)</span> di <span className="text-slate-900 dark:text-white font-semibold">SMK Wikrama Bogor</span> (Group TJKT XI-3). 
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Berpengalaman dalam mengoperasikan 
                  <span className="text-purple-600 dark:text-purple-400 font-semibold"> Linux Server Administration, Deployment Website, Network Administration serta Basic Network Troubleshooting</span>. 
                  Saat ini berfokus mengembangkan keterampilan di bidang
                  <span className="text-slate-900 dark:text-white font-semibold"> DevOps, Cloud Computing, dan Management IT Infrastructure</span> 
                </p>
              </GlassCard>
            </motion.div>

            {/* Sub-grid Skill Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* 3. SKILL CARD: Cloud Computing */}
              <motion.div variants={itemVariants} className="h-full">
                <GlassCard className="glass-hover flex items-start gap-4 !p-5 border border-slate-200/50 dark:border-white/10 h-full">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                    <Cloud size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">Cloud Computing</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Deployment infrastruktur website berbasis AWS Cloud dengan arsitektur yang skalabel.</p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 4. SKILL CARD: Linux SysAdmin */}
              <motion.div variants={itemVariants} className="h-full">
                <GlassCard className="glass-hover flex items-start gap-4 !p-5 border border-slate-200/50 dark:border-white/10 h-full">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 shrink-0">
                    <Terminal size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">Linux SysAdmin</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Manajemen server Linux dan virtualisasi lingkungan server dengan performa tinggi.</p>
                  </div>
                </GlassCard>
              </motion.div>

            </div>
          </div>

          {/* KOLOM KANAN (1 Kolom): Education & Quick Highlights */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* 5. CARD QUICK HIGHLIGHTS */}
            <motion.div variants={itemVariants}>
              <GlassCard className="glass-hover !p-6 border border-slate-200/50 dark:border-white/10">
                <h3 className="text-md font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
                  <Zap size={18} className="text-yellow-500" /> Quick Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Award size={16} className="text-yellow-500" />
                    <span>AWS Cloud Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Award size={16} className="text-yellow-500" />
                    <span>Linux Server Administration</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* 6. CARD EDUCATION INFO */}
            <motion.div variants={itemVariants}>
              <GlassCard className="glass-hover !p-6 relative overflow-hidden border border-slate-200/50 dark:border-white/10">
                <div className="absolute -right-10 -bottom-10 text-purple-500/5 pointer-events-none">
                  <User size={160} />
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-white/5">
                  <GraduationCap size={20} className="text-purple-600 dark:text-purple-400" /> Education Info
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Institution</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">SMK Wikrama Bogor</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Major & Class</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">TJKT — XI-3</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Bogor, Indonesia</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;