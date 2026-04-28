import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  GitBranch,
  Mail,
  MessageCircleMore,
} from 'lucide-react'
import SectionTitle from './SectionTitle'

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/wyllyah', icon: GitBranch },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wyllyah/',
    icon: BriefcaseBusiness,
  },
  { label: 'E-mail', href: 'mailto:gustavowyllyah@gmail.com', icon: Mail },
]

const whatsappUrl =
  'https://wa.me/5561999793437?text=Ol%C3%A1%2C%20Gustavo!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.'

function Contact() {
  return (
    <section id="contato" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos trabalhar juntos?"
          description="Estou aberto a oportunidades, projetos freelance e conexões profissionais."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="rounded-lg border border-slate-800 bg-slate-900/70 p-6 sm:p-8"
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
                    className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg border border-slate-800 bg-slate-900/70 p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          >
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
                  <MessageCircleMore size={28} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Fale comigo pelo WhatsApp
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                  Clique no botão abaixo para abrir uma conversa direta comigo.
                  A mensagem inicial já estará preenchida para facilitar o
                  contato.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-400 sm:w-auto sm:self-start"
              >
                <MessageCircleMore size={18} aria-hidden="true" />
                Enviar mensagem no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
