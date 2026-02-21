import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Phone, Linkedin, Github } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#0B1120]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#111827] to-[#0B1120] opacity-80 z-0"></div>
      
      {/* Abstract Data Flow Graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#6366F1]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <ParticleBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-center py-1 px-3 rounded-full  text-[#ffffff] font-medium text-xl mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#22C55E]">
            <h1 class="gokul">Hello, I'M</h1>
          </span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/30 text-[#ffffff] font-medium text-sm mb-6 tracking-wide">
            <h1 class="name_size">ARUNSUNDAR A</h1>
          </span>
          <span className="inline-block py-1 px-3 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/30 text-[#ffffff] font-medium text-sm mb-6 tracking-wide">
            DATA ANALYST | MACHINE LEARNING ENTHUSIAST
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-['Poppins'] tracking-tight mb-6"
        >
          I transform raw data into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#22C55E]">
            meaningful insights.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-['Inter'] leading-relaxed"
        >
          Just like crude oil becomes fuel, I clean, process, and model data to power decisions.
          Aspiring data professional skilled in Python, SQL, Machine Learning, and Visualization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-white font-medium transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center gap-2 group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-gray-700 hover:border-[#22C55E] hover:text-[#22C55E] text-gray-300 font-medium transition-all flex items-center gap-2 bg-[#111827]/50 backdrop-blur-sm"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download="Arun_Sundar_Resume.pdf"
            className="px-8 py-3 rounded-lg border border-gray-700 hover:border-[#F59E0B] hover:text-[#F59E0B] text-gray-300 font-medium transition-all flex items-center gap-2 bg-[#111827]/50 backdrop-blur-sm"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium"
        >
          <a href="tel:+916374971428" className="flex items-center gap-2 hover:text-[#6366F1] transition-colors">
            <Phone className="w-4 h-4" />
            +91-6374871428
          </a>
          <a href="mailto:arunkarthik966@gmail.com" className="flex items-center gap-2 hover:text-[#6366F1] transition-colors">
            <Mail className="w-4 h-4" />
            arunkarthik966@gmail.com
          </a>
          <a href="https://linkedin.com/in/arun-sundar-a-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#6366F1] transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#6366F1] rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
