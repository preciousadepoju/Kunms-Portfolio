import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, Users, Rocket, PenTool, Mic } from 'lucide-react'

// Define skills data with new icons
const skillsData = [
  {
    icon: <TrendingUp className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Marketing",
    desc: "Strategic marketing campaigns and brand growth initiatives in the Web3 space."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Trading",
    desc: "Expert crypto trading with technical and fundamental analysis expertise."
  },
  {
    icon: <Users className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Community Building",
    desc: "Building and nurturing engaged communities around Web3 projects and brands."
  },
  {
    icon: <Rocket className="w-10 h-10 text-cyan-400 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" />,
    title: "Business Development",
    desc: "Strategic partnerships and growth initiatives that drive business expansion."
  },
  {
    icon: <PenTool className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Content Creation",
    desc: "Engaging content that elevates brands and connects with broader audiences."
  },
  {
    icon: <Mic className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Public Speaking",
    desc: "Compelling presentations and thought leadership in blockchain and crypto."
  }
]

function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    },
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block drop-shadow-[0_5px_15px_rgba(8,145,178,0.4)]">
            Expertise
          </h2>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: -5,
                z: 50,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="bg-slate-900/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/5 hover:border-cyan-400/50 transition-colors duration-300 group shadow-2xl hover:shadow-[0_20px_40px_rgba(8,145,178,0.3)] relative overflow-hidden transform-gpu"
            >
              {/* Sweeping hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700 pointer-events-none"></div>
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:from-cyan-400/30 group-hover:to-purple-500/30 transition-all duration-700"></div>
              
              <div className="mb-8 p-5 bg-slate-800/80 rounded-2xl inline-block border border-slate-700/50 group-hover:border-cyan-400/50 group-hover:bg-slate-800 transition-all duration-300 relative z-10 shadow-lg shadow-black/50 overflow-hidden">
                {/* Icon background flair */}
                <div className="absolute inset-0 bg-cyan-400/10 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full" />
                <div className="relative z-10">{skill.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors relative z-10 tracking-wide">
                {skill.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg relative z-10 font-light group-hover:text-slate-300 transition-colors">
                {skill.desc}
              </p>
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default SkillsSection
