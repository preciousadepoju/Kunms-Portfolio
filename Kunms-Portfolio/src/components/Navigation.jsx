import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { navLinks } from '../data'
import { ease } from '../motion'

function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease, delay: 0.2 }}
        className="fixed inset-x-0 top-4 z-50 px-4"
      >
        <nav
          className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 pl-5 transition-all duration-500 ${
            scrolled || open
              ? 'border-line bg-ink-2/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0_0_0/0.4)]'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#top" className="font-serif text-2xl leading-none tracking-tight" onClick={() => setOpen(false)}>
            KUNMS<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors ${
                    active === id ? 'text-cream' : 'text-muted hover:text-cream'
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-ink-3"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.03] sm:flex"
            >
              Let's talk
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className={`absolute h-px w-4 bg-cream transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-1'}`} />
              <span className={`absolute h-px w-4 bg-cream transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-1'}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-32 md:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.06 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-4 font-serif text-5xl"
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Open to new opportunities</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
