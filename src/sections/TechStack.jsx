import React from 'react';
import GlassCard from '../components/GlassCard';
import { Cloud, Server, Router, Box, TerminalSquare, LineChart } from 'lucide-react';
import { motion } from 'framer-motion'; 

const TechStack = () => {
  // Koordinat x dan y tetep dipertahanin sesuai posisi grid biar mekar dari bawah
  const technologies = [
    { 
      name: 'AWS', 
      icon: <Cloud size={40} className="text-orange-400" />, 
      desc: 'Cloud Infrastructure',
      direction: { x: -120, y: 120 } 
    },
    { 
      name: 'Debian/Ubuntu', 
      icon: <Server size={40} className="text-red-500" />, 
      desc: 'Server Administration',
      direction: { x: -60, y: 120 } 
    },
    { 
      name: 'MikroTik', 
      icon: <Router size={40} className="text-teal-400" />, 
      desc: 'Network Routing',
      direction: { x: -20, y: 120 } 
    },
    { 
      name: 'Docker', 
      icon: <Box size={40} className="text-blue-500" />, 
      desc: 'Containerization',
      direction: { x: 20, y: 120 } 
    },
    { 
      name: 'Ansible', 
      icon: <TerminalSquare size={40} className="text-slate-300" />, 
      desc: 'Automation',
      direction: { x: 60, y: 120 } 
    },
    { 
      name: 'Grafana', 
      icon: <LineChart size={40} className="text-orange-500" />, 
      desc: 'Monitoring',
      direction: { x: 120, y: 120 } 
    },
  ];

  return (
    <section id="tech-stack" className="scroll-mt-32">
      <div className="text-center mb-10">
        
        {/* Judul Utama: Mengikuti gaya minimalis # Portfolio & Docs */}
        <h2 className="text-3xl font-bold mb-2 text-slate-800 dark:text-white transition-colors duration-300">
          <span className="text-blue-500">#</span> Tools & Technologies
        </h2>

        {/* Deskripsi Teknologi: Ditambahkan class dinamis text-slate-600 agar terbaca tajam saat mode terang! */}
        <p className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 transition-colors duration-300">
          Teknologi, platform, dan tools yang biasa saya gunakan
        </p>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          
          /* LAYER OUTSIDE: Animasi masuk pas di-scroll (Udah Di-smooth & Dipelanin) */
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: tech.direction.x, y: tech.direction.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-30px" }} // Triggers pas card mulai lewatin bawah layar
            transition={{ 
              duration: 1.3, // 1. DIPELANIN: Dari 0.8s kita ubah ke 1.3s biar luncurannya kalem
              delay: index * 0.12, // 2. STAGGERED: Kita renggangin jeda antar-kapsul biar efek mekarnya rapi
              ease: [0.16, 1, 0.3, 1] // 3. LEBIH SMOOTH: Pake kurva ultra-smooth (Custom EaseOutExpo) biar remnya halus banget pas mau sampe posisi
            }}
            className="h-full w-full"
          >
            {/* Kapsul Kaca */}
            <GlassCard className="!p-0 overflow-hidden h-full w-full">
              
              {/* LAYER INSIDE: Efek Napas & Hover di dalam Kapsul */}
              <motion.div 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ 
                  scale: 1.12, 
                  rotate: [0, 4, -4, 0],
                  transition: { type: "spring", stiffness: 300 } 
                }}
                className="flex flex-col items-center justify-center text-center !p-6 glass-hover cursor-pointer group h-full w-full"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2">{tech.desc}</p>
              </motion.div>

            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;