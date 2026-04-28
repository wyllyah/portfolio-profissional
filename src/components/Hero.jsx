import { m } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  GitBranch,
  Mail,
  Sparkles,
} from 'lucide-react'
import { profile } from '../data/profile'

const socialLinks = [
  { label: 'GitHub de Gustavo Wyllyah', href: profile.github, icon: GitBranch },
  {
    label: 'LinkedIn de Gustavo Wyllyah',
    href: profile.linkedin,
    icon: BriefcaseBusiness,
  },
  {
    label: 'Enviar e-mail para Gustavo Wyllyah',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
]

function Hero() {
  return (
    <section
      id="inicio"
      className="bg-grid relative isolate overflow-hidden border-b border-slate-900 pt-28 pb-20 sm:pt-32 lg:min-h-screen lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(15,23,42,0.2),rgba(14,165,233,0.08)_42%,rgba(2,6,23,0.84))]" />
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <m.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-slate-900/80 px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={16} aria-hidden="true" />
            Desenvolvedor Frontend
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-cyan-300">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Desenvolvedor Frontend focado em criar interfaces modernas,
            responsivas e funcionais.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Ver projetos
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-300"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300"
                  aria-label={link.label}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </m.div>

        <m.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          role="img"
          aria-label="Resumo visual de habilidades frontend"
        >
          <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-slate-950/50">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-rose-400" />
                <span className="h-3 w-3 rounded-sm bg-amber-300" />
                <span className="h-3 w-3 rounded-sm bg-emerald-400" />
              </div>
              <span className="text-xs font-medium text-slate-500">
                portfolio.jsx
              </span>
            </div>

            <div className="space-y-4 rounded-lg border border-slate-800 bg-slate-950/80 p-5 font-mono text-sm">
              <p className="text-slate-500">const developer = {'{'}</p>
              <p className="pl-4 text-slate-200">
                name: <span className="text-cyan-300">'Gustavo Wyllyah'</span>,
              </p>
              <p className="pl-4 text-slate-200">
                role: <span className="text-emerald-300">'Frontend'</span>,
              </p>
              <p className="pl-4 text-slate-200">
                stack:{' '}
                <span className="text-blue-300">
                  ['React', 'Tailwind', 'APIs']
                </span>
                ,
              </p>
              <p className="pl-4 text-slate-200">
                focus:{' '}
                <span className="text-cyan-300">'interfaces funcionais'</span>,
              </p>
              <p className="text-slate-500">{'}'}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {['React', 'JavaScript', 'Tailwind CSS', 'Supabase'].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-800 bg-slate-900/80 p-4 text-center text-sm font-semibold text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default Hero
