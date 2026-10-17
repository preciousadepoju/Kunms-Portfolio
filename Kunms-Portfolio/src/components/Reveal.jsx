import { motion } from 'framer-motion'
import { ease } from '../motion'

export function Reveal({ children, delay = 0, y = 32, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </Tag>
  )
}

export function SectionLabel({ index, children }) {
  return (
    <Reveal className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="text-accent">({index})</span>
      <span className="h-px w-12 bg-line" />
      <span>{children}</span>
    </Reveal>
  )
}
