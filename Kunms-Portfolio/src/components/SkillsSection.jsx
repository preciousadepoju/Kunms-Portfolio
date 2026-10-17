import { motion } from 'framer-motion'
import { BarChart3, Mic, PenTool, Rocket, TrendingUp, Users } from 'lucide-react'
import { ease } from '../motion'
import { Reveal, SectionLabel } from './Reveal'

const skills = [
  {
    icon: Rocket,
    title: 'Business Development',
    desc: 'Strategic partnerships and growth initiatives that drive business expansion — from exchange deals to protocol onboarding.',
    span: 'md:col-span-2',
    featured: true,
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    desc: 'Strategic campaigns and brand growth initiatives in the Web3 space.',
  },
  {
    icon: BarChart3,
    title: 'Trading',
    desc: 'Crypto trading backed by technical and fundamental analysis.',
  },
  {
    icon: Users,
    title: 'Community Building',
    desc: 'Building and nurturing engaged communities around Web3 projects and brands.',
    span: 'md:col-span-2',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    desc: 'Engaging content that elevates brands and reaches broader audiences.',
  },
  {
    icon: Mic,
    title: 'Public Speaking',
    desc: 'Compelling presentations and thought leadership in blockchain and crypto.',
    span: 'md:col-span-2',
  },
]

function trackPointer(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
}

function SkillsSection() {
  return (
    <section id="skills" className="relative px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03">Expertise</SectionLabel>
        <Reveal as="h2" className="mt-10 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none tracking-[-0.04em]">
          What I <span className="font-serif italic">bring</span> to the table
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {skills.map(({ icon: Icon, title, desc, span = '', featured }, i) => (
            <motion.article
              key={title}
              onMouseMove={trackPointer}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease, delay: (i % 3) * 0.08 }}
              className={`group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-3xl border p-7 transition-colors duration-500 sm:p-8 ${span} ${
                featured ? 'border-accent/30 bg-accent text-ink' : 'border-line bg-ink-2 hover:border-cream/20'
              }`}
            >
              {!featured && (
                <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              )}

              <div className="relative flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:-rotate-6 ${
                    featured ? 'border-ink/15 bg-ink/5' : 'border-line bg-ink-3'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${featured ? 'text-ink' : 'text-accent'}`} strokeWidth={1.75} />
                </span>
                <span className={`font-mono text-xs ${featured ? 'text-ink/50' : 'text-muted'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative mt-12">
                <h3 className={`font-serif leading-tight ${featured ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{title}</h3>
                <p className={`mt-3 max-w-md leading-relaxed ${featured ? 'text-ink/70' : 'text-muted'}`}>{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
