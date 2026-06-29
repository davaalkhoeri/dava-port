import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero'; 
import About from './sections/About';
import TechStack from './sections/TechStack';
import Portfolio from './sections/Portfolio';
import Certificates from './sections/Certificates'; 
import Contact from './sections/Contact';
import AnimatedBackground from './components/AnimatedBackground'; 
import ComingSoon from './pages/ComingSoon';

// 1. IMPORT: Komponen ScrollReveal & Halaman NotFound Lu
import ScrollReveal from './components/ScrollReveal'; 
import NotFound from './pages/NotFound'; 

// Import Halaman Detail Internal Lu
import Project from './pages/Project';
import DocsMikrotik from './pages/DocsMikrotik';
import DocsAWS from './pages/DocsAWS';
import DocsDebian from './pages/DocsDebian';
import DocsCisco from './pages/DocsCisco';
import Footer from './components/Footer';
import DocsInfrastructure from './pages/DocsInfrastructure';
import DocsNetwork from './pages/DocsNetwork';

const App = () => {
  return (
    <>
      <Routes>
        {/* Rute Utama Portofolio */}
        <Route path="/" element={
          <>
            {/* Latar belakang dinamis ditempatkan di sini */}
            <AnimatedBackground /> 
            
            <Navbar />
              <main className="container mx-auto px-6 py-24 flex flex-col gap-32 relative z-10">
                <Hero />
                <About />
                <TechStack />
                <Portfolio />
                <Certificates /> 
                <Contact />
                <Footer />
              </main>
          </>
        } />

        {/* Rute Halaman Kupas Tuntas Jurnal Proyek */}
        <Route path="/project/hybrid-cloud" element={<Project />} />
        <Route path="/docs/mikrotik" element={<DocsMikrotik />} />
        <Route path="/docs/aws" element={<DocsAWS />} />
        <Route path="/docs/debian" element={<DocsDebian />} />
        <Route path="/docs/cisco" element={<DocsCisco />} />
        <Route path='/docs/infrastructure' element={<DocsInfrastructure />} />
        <Route path='/docs/network' element={<DocsNetwork />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
        

        {/* 2. FIX 404 ROUTE: Rute fallback kalau URL ngasal/error, otomatis ngebuka NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;