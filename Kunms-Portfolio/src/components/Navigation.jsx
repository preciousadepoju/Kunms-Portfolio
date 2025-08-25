import { useState } from 'react'

function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full max-w-full overflow-x-auto z-50 bg-black/70 backdrop-blur-md border-b border-gray-700 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Kunms
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
                <line x1="8" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <line x1="24" y1="8" x2="8" y2="24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="32" height="32" fill="currentColor">
                <rect y="8" width="32" height="4" rx="2"/>
                <rect y="16" width="32" height="4" rx="2"/>
                <rect y="24" width="32" height="4" rx="2"/>
              </svg>
            )}
          </button>
        </div>
        {open && (
          <div className="text-lg md:hidden flex flex-col space-y-2 pb-4 animate-fadeIn w-full h-[100vh]">
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>About</a>
            <a href="#experience" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>Experience</a>
            <a href="#skills" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
