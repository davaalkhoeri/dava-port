import React from 'react';
import GlassCard from '../components/GlassCard';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-32 relative py-12">
      
      {/* Header (Tetap sama) */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          <span className="text-purple-500">#</span> Contact Me
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Tertarik untuk berkolaborasi? Kirimkan pesan atau sapa saya melalui media sosial.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* KOLOM KIRI: Form Pengisian (Tetap sama) */}
        <GlassCard className="!p-8 border border-slate-200/50 dark:border-white/10 h-full">
          <form className="flex flex-col gap-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <User size={18} />
              </div>
              <input type="text" placeholder="Nama Anda" className="w-full pl-12 pr-4 py-3.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 text-slate-800 dark:text-white text-sm" />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Mail size={18} />
              </div>
              <input type="email" placeholder="Email Anda" className="w-full pl-12 pr-4 py-3.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 text-slate-800 dark:text-white text-sm" />
            </div>
            <div className="relative">
              <div className="absolute top-4 left-4 pointer-events-none text-slate-400">
                <MessageSquare size={18} />
              </div>
              <textarea rows="5" placeholder="Pesan Anda..." className="w-full pl-12 pr-4 py-4 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 text-slate-800 dark:text-white text-sm resize-none"></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-purple-500/25 mt-2 hover:-translate-y-1">
              <Send size={18} /> Kirim Pesan
            </button>
          </form>
        </GlassCard>

        {/* KOLOM KANAN: Connect With Me - KINI DENGAN HOVER SUPER SMOOTH */}
        <div className="flex flex-col gap-6">
          <GlassCard className="!p-8 border border-slate-200/50 dark:border-white/10 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-8 bg-purple-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Connect With Me</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card LinkedIn */}
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-slate-200/50 dark:bg-[#1e2538] border border-slate-300 dark:border-white/5 hover:border-blue-500/50 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 ease-out">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Let's Connect</h4>
                  <p className="text-xs text-slate-500">on LinkedIn</p>
                </div>
              </a>

              {/* Card Instagram */}
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-slate-200/50 dark:bg-[#1e2538] border border-slate-300 dark:border-white/5 hover:border-pink-500/50 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 group">
                <div className="p-3 bg-pink-500/10 text-pink-500 rounded-lg group-hover:bg-gradient-to-tr group-hover:from-yellow-500 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-500 ease-out">
                  <FaInstagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Instagram</h4>
                  <p className="text-xs text-slate-500">@davaalkhoeri</p>
                </div>
              </a>

              {/* Card Github */}
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-slate-200/50 dark:bg-[#1e2538] border border-slate-300 dark:border-white/5 hover:border-slate-500/50 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/10 group">
                <div className="p-3 bg-slate-500/10 text-slate-700 dark:text-slate-300 rounded-lg group-hover:bg-slate-700 dark:group-hover:bg-slate-300 group-hover:text-white dark:group-hover:text-slate-900 transition-all duration-500 ease-out">
                  <FaGithub size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Github</h4>
                  <p className="text-xs text-slate-500">@davaalkhoeri</p>
                </div>
              </a>

              {/* Card YouTube */}
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-slate-200/50 dark:bg-[#1e2538] border border-slate-300 dark:border-white/5 hover:border-red-500/50 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 group">
                <div className="p-3 bg-red-500/10 text-red-500 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-500 ease-out">
                  <FaYoutube size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">YouTube</h4>
                  <p className="text-xs text-slate-500">Tutorial & Lab</p>
                </div>
              </a>

            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};

export default Contact;