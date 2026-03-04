import { motion } from 'framer-motion'

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 50, rotateY: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { type: "spring", stiffness: 80, damping: 15, mass: 1.5 } 
    },
  }

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Dynamic Background Element */}
      <motion.div 
        className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent -translate-y-1/2 z-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: 'opacity' }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block drop-shadow-[0_5px_15px_rgba(34,211,238,0.4)]">
            About Me
          </h2>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center perspective-[1000px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          <motion.div className="space-y-8 relative">
            {/* Highlight line on left */}
            <motion.div 
              className="absolute left-[-20px] top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "anticipate" }}
            />
            
            <motion.p variants={textVariants} className="text-xl text-slate-300 leading-relaxed font-light">
              I'm <span className="text-cyan-400 font-bold bg-cyan-400/10 px-2 py-1 rounded-md">Akinkunmi</span>, popularly known as <span className="text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded-md">Kunms</span>,
              a dedicated business developer, marketer, and crypto trader passionate about expanding crypto adoption and creating impactful growth strategies.
            </motion.p>
            <motion.p variants={textVariants} className="text-xl text-slate-300 leading-relaxed font-light">
              My journey in the blockchain and business space is fueled by a commitment to unlocking opportunities that
              <span className="text-white font-medium"> decentralized finance</span> and innovative marketing can bring to communities.
            </motion.p>
            <motion.p variants={textVariants} className="text-xl text-slate-300 leading-relaxed font-light">
              Through my work as a marketer and business developer, I've spearheaded dynamic campaigns and forged strategic
              partnerships that drive brand growth and community engagement.
            </motion.p>
            <motion.p variants={textVariants} className="text-xl text-slate-300 leading-relaxed font-light">
              I believe in the transformative power of blockchain technology to reshape financial systems and empower
              individuals across Africa and beyond, building a future where access to opportunity is truly borderless.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              rotateX: 5, 
              rotateY: -5,
              boxShadow: "0 30px 60px rgba(8, 145, 178, 0.4)",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="bg-slate-900/60 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group transform-gpu"
          >
            {/* Animated rotating gradient border background inside */}
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(34,211,238,0.5)_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            
            <div className="absolute inset-[2px] bg-slate-900 rounded-[22px] z-10 backdrop-blur-3xl"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-700 group-hover:bg-cyan-400/40 z-10"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20 transition-all duration-700 group-hover:bg-purple-400/40 z-10"></div>
            
            <div className="relative z-20">
              <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/40 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover:scale-110 transition-transform">
                    <path d="m5 8 6 6"/>
                    <path d="m4 14 6-6 2-3"/>
                    <path d="M2 5h12"/>
                    <path d="M7 2h1"/>
                    <path d="m22 22-5-10-5 10"/>
                    <path d="14 18h6"/>
                  </svg>
                </div>
                Languages
              </h3>
              
              <div className="space-y-8">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-200 text-xl font-medium tracking-wide">Yoruba</span>
                    <span className="text-cyan-400 font-bold px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-sm">Native</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden shadow-inner">
                    <motion.div 
                      className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-2 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    >
                      {/* Shine effect on bar */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-200 text-xl font-medium tracking-wide">English</span>
                    <span className="text-blue-400 font-bold px-4 py-1.5 bg-blue-400/10 border border-blue-400/30 rounded-full text-sm">Fluent</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden shadow-inner">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                    >
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite_0.5s]"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
