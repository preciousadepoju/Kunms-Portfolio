import { ArrowUp } from 'lucide-react'
import { EMAIL, X_URL, navLinks } from '../data'

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line px-5 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl">
              KUNMS<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-sm text-muted">
              Building the future of decentralized finance, one partnership at a time.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="link-underline">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Connect</p>
            <ul className="mt-4 space-y-2">
              <li><a href={X_URL} target="_blank" rel="noopener noreferrer" className="link-underline">X / Twitter</a></li>
              <li><a href={`mailto:${EMAIL}`} className="link-underline">Email</a></li>
            </ul>
          </div>

          <div className="md:col-span-1 md:flex md:justify-end">
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:bg-accent hover:text-ink"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-line py-6 font-mono text-xs uppercase tracking-[0.15em] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} KUNMS</span>
          <span>Building bridges in the Web3 ecosystem</span>
        </div>
      </div>

      <p
        aria-hidden
        className="text-outline pointer-events-none select-none text-center font-serif text-[20vw] leading-[0.75] tracking-[-0.04em]"
      >
        KUNMS
      </p>
    </footer>
  )
}

export default Footer
