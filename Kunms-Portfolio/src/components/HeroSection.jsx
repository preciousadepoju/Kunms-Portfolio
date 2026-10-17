import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import kunmsImg from '../assets/kunms.jpeg'
import { X_URL } from '../data'
import { ease } from '../motion'

const lines = [
  <>Growing the</>,
  <><em className="font-serif italic text-lime">borderless</em> crypto</>,
  <>economy.</>,
]

const stats = [
  { value: '19+', label: 'Web3 brands' },
  { value: '05', label: 'Exchange partnerships' },
  { value: '2024', label: 'Building since' },
]

function PortraitCard() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease, delay: 0.5 }}
      className="relative mx-auto w-full max-w-[22rem] [perspective:1200px] lg:mx-0"
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={() => { mx.set(0); my.set(0) }}
        style={{ rotateX, rotateY }}
        className="relative rounded-[2rem] border border-line bg-ink-2 p-3 shadow-[0_40px_80px_-20px_rgb(0_0_0/0.7)]"
      >
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img src={kunmsImg} alt="KUNMS avatar" className="aspect-[4/5] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
            <div>
              <p className="font-serif text-3xl leading-none">KUNMS</p>
            </div>
            <span className="rounded-full border border-cream/20 bg-ink/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] backdrop-blur-md">
              Web3 BD
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease, delay: 1.1 }}
        className="absolute -left-4 top-10 hidden items-center gap-2 rounded-full border border-line bg-ink-2/90 px-4 py-2 text-xs backdrop-blur-md sm:flex lg:-left-12"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
        </span>
        Open to partnerships
      </motion.div>
    </motion.div>
  )
}

function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-lime/[0.07] blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span className="text-lime">●</span>
            Business Developer
            <span className="text-line">/</span>
            Marketer
            <span className="text-line">/</span>
            Crypto Trader
          </motion.p>

          <h1 className="text-[clamp(2.75rem,7.5vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease, delay: 0.35 + i * 0.1 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.8 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            I'm KUNMS — I forge partnerships, launch campaigns and build communities that expand crypto
            adoption across Africa and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-medium text-ink transition-colors hover:bg-lime"
            >
              Start a conversation
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-[-45deg]" />
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-medium transition-colors hover:border-cream/40"
            >
              Follow on X
              <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream" />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-4xl sm:text-5xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <PortraitCard />
      </div>
    </section>
  )
}

export default HeroSection
