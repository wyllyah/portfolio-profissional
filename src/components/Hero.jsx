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
      className="bg-grid relative isolate overflow-hidden border-b border-white/5 pt-32 pb-24 sm:pt-36 lg:min-h-screen lg:pt-40"
    >
      <div className="absolute top-20 right-[-10%] -z-10 h-[32rem] w-[32rem] rounded-full bg-[#7000ff]/12 blur-[110px]" />
      <div className="absolute bottom-[-18%] left-[-12%] -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.9fr]">
        <m.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-lg border border-cyan-400/20 bg-zinc-950/60 px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur">
            <Sparkles size={15} aria-hidden="true" />
            System status: ativo
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl bg-gradient-to-r from-cyan-200 via-cyan-400 to-violet-300 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b9caca] sm:text-xl">
            Desenvolvedor Frontend e Backend focado em criar interfaces
            modernas, responsivas e aplicações funcionais.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="premium-button inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.18em] transition hover:-translate-y-0.5"
            >
              <span className="relative z-10">Ver projetos</span>
              <ArrowRight className="relative z-10" size={18} aria-hidden="true" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-zinc-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-white"
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/55 text-zinc-400 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_18px_rgba(99,247,255,0.14)]"
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
          aria-label="Resumo visual de habilidades frontend e backend"
        >
          <div className="glass-panel rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-rose-400" />
                <span className="h-3 w-3 rounded-sm bg-amber-300" />
                <span className="h-3 w-3 rounded-sm bg-emerald-400" />
              </div>
              <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                portfolio.jsx
              </span>
            </div>

            <div className="space-y-4 rounded-lg border border-white/10 bg-black/30 p-5 font-display text-sm">
              <p className="text-zinc-500">const developer = {'{'}</p>
              <p className="pl-4 text-slate-200">
                name: <span className="text-cyan-300">'Gustavo Wyllyah'</span>,
              </p>
              <p className="pl-4 text-slate-200">
                role:{' '}
                <span className="text-emerald-300">'Frontend e Backend'</span>,
              </p>
              <p className="pl-4 text-slate-200">
                stack:{' '}
                <span className="text-blue-300">
                  ['React', 'Node.js', 'APIs']
                </span>
                ,
              </p>
              <p className="pl-4 text-slate-200">
                focus:{' '}
                <span className="text-cyan-300">'interfaces funcionais'</span>,
              </p>
              <p className="text-zinc-500">{'}'}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {['React', 'Node.js', 'PostgreSQL', 'Supabase'].map((item) => (
              <div
                key={item}
                className="tech-chip rounded-lg p-4 text-center font-display text-xs font-bold uppercase tracking-[0.14em]"
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
