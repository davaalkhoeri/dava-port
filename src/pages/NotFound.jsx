import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import LottiePlayer from 'lottie-react';
import error404 from '../assets/404.json'; // Panggil aset 404 lu di sini

const Lottie = LottiePlayer.default || LottiePlayer;

const NotFound = () => {
  // Efek Hover 3D buat animasi 404
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);
  const scale = useMotionValue(1);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
    scale.set(1.05);
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full top-1/4 left-1/4 z-0"></div>
      
      <div className="z-10 flex flex-col items-center text-center max-w-md">
        
        {/* Wadah Animasi 404 dengan Efek Hover */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0); scale.set(1); }}
          style={{ rotateX, rotateY, scale }}
          className="w-full max-w-sm transition-all duration-150 ease-out cursor-pointer mb-6"
        >
          <Lottie animationData={error404} loop={true} autoplay={true} />
        </motion.div>

        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
          Waduh, Kesasar Bro?
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">
          Halaman yang lu cari gak ada atau mungkin udah dipindahin ke direktori server lain.
        </p>

        {/* Tombol Balik ke Home */}
        <a
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
        >
          Balik ke Dashboard
        </a>
      </div>
    </div>
  );
};

export default NotFound;