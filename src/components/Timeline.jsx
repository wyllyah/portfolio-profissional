import { m } from 'framer-motion'
import { BookOpenCheck } from 'lucide-react'
import SectionTitle from './SectionTitle'

const timeline = [
  {
    title: 'Desenvolvimento Frontend e Backend',
    description:
      'Estudos práticos em HTML, CSS, JavaScript, React, Tailwind CSS e Node.js, com foco na construção de interfaces modernas e aplicações funcionais.',
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
    <section id="experiencia" className="border-y border-white/5 bg-black/10 py-24 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Experiência e estudos"
          title="Aprendizado aplicado em projetos"
          description="Temas que fazem parte da minha evolução como desenvolvedor frontend e backend."
        />

        <div className="mx-auto max-w-3xl">
          {timeline.map((item, index) => (
            <m.article
              key={item.title}
              className="relative border-l border-white/10 pb-10 pl-8 last:pb-0"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
            >
              <div className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-zinc-950 text-cyan-300 shadow-[0_0_16px_rgba(99,247,255,0.12)]">
                <BookOpenCheck size={18} aria-hidden="true" />
              </div>
              <div className="glass-panel rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#b9caca]">
                  {item.description}
                </p>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
