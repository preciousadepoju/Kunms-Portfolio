import { motion } from 'framer-motion'
import kunmsImg from '../assets/kunms.jpeg'

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1 
      }
    },
  }

  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 w-full max-w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-16 text-center lg:text-left gap-12 lg:gap-0 relative">
          
          {/* Background glowing flare behind text */}
          <motion.div 
            className="absolute -top-20 -left-20 lg:-left-40 lg:-top-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"
            style={{ zIndex: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Texts */}
          <motion.div 
            className="flex-1 lg:order-1 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                Kunms
              </span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl text-slate-300 font-medium mb-6">
              Business Developer, <span className="text-cyan-400 inline-block drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Marketer</span> & Crypto Trader
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Passionate about expanding crypto adoption and creating impactful growth strategies in the Web3 space. Building a future where access to opportunity is truly borderless.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(8,145,178,0.8)] hover:scale-105 active:scale-95 overflow-hidden border border-cyan-400/30"
              >
                {/* Shine effect */}
                <span className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-30deg] animate-[shine_3s_infinite]" />
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10 z-0"></div>
              </a>
              <a
                href="https://x.com/IamKunms"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border border-slate-600 bg-slate-900/50 backdrop-blur-md text-slate-300 font-bold rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 hover:border-slate-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 relative overflow-hidden flex items-center justify-center gap-2"
              >
                <svg className="group-hover:text-blue-400 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow on X
              </a>
            </motion.div>
          </motion.div>

          {/* Kunms Image */}
          <motion.div 
            className="flex justify-center mb-6 lg:mb-0 lg:order-2 w-full lg:w-auto relative"
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.5 }}
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Rotating glowing border back */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full blur-xl opacity-60"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              />
              <img
                src={kunmsImg}
                alt="Kunms"
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] object-cover z-10 bg-slate-900"
              />
              {/* Spinning highlight */}
              <motion.div 
                className="absolute inset-0 rounded-full border-t-2 border-l-2 border-cyan-300 mix-blend-overlay z-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
