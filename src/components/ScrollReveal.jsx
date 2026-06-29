import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, direction = 'up', duration = 0.8, delay = 0 }) => {
  
  // Mapping koordinat awal datangnya elemen
  const directions = {
    up:          { x: 0, y: 50 },
    down:        { x: 0, y: -50 },
    left:        { x: 50, y: 0 },
    right:       { x: -50, y: 0 },
    topLeft:     { x: -120, y: -120 }, // Datang dari Kiri Atas meluncur ke tengah
    topRight:    { x: 120, y: -120 },  // Datang dari Kanan Atas meluncur ke tengah
    bottomLeft:  { x: -120, y: 120 },  // Datang dari Kiri Bawah meluncur ke tengah
    bottomRight: { x: 120, y: 120 },   // Datang dari Kanan Bawah meluncur ke tengah
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: directions[direction]?.x || 0, 
        y: directions[direction]?.y || 0 
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }} // Triggers pas card mulai nongol dikit di layar
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.25, 1, 0.5, 1] // Transisi out-quint yang responsif dan smooth buat grid items
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;