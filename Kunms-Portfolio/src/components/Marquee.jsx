import { partners } from '../data'

function Marquee() {
  const items = [...partners, ...partners]
  return (
    <section aria-label="Brands worked with" className="relative border-y border-line bg-ink-2 py-6">
      <p className="sr-only">{partners.join(', ')}</p>
      <div
        aria-hidden
        className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max shrink-0 animate-marquee items-center hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="px-8 font-serif text-3xl text-cream/80 sm:text-4xl">{name}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marquee
