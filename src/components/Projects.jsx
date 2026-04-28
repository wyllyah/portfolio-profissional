import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'

function Projects() {
  return (
    <section id="projetos" className="border-y border-slate-900 bg-slate-900/35 py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Projetos"
          title="Projetos práticos em frontend"
          description="Aplicações desenvolvidas para praticar interfaces, consumo de APIs, organização de componentes e integrações modernas."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
