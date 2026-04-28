import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/wyllyah', icon: GitBranch },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wyllyah/',
    icon: BriefcaseBusiness,
  },
  { label: 'E-mail', href: 'mailto:gustavowyllyah@gmail.com', icon: Mail },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="section-shell flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold text-white">Gustavo Wyllyah</p>
          <p className="mt-1 text-sm text-slate-400">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
                aria-label={link.label}
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
