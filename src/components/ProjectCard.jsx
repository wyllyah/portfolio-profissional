import { m } from 'framer-motion'
import { Code2, ExternalLink, Server } from 'lucide-react'

function ProjectCard({ project, index }) {
  const Icon = project.icon
  const hasCodeUrl = project.codeUrl && project.codeUrl !== '#'

  return (
    <m.article
      className="glass-panel glass-panel-hover group flex h-full flex-col overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
    >
      <div className={`relative bg-gradient-to-br ${project.accent} p-6`}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-70" />
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-cyan-400/25 bg-zinc-950/80 text-cyan-300 shadow-[0_0_18px_rgba(99,247,255,0.12)]">
          <Icon size={26} aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          {project.type ? (
            <span className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200">
              {project.type}
            </span>
          ) : null}
        </div>

        <p className="mt-4 flex-1 leading-7 text-[#b9caca]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="tech-chip rounded-md px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.12em]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.deployUrl}
            target={project.deployUrl.startsWith('http') ? '_blank' : undefined}
            rel={project.deployUrl.startsWith('http') ? 'noreferrer' : undefined}
            className="premium-button inline-flex min-w-36 flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] transition"
            aria-label={`Ver projeto ${project.name}`}
          >
            <ExternalLink className="relative z-10" size={17} aria-hidden="true" />
            <span className="relative z-10">Ver projeto</span>
          </a>
          {project.backendUrl ? (
            <a
              href={project.backendUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-36 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-cyan-400/70 hover:bg-cyan-400/5 hover:text-cyan-300"
              aria-label={`Acessar backend do projeto ${project.name}`}
            >
              <Server size={17} aria-hidden="true" />
              Backend
            </a>
          ) : null}
          {hasCodeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-36 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-cyan-400/70 hover:bg-cyan-400/5 hover:text-cyan-300"
              aria-label={`Acessar código do projeto ${project.name}`}
            >
              <Code2 size={17} aria-hidden="true" />
              Código
            </a>
          ) : (
            <span
              className="inline-flex min-w-36 flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-zinc-600"
              aria-label={`Código do projeto ${project.name} indisponível no momento`}
              role="text"
            >
              <Code2 size={17} aria-hidden="true" />
              Código
            </span>
          )}
        </div>
      </div>
    </m.article>
  )
}

export default ProjectCard
