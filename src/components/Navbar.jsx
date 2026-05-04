import { Menu, TerminalSquare, X } from 'lucide-react'
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/45 shadow-[0_4px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
      <nav
        className="section-shell flex h-20 items-center justify-between"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="flex items-center gap-3 font-display font-bold text-white"
          onClick={closeMenu}
          aria-label="Ir para o início"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/35 bg-cyan-400/5 text-cyan-300 shadow-[0_0_18px_rgba(99,247,255,0.15)]">
            <TerminalSquare size={20} aria-hidden="true" />
          </span>
          <span className="hidden tracking-tight drop-shadow-[0_0_10px_rgba(99,247,255,0.35)] sm:inline">
            Gustavo Wyllyah
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="menu-mobile"
          className="border-t border-white/10 bg-zinc-950/95 px-4 pb-4 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:bg-white/5 hover:text-cyan-300"
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
