import { m } from 'framer-motion'
import { Code2, DatabaseZap, Layers3, MonitorSmartphone } from 'lucide-react'
import SectionTitle from './SectionTitle'

const strengths = [
  {
    title: 'Interfaces responsivas',
    icon: MonitorSmartphone,
    text: 'Layouts pensados para funcionar bem em celulares, tablets e desktops.',
  },
  {
    title: 'Código organizado',
    icon: Code2,
    text: 'Componentes reutilizáveis, dados separados e estrutura fácil de evoluir.',
  },
  {
    title: 'Consumo de APIs',
    icon: DatabaseZap,
    text: 'Integração com dados externos e renderização dinâmica de informações.',
  },
  {
    title: 'Projetos práticos',
    icon: Layers3,
    text: 'Aplicações focadas em resolver fluxos reais e consolidar aprendizado.',
  },
]

function About() {
  return (
    <section id="sobre" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Sobre"
          title="Frontend e backend com foco em soluções úteis"
          description="Uma visão direta sobre minha formação, meus estudos e a forma como construo projetos."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <m.div
            className="glass-panel rounded-lg border-l-2 border-l-cyan-300/50 p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-lg leading-8 text-[#b9caca]">
              Sou desenvolvedor frontend e backend em formação, focado na
              criação de aplicações web modernas, responsivas e funcionais.
              Tenho estudado e desenvolvido projetos práticos utilizando HTML,
              CSS, JavaScript, React, Tailwind CSS, Node.js, consumo de APIs e
              integração com Supabase.
              Meu objetivo é evoluir constantemente e construir soluções que
              sejam úteis, bem organizadas e agradáveis de usar.
            </p>
          </m.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon

              return (
                <m.article
                  key={item.title}
                  className="glass-panel glass-panel-hover rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: 'easeOut',
                  }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/5 text-cyan-300 shadow-[0_0_16px_rgba(99,247,255,0.12)]">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-6 text-[#b9caca]">{item.text}</p>
                </m.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
