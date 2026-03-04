import { motion } from 'framer-motion'
import { Mail, Twitter } from 'lucide-react'

function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12, staggerChildren: 0.2 }
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 10 } 
    }
  }

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full overflow-hidden">
      
      {/* Background massive glowing flare */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-[conic-gradient(at_top_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-blue-900/10 to-transparent blur-3xl -z-10 pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: 'opacity' }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <motion.div 
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full -z-10"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: 'opacity' }}
          />

          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient drop-shadow-[0_10px_20px_rgba(8,145,178,0.5)]">
            Let's Connect
          </h2>
          <motion.div 
            className="w-40 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "10rem" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            className="bg-slate-900/60 backdrop-blur-3xl p-8 sm:p-14 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group perspective-[1000px]"
          >
            {/* Swirling background inside card */}
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_180deg,transparent_0_340deg,rgba(59,130,246,0.3)_360deg)] pointer-events-none"></div>
            <div className="absolute inset-1 bg-slate-950/90 rounded-[3rem] z-0"></div>

            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -ml-24 -mt-24 transition-all duration-700 group-hover:bg-cyan-400/30 group-hover:scale-150 z-0"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -mr-24 -mb-24 transition-all duration-700 group-hover:bg-blue-400/30 group-hover:scale-150 z-0"></div>

            <div className="text-center mb-16 relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-wide">Ready to Build the <span className="text-cyan-400 inline-block animate-pulse">Future?</span></h3>
              <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Whether it's Web3, crypto trading, or groundbreaking business development—let's make it happen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              {/* Email */}
              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateZ: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:akinkunmiakanmu40@gmail.com"
                className="flex flex-col sm:flex-row items-center p-8 bg-slate-800/80 rounded-3xl border border-white/5 hover:border-cyan-400 shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 w-full group/card"
              >
                <div className="p-5 bg-cyan-500/10 rounded-2xl sm:mr-6 mb-4 sm:mb-0 group-hover/card:bg-cyan-500/30 transition-colors shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-400/20 scale-0 group-hover/card:scale-150 rounded-full transition-transform duration-500"></div>
                  <Mail className="w-10 h-10 text-cyan-400 relative z-10" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-2xl font-black text-white mb-1 group-hover/card:text-cyan-400 transition-colors tracking-wide">Email</h4>
                  <p className="text-slate-400 break-all font-medium">akinkunmi<wbr/>akanmu40@gmail.com</p>
                </div>
              </motion.a>
              
              {/* Twitter/X */}
              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com/IamKunms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center p-8 bg-slate-800/80 rounded-3xl border border-white/5 hover:border-blue-400 shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 w-full group/card"
              >
                <div className="p-5 bg-blue-500/10 rounded-2xl sm:mr-6 mb-4 sm:mb-0 group-hover/card:bg-blue-500/30 transition-colors shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-400/20 scale-0 group-hover/card:scale-150 rounded-full transition-transform duration-500"></div>
                  <Twitter className="w-10 h-10 text-blue-400 relative z-10" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-2xl font-black text-white mb-1 group-hover/card:text-blue-400 transition-colors tracking-wide">Follow on X</h4>
                  <p className="text-slate-400 break-all font-medium">@IamKunms</p>
                </div>
              </motion.a>
            </div>
            
            <motion.div 
              className="text-center mt-16 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="inline-flex items-center gap-4 text-white text-lg sm:text-xl py-3 px-8 rounded-full bg-slate-800/80 border border-slate-700 shadow-lg group hover:border-cyan-400/50 transition-colors">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
                <span className="font-medium tracking-wide">Open to explosive new opportunities</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
