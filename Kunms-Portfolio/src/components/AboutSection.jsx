import { motion } from 'framer-motion'
import { ease } from '../motion'
import { Reveal, SectionLabel } from './Reveal'

const languages = [
  { name: 'English', level: 'Fluent', value: 90 },
]

const focus = ['Exchange partnerships', 'Token listings', 'Community growth', 'KOL campaigns']

function AboutSection() {
  return (
    <section id="about" className="relative px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="01">About</SectionLabel>

        <Reveal as="h2" className="mt-10 max-w-5xl text-[clamp(1.9rem,4.2vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.03em]">
          I believe blockchain can reshape financial systems and{' '}
          <span className="font-serif italic text-lime">empower individuals</span> across Africa and beyond — and
          I build the partnerships that <span className="text-muted">make that happen.</span>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-6">
            <Reveal>
              <p>
                I'm <span className="text-cream">KUNMS</span> — a dedicated business developer, marketer, and crypto trader
                passionate about expanding crypto adoption and creating impactful growth strategies.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                My journey in blockchain and business is fueled by a commitment to unlocking the opportunities that
                decentralized finance and innovative marketing bring to communities.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                As a marketer and business developer, I've spearheaded dynamic campaigns and forged strategic
                partnerships that drive brand growth and community engagement — building a future where access to
                opportunity is truly borderless.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:col-start-8 lg:grid-cols-1">
            <Reveal className="rounded-3xl border border-line bg-ink-2 p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Languages</p>
              <div className="mt-6 space-y-6">
                {languages.map((l, i) => (
                  <div key={l.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-2xl">{l.name}</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-lime">{l.level}</span>
                    </div>
                    <div className="mt-3 h-px w-full bg-line">
                      <motion.div
                        className="h-px origin-left bg-cream"
                        style={{ width: `${l.value}%` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease, delay: 0.3 + i * 0.15 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-3xl border border-line bg-ink-2 p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Focus</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {focus.map((f) => (
                  <li key={f} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-cream/90">
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
