import { motion } from 'framer-motion'

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <p className="mb-3 text-sm font-semibold uppercase text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
      ) : null}
    </motion.div>
  )
}

export default SectionTitle
