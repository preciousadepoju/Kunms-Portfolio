import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { EMAIL, X_HANDLE, X_URL } from '../data'
import { Reveal, SectionLabel } from './Reveal'

function XLogo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28 sm:px-8 md:py-40">
      <div className="pointer-events-none absolute bottom-[-20%] left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-lime/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel index="04">Contact</SectionLabel>

        <Reveal as="h2" className="mt-10 text-[clamp(2.75rem,8.5vw,8rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          Ready to build
          <br />
          the <span className="font-serif italic text-lime">future?</span>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Whether it's Web3 partnerships, exchange listings, crypto trading or business development — let's make it
          happen.
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <Reveal className="group relative rounded-3xl border border-line bg-ink-2 p-7 transition-colors hover:border-cream/20 sm:p-9">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                <Mail className="h-4 w-4 text-lime" /> Email
              </span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-cream/30 hover:text-cream"
                aria-label="Copy email address"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-lime" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-10 flex items-end justify-between gap-4 break-all font-serif text-[clamp(1.4rem,3vw,2.25rem)] leading-tight"
            >
              <span className="link-underline">{EMAIL}</span>
              <ArrowUpRight className="h-7 w-7 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime" />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full rounded-3xl border border-line bg-ink-2 p-7 transition-colors hover:border-cream/20 sm:p-9"
            >
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                <XLogo className="h-3.5 w-3.5 text-lime" /> Follow on X
              </span>
              <span className="mt-10 flex items-end justify-between gap-4 font-serif text-[clamp(1.4rem,3vw,2.25rem)] leading-tight">
                <span className="link-underline">{X_HANDLE}</span>
                <ArrowUpRight className="h-7 w-7 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime" />
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-10 inline-flex items-center gap-3 rounded-full border border-line px-5 py-2.5 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          Open to new opportunities
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection
