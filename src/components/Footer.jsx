import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import { profile } from '../data/profile'

const footerLinks = [
  { label: 'GitHub', href: profile.github, icon: GitBranch },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: BriefcaseBusiness,
  },
  { label: 'E-mail', href: `mailto:${profile.email}`, icon: Mail },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/5 bg-zinc-950/80 py-10 backdrop-blur">
      <div className="section-shell flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="font-display font-semibold text-white">Gustavo Wyllyah</p>
          <p className="mt-1 font-display text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Desenvolvido com React e Tailwind CSS - {currentYear}
          </p>
        </div>

        <div className="flex justify-center gap-3">
          {footerLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
                aria-label={`Acessar ${link.label} de Gustavo Wyllyah`}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
