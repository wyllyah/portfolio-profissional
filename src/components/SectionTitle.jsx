import { m } from 'framer-motion'

function SectionTitle({ eyebrow, title, description }) {
  return (
    <m.div
      className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <p className="mb-4 inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
        <span className="lume-dot" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-[#b9caca]">{description}</p>
      ) : null}
    </m.div>
  )
}

export default SectionTitle
