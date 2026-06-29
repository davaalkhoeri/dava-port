import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'; // 🚀 Tambah import useSpring
import LottiePlayer from 'lottie-react'; 
import illustration1 from '../assets/illustration1.json'; 
import { Sparkles, Download, Mail } from 'lucide-react'; 
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const Lottie = LottiePlayer.default || LottiePlayer;

const Hero = () => {
  // Logika Efek Ngetik (Running Text)
  const words = ["Aspiring DevOps Engineer", "Linux System Administrator", "Cloud Infrastructure Enthusiast", "TJKT Student"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(100);
        if (text === currentWord) {
          setTypingSpeed(2000); 
          setIsDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50);
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length); 
        }
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, typingSpeed]);

  // ========================================================
  // FIX HOVER 3D: Pake Sistem Pegas Biar Efek Membesar Kelihatan Jelas
  // ========================================================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scaleValue = useMotionValue(1);

  // Kita bungkus pake useSpring biar akselerasi membesar & rotasi 3D-nya gak kaku
  const mouseXSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const scale = useSpring(scaleValue, { stiffness: 180, damping: 15 }); // Pegas kenyal buat efek membesar

  // Transformasi rotasi mengambil data dari sistem pegas (spring)
  const rotateX = useTransform(mouseYSpring, [-300, 300], [15, -15]); 
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-15, 15]); 

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPos = event.clientX - rect.left - width / 2;
    const yPos = event.clientY - rect.top - height / 2;
    mouseX.set(xPos);
    mouseY.set(yPos);
    scaleValue.set(1.16); // 🚀 KITA NAIKKAN KE 1.16: Efek membesar langsung kelihatan tegas & mencolok!
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    scaleValue.set(1); // Balik ke ukuran semula pas kursor keluar
  }

  // SYSTEMATICS ENTRY TRANSITION (STAGGER)
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* KOLOM KIRI: Teks Utama & Action */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 w-fit text-purple-400 font-medium text-sm shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Sparkles size={16} />
            <span>Ready to Innovate</span>
          </motion.div>

          {/* Heading Nama */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-2">
              Hi! I'm 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                Muhammad Dava Alkhoeri
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-mono mt-2 h-8">
              {text}<span className="animate-pulse font-bold text-purple-500">|</span>
            </h2>
          </motion.div>

          {/* Deskripsi */}
          <motion.p variants={itemVariants} className="text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Membangun keterampilan di bidang Linux, Networking, dan Cloud Computing serta mengeksplorasi praktik DevOps.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-2">
            {['Linux', 'TJKT', 'DevOps', 'Networking'].map((tech) => (
              <span key={tech} className="px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
            <a href="/cv/Internship CV.pdf" download className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1">
              Download CV <Download size={16} />
            </a>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-transparent border border-slate-300 dark:border-white/20 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white rounded-xl font-bold flex items-center gap-2 transition-all duration-300 hover:-translate-y-1">
              Contact <Mail size={16} />
            </button>
          </motion.div>

          {/* Icons Sosmed */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-6">
            <a href="https://github.com/davaalkhoeri" className="p-3 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
              <FaGithub size={20} />
            </a>
            <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdava-alkhoeri-b72222371%3Futm_source%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dmember_ios%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnzCc3Qcoe37I5RtM_QfNVmYN2oJNz83Bt0o5kSma3MnwPQfvcXdjOg3garqg_aem_ybqJ0qMRRzt1-YKpJPcw-w&e=AUAe-SpZClmfNsqHOEMgDsENkHaFSW1OVoGIKx0A733JTqr7WDlU01GZQ_Ua28_Yn_klQASsAQBG_DMslixo_NtJpW8HkalDMZvHpfc69-C1qg5PaHsO--28q9QQCy87UOv-5EGchRZuUzmlAWBTe5s" className="p-3 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/davaallk/" className="p-3 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 hover:text-pink-500 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
              <FaInstagram size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN: Ilustrasi dari file image_3305df.png */}
        <div className="relative flex justify-center lg:justify-end items-center" style={{ perspective: 1000 }}>
          {/* Latar Glow Ungu */}
          <div className="absolute w-[80%] h-[80%] bg-purple-500/20 blur-[100px] rounded-full z-[-1]"></div>
          
          {/* LAYER 1: Mengatur Durasi Awal Masuk Saja */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md md:max-w-lg"
          >
            {/* LAYER 2: FIX MOUSE MOVE & SPRING SCALE (Class transition-all dilepas biar gak tabrakan) */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, scale }}
              className="w-full cursor-pointer" // 🚀 AMAN: transition-all bawaan Tailwind dibuang total dari sini
            >
              {/* LAYER 3: Efek Floating Mengambang Halus */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full"
              >
                <Lottie animationData={illustration1} loop={true} autoplay={true} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;