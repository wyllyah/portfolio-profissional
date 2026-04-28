import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-3 font-semibold text-white"
          onClick={closeMenu}
          aria-label="Ir para o início"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-900 text-sm text-cyan-300">
            GW
          </span>
          <span>Gustavo Wyllyah</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-800 bg-slate-950 px-4 pb-4 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900 hover:text-cyan-300"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
