import { useState } from 'react'
import { motion } from 'framer-motion'

function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full max-w-full overflow-x-auto z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
            <a href="/">Kunms</a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">About</a>
            <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Experience</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Skills</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Contact</a>
          </div>
          <button
            className="md:hidden text-cyan-400 hover:text-cyan-300 focus:outline-none transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-2xl md:hidden flex flex-col space-y-6 pt-10 pb-4 w-full h-[100vh] items-center"
          >
            <a href="#about" className="block text-slate-300 hover:text-cyan-400 transition-colors" onClick={() => setOpen(false)}>About</a>
            <a href="#experience" className="block text-slate-300 hover:text-cyan-400 transition-colors" onClick={() => setOpen(false)}>Experience</a>
            <a href="#skills" className="block text-slate-300 hover:text-cyan-400 transition-colors" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" className="block text-slate-300 hover:text-cyan-400 transition-colors" onClick={() => setOpen(false)}>Contact</a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation
