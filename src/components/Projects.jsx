import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'

function Projects() {
  return (
    <section id="projetos" className="relative border-y border-white/5 bg-black/10 py-24 sm:py-28">
      <div className="absolute right-[-12rem] top-24 h-96 w-96 rounded-full bg-cyan-400/8 blur-[90px]" />
      <div className="section-shell">
        <SectionTitle
          eyebrow="Projetos"
          title="Projetos práticos em desenvolvimento web"
          description="Aplicações desenvolvidas com interfaces modernas, integrações reais, organização de componentes e boas práticas de desenvolvimento."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
