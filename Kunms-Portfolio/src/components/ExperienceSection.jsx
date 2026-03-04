import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Business Developer",
    company: "Victus Global",
    period: "2024 - Present",
    desc: "Leading business development initiatives and strategic partnerships to drive growth and expansion in the Web3 space.",
    color: "cyan"
  },
  {
    role: "Partner",
    company: "BingX Exchange",
    period: "2025 - Present",
    desc: "Strategic partnership focused on expanding crypto trading opportunities and community engagement across African markets.",
    color: "blue"
  },
  {
    role: "Affiliate",
    company: "MEXC Exchange",
    period: "2024 - Present",
    desc: "Driving user acquisition and community growth through strategic marketing campaigns and educational content.",
    color: "purple"
  },
  {
    role: "Listing Partner",
    company: "BitMart Exchange",
    period: "2025 - Present",
    desc: "Working with BitMart to support listings, drive exposure for new tokens, and expand global reach in crypto markets.",
    color: "cyan"
  },
  {
    role: "Ambassador",
    company: "Puff verse",
    period: "2024 - 2025",
    desc: "Represented the brand and built community engagement through strategic outreach and content creation initiatives.",
    color: "blue"
  },
  {
    role: "BD",
    company: "Munia Protocol",
    period: "2025 - Present",
    desc: "Serving as Business Developer, building partnerships, onboarding users, expanding market reach, and creating growth opportunities.",
    color: "purple"
  },
  {
    role: "KOL",
    company: "Multiple Web3 Projects",
    period: "2025",
    desc: "Acted as a Key Opinion Leader for Zybrafi, TokenRacer, Odyssey of Fate, Prodigy.FI, Kolab Network, and Metadawgs to amplify visibility and trust.",
    color: "cyan"
  }
]

function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent z-0 pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: 'opacity' }}
      />
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block drop-shadow-[0_5px_15px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform duration-300">
            Professional Journey
          </h2>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500/20 before:via-purple-500/50 before:to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {/* Animated tracking line that slides down overall */}
          <motion.div 
            className="absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: isLeft ? -100 : 100, rotate: isLeft ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 80, damping: 12, mass: 1 }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 lg:mb-16`}
              >
                {/* Expanding Timeline dot on hover */}
                <motion.div 
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-10 relative`}
                  whileHover={{ scale: 1.5, rotate: 180, backgroundColor: "#a855f7" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-cyan-400 rounded-full blur-md"
                    animate={{ opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    style={{ willChange: 'opacity' }}
                  />
                  <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                </motion.div>
                
                {/* Hover springing Card */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(8, 145, 178, 0.3)",
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-900/60 backdrop-blur-3xl p-8 rounded-3xl border border-white/5 shadow-2xl hover:border-cyan-400/50 transition-colors duration-300 relative overflow-hidden group/card transform-gpu"
                >
                  <div className={`absolute top-0 ${isLeft ? 'right-0 -mr-16' : 'left-0 -ml-16'} w-40 h-40 bg-${exp.color}-500/10 rounded-full blur-3xl -mt-16 transition-all duration-500 group-hover/card:bg-${exp.color}-500/30 group-hover/card:scale-150`}></div>
                  
                  {/* Decorative neon streak */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 translate-x-[-100%] group-hover/card:translate-x-[100%] group-hover/card:opacity-100 transition-all duration-1000"></div>
                  
                  <div className="flex flex-col mb-4 relative z-10">
                    <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-2 inline-block py-1 px-3 bg-cyan-400/10 rounded-full w-max border border-cyan-400/20">{exp.period}</span>
                    <h3 className="text-3xl font-black text-white leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent group-hover/card:to-white transition-colors">{exp.role}</h3>
                    <h4 className="text-xl text-slate-400 font-semibold mt-1 group-hover/card:text-cyan-300 transition-colors">{exp.company}</h4>
                  </div>
                  <p className="text-slate-300 leading-relaxed relative z-10 text-lg group-hover/card:text-white transition-colors">
                    {exp.desc}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default ExperienceSection
