import { CarFront, CloudSun, Film } from 'lucide-react'

export const projects = [
  {
    name: 'DriveGestor',
    description:
      'Sistema web para gestão de aluguel de carros, com cadastro de clientes, carros, pagamentos, autenticação e integração com Supabase.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'React Router'],
    codeUrl: '#',
    deployUrl: 'https://wyllyah.github.io/drive-gestor/',
    icon: CarFront,
    accent: 'from-cyan-400/15 via-slate-900 to-blue-500/15',
  },
  {
    name: 'App Clima',
    description:
      'Aplicação para consulta de clima em tempo real utilizando API externa, com interface responsiva e busca por cidade.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    codeUrl: '#',
    deployUrl: 'https://wyllyah.github.io/app-clima/',
    icon: CloudSun,
    accent: 'from-emerald-400/15 via-slate-900 to-cyan-400/15',
  },
  {
    name: 'Buscador de Filmes e Séries',
    description:
      'Aplicação para buscar filmes e séries consumindo uma API externa, exibindo informações como título, poster, resumo e avaliação.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    codeUrl: '#',
    deployUrl: 'https://wyllyah.github.io/buscador-filmes-series/',
    icon: Film,
    accent: 'from-blue-500/15 via-slate-900 to-violet-400/15',
  },
]
