import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { experiences } from '../data'
import { ease } from '../motion'
import { Reveal, SectionLabel } from './Reveal'

function ExperienceSection() {
  return (
    <section id="experience" className="relative px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel index="02">Experience</SectionLabel>
            <Reveal as="h2" className="mt-10 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none tracking-[-0.04em]">
              Professional <span className="font-serif italic">journey</span>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="max-w-xs text-muted">
            Partnerships and roles across exchanges, protocols and Web3 communities.
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-line">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease, delay: 0.05 * i }}
              className="group relative isolate border-b border-line"
            >
              {/* Hover fill */}
              <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-lime transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-y-100" />

              <div className="grid gap-3 px-1 py-8 transition-colors duration-300 md:grid-cols-12 md:items-center md:gap-6 md:px-4 md:group-hover:text-ink">
                <span className="font-mono text-xs text-muted transition-colors md:col-span-1 md:group-hover:text-ink/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-3xl leading-tight sm:text-4xl md:col-span-3">{exp.company}</h3>
                <p className="text-base font-medium md:col-span-2">{exp.role}</p>
                <p className="text-[15px] leading-relaxed text-muted transition-colors md:col-span-4 md:group-hover:text-ink/75">
                  {exp.desc}
                </p>
                <div className="flex items-center justify-between md:col-span-2 md:justify-end md:gap-3">
                  <span className="whitespace-nowrap font-mono text-xs uppercase tracking-wider text-muted transition-colors md:group-hover:text-ink/70">
                    {exp.period}
                  </span>
                  <ArrowUpRight className="hidden h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block" />
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ExperienceSection
