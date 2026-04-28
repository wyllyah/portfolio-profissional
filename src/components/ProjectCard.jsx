import { m } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'

function ProjectCard({ project, index }) {
  const Icon = project.icon
  const hasCodeUrl = project.codeUrl && project.codeUrl !== '#'

  return (
    <m.article
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900/75 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-950/20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
    >
      <div className={`bg-gradient-to-br ${project.accent} p-6`}>
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-700 bg-slate-950/80 text-cyan-300">
          <Icon size={26} aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white">{project.name}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={project.deployUrl}
            target={project.deployUrl.startsWith('http') ? '_blank' : undefined}
            rel={project.deployUrl.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            aria-label={`Ver projeto ${project.name}`}
          >
            <ExternalLink size={17} aria-hidden="true" />
            Ver projeto
          </a>
          {hasCodeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/70 hover:text-cyan-300"
              aria-label={`Acessar código do projeto ${project.name}`}
            >
              <Code2 size={17} aria-hidden="true" />
              Código
            </a>
          ) : (
            <span
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-slate-800 px-4 py-3 text-sm font-semibold text-slate-500"
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
