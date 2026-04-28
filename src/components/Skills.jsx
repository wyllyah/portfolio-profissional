import { m } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { skills } from '../data/skills'
import SectionTitle from './SectionTitle'

function Skills() {
  return (
    <section id="habilidades" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Habilidades"
          title="Tecnologias, ferramentas e fundamentos"
          description="Principais recursos que uso para transformar ideias em interfaces modernas, responsivas e funcionais."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((group, index) => (
            <m.article
              key={group.category}
              className="rounded-lg border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-semibold text-white">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    <BadgeCheck
                      size={16}
                      className="text-cyan-300"
                      aria-hidden="true"
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
