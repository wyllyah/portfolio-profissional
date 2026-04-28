import { motion } from 'framer-motion'
import { BookOpenCheck } from 'lucide-react'
import SectionTitle from './SectionTitle'

const timeline = [
  {
    title: 'Desenvolvimento Frontend',
    description:
      'Estudos práticos em HTML, CSS, JavaScript, React e Tailwind CSS, com foco na construção de interfaces modernas e responsivas.',
  },
  {
    title: 'Projetos com APIs',
    description:
      'Criação de aplicações consumindo APIs externas, trabalhando com requisições, tratamento de dados e exibição dinâmica.',
  },
  {
    title: 'Sistemas com Supabase',
    description:
      'Desenvolvimento de aplicações com autenticação, banco de dados, CRUD e integração com Supabase.',
  },
]

function Timeline() {
  return (
    <section id="experiencia" className="border-y border-slate-900 bg-slate-900/35 py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Experiência e estudos"
          title="Aprendizado aplicado em projetos"
          description="Temas que fazem parte da minha evolução como desenvolvedor frontend."
        />

        <div className="mx-auto max-w-3xl">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              className="relative border-l border-slate-800 pb-10 pl-8 last:pb-0"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
            >
              <div className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-950 text-cyan-300">
                <BookOpenCheck size={18} aria-hidden="true" />
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
