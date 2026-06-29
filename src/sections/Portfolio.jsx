import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { Layers, Cloud, Router, Server, Network } from 'lucide-react';

const Portfolio = () => {
  const navigate = useNavigate();

  const docs = [
    { 
      title: 'Featured Showcase', 
      icon: <Layers size={32} />, 
      color: 'text-yellow-400', 
      colSpan: 'md:col-span-1',
      path: '/project/hybrid-cloud' 
    },
    { 
      title: 'Infrastructure', 
      icon: <Cloud size={32} />, 
      color: 'text-purple-400', 
      colSpan: 'md:col-span-1',
      path: '/docs/infrastructure' // Diarahkan ke halaman perantara Infrastructure
    },
    { 
      title: 'Linux Server Administration', 
      icon: <Server size={32} />, 
      color: 'text-red-500', 
      colSpan: 'md:col-span-1',
      path: '/docs/debian' 
    },
    { 
      title: 'Network Administration', 
      icon: <Network size={32} />, 
      color: 'text-teal-400', 
      colSpan: 'md:col-span-1',
      path: '/docs/network' // Diarahkan ke halaman perantara Network
    },
  ];

  return (
    <section id="portfolio" className="scroll-mt-32 relative">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-800 dark:text-white">
        <span className="text-blue-500">#</span> Portfolio & Docs
      </h2>
      
      {/* Grid Layout 2x2 asli bawaan lu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {docs.map((doc, index) => (
          <div 
            key={doc.title} 
            className={`${doc.colSpan} cursor-pointer`} 
            onClick={() => {
              navigate(doc.path);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Animasi GlassCard delay={index * 0.1} 100% aman */}
            <GlassCard delay={index * 0.1} className="h-full glass-hover flex flex-col justify-center items-center text-center !p-8 border border-slate-200/50 dark:border-white/10">
              <div className={`mb-4 ${doc.color}`}>{doc.icon}</div>
              <h3 className="font-semibold text-lg text-slate-800 dark:text-white">{doc.title}</h3>
              <span className="text-sm text-blue-500 dark:text-blue-400 mt-2">
                {doc.title === 'Featured Showcase' ? 'Lihat Detail Proyek →' : 'Lihat Detail →'}
              </span>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;