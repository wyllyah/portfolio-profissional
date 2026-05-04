import { m } from 'framer-motion'
import {
  BriefcaseBusiness,
  GitBranch,
  Mail,
} from 'lucide-react'
import { profile } from '../data/profile'
import SectionTitle from './SectionTitle'

const contactLinks = [
  { label: 'GitHub', href: profile.github, icon: GitBranch },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: BriefcaseBusiness,
  },
  { label: 'E-mail', href: `mailto:${profile.email}`, icon: Mail },
]

function Contact() {
  return (
    <section id="contato" className="relative py-24 sm:py-28">
      <div className="absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-[#7000ff]/10 blur-[100px]" />
      <div className="section-shell">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos trabalhar juntos?"
          description="Estou aberto a oportunidades, projetos freelance e conexões profissionais."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <m.div
            className="glass-panel rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-white">Contato direto</h3>
            <div className="mt-6 space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-300"
                    aria-label={`Acessar ${link.label} de Gustavo Wyllyah`}
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
          </m.div>

          <m.div
            className="glass-panel rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          >
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Fale comigo pelo WhatsApp
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-[#b9caca]">
                  Clique no botão abaixo para abrir uma conversa direta comigo.
                  A mensagem inicial já estará preenchida para facilitar o
                  contato.
                </p>
              </div>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#19bf5d] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(25,191,93,0.18)] transition hover:-translate-y-0.5 hover:bg-[#16ad54] sm:w-auto sm:self-start"
                aria-label="Enviar mensagem para Gustavo Wyllyah pelo WhatsApp"
              >
                <img
                  src="/whatsapp-icon.png"
                  alt=""
                  className="h-5 w-5 object-contain brightness-0 invert"
                  aria-hidden="true"
                />
                Enviar mensagem no WhatsApp
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
